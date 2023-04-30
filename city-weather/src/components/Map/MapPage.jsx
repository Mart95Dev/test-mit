import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { positionCities } from "./coordinates";
import { zoomStart } from "./coordinates";
import styled from "styled-components";
import Card from "./../../Reusable/Card";

export function MapPage() {
  return (
    <MapPageStyled>
      <MapContainer
        center={[zoomStart[0].latitude, zoomStart[0].longitude]}
        zoom={5}
        scrollWheelZoom={true}
        zoomControl={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positionCities.map(({ id, latitude, longitude, url }) => {
          return (
            <Marker key={id} position={[latitude, longitude]}>
              <Popup>
                <Card cityName={id} image={url} />
              </Popup>
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
