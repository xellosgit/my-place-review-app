import { FirebaseError } from "firebase/app"; // Імпортуємо FirebaseError
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // Переконайтеся, що цей рядок правильний
import { auth } from "../lib/firebase";

export default function LoginForm() {
  const [email, setEmail] = useState<string>(""); // Вказуємо тип для useState
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Successfully logged in!");
    } catch (err: unknown) {
      const error = err as FirebaseError; // Приводимо помилку до типу FirebaseError
      setError(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
