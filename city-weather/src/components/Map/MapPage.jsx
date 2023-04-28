import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { positionCities } from "./coordinates";
import { zoomStart } from "./coordinates";
// import SearchBox from "./../SearchBar/SearchBox";
import styled from "styled-components";

export function MapPage() {
  return (
    <MapPageStyled>
      <MapContainer
        center={[zoomStart[0].latitude, zoomStart[0].longitude]}
        zoom={6}
        scrollWheelZoom={true}
        className="map"
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
    </MapPageStyled>
  );
}

export default MapPage;

const MapPageStyled = styled.div`
  min-width: 365px;

  .map {
    position: relative;
    z-index: 1;
  }
`;
