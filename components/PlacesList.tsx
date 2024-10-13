// components/PlacesList.tsx
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import PlaceCard from "./PlaceCard";
import { Place } from "../types"; // Імпортуємо Place з types.ts

export default function PlacesList() {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const placesCollection = collection(db, "places");
      const placesSnapshot = await getDocs(placesCollection);
      const placesList = placesSnapshot.docs.map((doc) => ({
        id: doc.id, // ID з Firestore, який завжди є рядком
        ...doc.data(),
      })) as Place[];

      setPlaces(placesList);
    };

    fetchPlaces();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}
