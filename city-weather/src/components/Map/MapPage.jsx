import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { positionCities } from "./coordinates";

export function MapPage() {
  return (
    <MapContainer
      center={[48.887616, 2.270919]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positionCities.map(({ id, latitude, longitude }) => {
        return (
          <Marker key={id} position={[latitude, longitude]}>
            <Popup>ville de {id}.Température ....</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default MapPage;
