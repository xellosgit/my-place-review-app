// components/PlaceCard.tsx
import { Place } from "../types"; // Імпортуємо тип Place
import Link from "next/link";

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{place.name}</h2>
      <p>{place.description}</p>
      <p className="text-yellow-500">⭐ {place.rating}</p>
      <Link href={`/place/${place.id}`} className="text-blue-600">
        View More
      </Link>
    </div>
  );
}
