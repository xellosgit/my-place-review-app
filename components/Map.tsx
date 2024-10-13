// components/Map.tsx
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoieGVsbG9zczYiLCJhIjoiY20yN3NhMnE5MTl3bDJqczZnZ3Y1bGJtZSJ9.s-_SvXzjCtiOziCKYZYraA";

export default function Map({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainer.current) {
      new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 12,
      });
    }
  }, [latitude, longitude]);

  return <div ref={mapContainer} className="w-full h-64" />;
}
