"use client"; // Ensures it's a client-side component

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import MapContainer, TileLayer, and Marker to prevent SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });

  return (
    <div className="h-[500px] w-full">
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[location.lat, location.lng]}>
          <Popup>Current Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
