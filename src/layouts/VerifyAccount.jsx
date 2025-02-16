import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const VerifyAccount = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    idFile: null,
    idType: "", // Stores selected ID type
  });
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [showIdOptions, setShowIdOptions] = useState(false); // Controls ID type selection visibility
  const [showFileUpload, setShowFileUpload] = useState(false); // Controls file input visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idFile: e.target.files[0] });
  };

  const handleIdTypeSelect = (type) => {
    setFormData({ ...formData, idType: type });
    setShowFileUpload(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setMessage("");

    try {
      let idFileUrl = "";

      if (formData.idFile) {
        const fileRef = ref(
          storage,
          `id_verifications/${formData.idFile.name}`
        );
        await uploadBytes(fileRef, formData.idFile);
        idFileUrl = await getDownloadURL(fileRef);
      }

      await addDoc(collection(db, "verifications"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        idType: formData.idType,
        idFileUrl: idFileUrl || "",
        createdAt: new Date(),
      });

      setMessage("Verification submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        idFile: null,
        idType: "",
      });
      setShowIdOptions(false);
      setShowFileUpload(false);
    } catch (error) {
      console.error("Error submitting verification:", error);
      setMessage("Error submitting verification. Please try again.");
    }
    setUploading(false);
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md w-full mx-auto">
      <button
        type="button"
        className="mb-4 px-4 py-2 bg-blue-500  text-white font-semibold 
             rounded-lg hover:bg-blue-600 transition-all duration-300"
        onClick={() => window.history.back()}
      >
        ⬅️ Go Back
      </button>

      <h2 className="text-2xl font-bold mb-4">
        OCTAFX TRADING SIGNALS Verification
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-1/2 p-2 bg-gray-800 text-white border rounded"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-1/2 p-2 bg-gray-800 text-white border rounded"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 bg-gray-800 text-white border rounded"
          required
        />

        {/* ID Verification Section */}
        <div>
          <label
            className=" text-white max-w-[20rem] py-3 px-4 bg-blue-500 
             rounded-lg text-center cursor-pointer font-semibold 
             hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
            onClick={() => setShowIdOptions(!showIdOptions)}
          >
            Valid Form of Identification ⬇️
          </label>

          {showIdOptions && (
            <div className="mt-2 space-x-2">
              <button
                type="button"
                className={`p-2 rounded ${
                  formData.idType === "ID Card"
                    ? "bg-yellow-500"
                    : "bg-gray-700"
                }`}
                onClick={() => handleIdTypeSelect("ID Card")}
              >
                ID Card
              </button>
              <button
                type="button"
                className={`p-2 rounded ${
                  formData.idType === "Passport"
                    ? "bg-yellow-500"
                    : "bg-gray-700"
                }`}
                onClick={() => handleIdTypeSelect("Passport")}
              >
                Passport
              </button>
              <button
                type="button"
                className={`p-2 rounded ${
                  formData.idType === "Driver's License"
                    ? "bg-yellow-500"
                    : "bg-gray-700"
                }`}
                onClick={() => handleIdTypeSelect("Driver's License")}
              >
                Driver&apos;s License
              </button>
            </div>
          )}

          {/* Show file input only if an ID type is selected */}
          {showFileUpload && (
            <div className="mt-2">
              <label className="block text-gray-400">
                Upload {formData.idType}:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 bg-gray-800 text-white border rounded"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black p-2 font-bold rounded"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Submit"}
        </button>
      </form>

      {message && <p className="mt-4 text-center text-green-400">{message}</p>}
    </div>
  );
};

export default VerifyAccount;
