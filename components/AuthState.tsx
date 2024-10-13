// components/AuthState.tsx
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function AuthState() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Очистити підписку
  }, []);

  return (
    <div>
      {user ? <p>Welcome, {user.email}</p> : <p>You are not logged in.</p>}
    </div>
  );
}
