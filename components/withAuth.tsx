import { useRouter } from "next/router";
import { ReactNode, useEffect, useState, ComponentType } from "react";
import { onAuthStateChanged, User } from "firebase/auth"; // Імпортуємо правильний тип User
import { auth } from "../lib/firebase";

interface WithAuthProps {
  children?: ReactNode;
}

export default function withAuth<P extends object>(
  Component: ComponentType<P>
) {
  return function ProtectedComponent(props: P & WithAuthProps) {
    const [loading, setLoading] = useState<boolean>(true); // Точний тип
    const [user, setUser] = useState<User | null>(null); // Замість any

    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        } else {
          router.push("/login"); // Перенаправлення на сторінку логіну
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) return <p>Loading...</p>;

    return user ? <Component {...props} /> : null;
  };
}
