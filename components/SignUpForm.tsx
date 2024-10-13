import { useState } from "react";
import { createUserWithEmailAndPassword, AuthError } from "firebase/auth"; // Імпортуємо тип помилки
import { auth } from "../lib/firebase";

export default function SignUpForm() {
  const [email, setEmail] = useState<string>(""); // Вказуємо точний тип
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      setError(null); // Скидаємо помилки, якщо реєстрація пройшла успішно
    } catch (err: unknown) {
      // Приводимо тип до AuthError для безпечної обробки
      const error = err as AuthError;
      setError(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col gap-4">
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
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Sign Up
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Registration successful!</p>}
    </form>
  );
}
