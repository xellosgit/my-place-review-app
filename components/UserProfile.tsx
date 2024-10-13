import { useState, useEffect } from "react";
import { onAuthStateChanged, updateProfile, User } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState<string>("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setDisplayName(currentUser?.displayName || "");
    });

    return () => unsubscribe();
  }, []);

  const handleUpdate = async () => {
    if (user) {
      await updateProfile(user, { displayName });
      alert("Profile updated!");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Update Profile
      </button>
    </div>
  );
}
