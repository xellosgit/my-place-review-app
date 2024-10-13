// pages/index.tsx
import PlaceCard from "../components/PlaceCard";

const places = [
  {
    id: 1,
    name: "Cafe Mocha",
    description: "Best coffee in town",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Sunny Park",
    description: "Great place for a walk",
    rating: 4.7,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Popular Places</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
