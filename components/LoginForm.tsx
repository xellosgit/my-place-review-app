<<<<<<< HEAD
import { FirebaseError } from "firebase/app"; // Імпортуємо FirebaseError
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
=======
import { FirebaseError } from 'firebase/app'; // Імпортуємо FirebaseError
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
>>>>>>> 47185d1dc4e3547641e89b167e1366609879f0d1

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
<<<<<<< HEAD
      alert("Successfully logged in!");
    } catch (err) {
      const error = err as FirebaseError; // Приводимо помилку до типу FirebaseError
      setError(error.message || "An unexpected error occurred.");
=======
      alert('Successfully logged in!');
    } catch (err) {
      const error = err as FirebaseError; // Приводимо помилку до типу FirebaseError
      setError(error.message || 'An unexpected error occurred.');
>>>>>>> 47185d1dc4e3547641e89b167e1366609879f0d1
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
