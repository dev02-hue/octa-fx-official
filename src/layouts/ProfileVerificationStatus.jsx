import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const ProfileVerificationStatus = ({ userId }) => {
  const [status, setStatus] = useState("verification Pending");

  useEffect(() => {
    const fetchVerificationStatus = async () => {
      if (!userId) return;

      try {
        const userDoc = doc(db, "verifications", userId);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const { createdAt } = docSnap.data();
          if (createdAt) {
            const verificationTime = createdAt.toDate();
            const currentTime = new Date();
            const timeDiff =
              (currentTime - verificationTime) / (1000 * 60 * 60); // Convert ms to hours

            if (timeDiff >= 1) {
              setStatus("Profile Verified");
              await updateDoc(userDoc, { status: "Profile Verified" });
            }
          }
        }
      } catch (error) {
        console.error("Error fetching verification status:", error);
      }
    };

    fetchVerificationStatus();
  }, [userId]);

  return (
    <div className="mt-4 p-2 bg-gray-800 text-white rounded">
      <p className="text-center font-bold">{status}</p>
    </div>
  );
};

ProfileVerificationStatus.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default ProfileVerificationStatus;
