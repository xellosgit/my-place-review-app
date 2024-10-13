// components/AddPlaceForm.tsx
import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Place } from "../types"; // Імпортуємо тип Place

export default function AddPlaceForm() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleAddPlace = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const placesCollection = collection(db, "places");
      const newPlace: Place = {
        // Використовуємо тип Place
        id: new Date().getTime().toString(),
        name,
        description,
        rating,
      };
      await addDoc(placesCollection, newPlace);
      setSuccess(true);
      setError(null);
      setName("");
      setDescription("");
      setRating(0);
    } catch (err) {
      console.error("Error adding place:", err);
      setError("Error adding place");
    }
  };

  return (
    <form onSubmit={handleAddPlace} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Place Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="p-2 border rounded"
        required
        min="0"
        max="5"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Place
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Place added successfully!</p>}
    </form>
  );
}
