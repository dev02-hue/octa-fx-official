import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import ProfileVerificationStatus from "./ProfileVerificationStatus";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await currentUser.reload();
        setUser(currentUser);

        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const referralLink = user?.email
    ? `https://octa-fx-official.vercel.app/${user.email}`
    : "Loading...";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 sec
    });
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md w-full md:w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={
            user?.photoURL ||
            "https://res.cloudinary.com/dqhllq2ht/image/upload/v1739616057/logo1_iah2ds.jpg"
          }
          alt="Profile"
          className="w-16 h-16 rounded-full border"
        />
        <div>
          <p className="text-lg font-semibold">
            {userData?.firstName} {userData?.lastName || "User"}
          </p>
          <p className="text-gray-400">{user?.email}</p>
          <ProfileVerificationStatus />
          <p className="text-gray-400">{userData?.country}</p>
          <p className="text-gray-400">{userData?.phone}</p>
          <p className="text-gray-400">
            Joined on{" "}
            {userData?.createdAt
              ? new Date(userData.createdAt).toLocaleDateString()
              : "Not Available"}
          </p>
          <p className="text-gray-400">
            Last Sign-In:{" "}
            {user?.metadata?.lastSignInTime
              ? new Date(user.metadata.lastSignInTime).toLocaleString()
              : "Not Available"}
          </p>
        </div>
      </div>

      <Link to={"/dashboard/profile/verify"}>
        <div className="bg-yellow-500 text-black p-3 text-center font-bold mb-4">
          Verify Account
        </div>
      </Link>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Referral Link</h3>
        <div className="flex">
          <input
            type="text"
            readOnly
            value={referralLink}
            className="w-full p-2 bg-gray-800 text-white border rounded-l"
          />
          <button
            onClick={handleCopy}
            className="bg-yellow-500 text-black p-2 rounded-r"
          >
            {copySuccess ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      <h3 className="text-lg font-semibold">Account Details</h3>
      <div className="border-t mt-2 pt-2">
        <p className="flex justify-between">
          <span>Name</span>
          <span>{userData?.firstName || "-"}</span>
        </p>
        <p className="flex justify-between">
          <span>No. Referral</span>
          <span>{userData?.referrals || 0}</span>
        </p>
        <p className="flex justify-between">
          <span>Bitcoin Balance</span>
          <span>$0.00</span>
        </p>
        <p className="flex justify-between">
          <span>Ethereum Balance</span>
          <span>$0.00</span>
        </p>
        <p className="flex justify-between">
          <span>Litecoin Balance</span>
          <span>$0.00</span>
        </p>
        <p className="flex justify-between">
          <span>USDT Balance</span>
          <span>$0.00</span>
        </p>
        <p className="flex justify-between">
          <span>XRP Balance</span>
          <span>$0.00</span>
        </p>
        <p className="flex justify-between">
          <span>DOGE Balance</span>
          <span>$0.00</span>
        </p>
        <p className="flex justify-between">
          <span>BNB Balance</span>
          <span>$0.00</span>
        </p>
        <p className="flex justify-between font-bold">
          <span>Total Balance</span>
          <span>$0.00</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
