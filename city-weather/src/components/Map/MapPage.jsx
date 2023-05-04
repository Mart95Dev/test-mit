import { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { positionCities } from "./coordinates";
import styled from "styled-components";
import Card from "./../../Reusable/Card";
import L from "leaflet";

/**
 * display map and marker on map on load
 *
 */

export function MapPage() {
  const redIcon = L.icon({
    iconUrl: "/images/marker-icon-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  const defaultIcon = L.icon({
    iconUrl: "/images/marker-icon-default.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const {
    fetchData,
    weatherMarkerMap,
    setWeatherMarkerMap,
    centerMarkerMap,
    timestampCurrent,
  } = useContext(AppContext);

  useEffect(() => {
    fetchData(positionCities).then((data) => {
      setWeatherMarkerMap(data);
    });
  }, [timestampCurrent]);

  useEffect(() => {
    if (weatherMarkerMap[4]) {
    }
  });

  return (
    <MapPageStyled>
      <MapContainer
        center={centerMarkerMap}
        zoom={5}
        scrollWheelZoom={true}
        zoomControl={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {weatherMarkerMap.map((data, i) => {
          if (data.dataApi !== "error") {
            return (
              <Marker
                key={data.dataApi.location.name}
                position={[
                  data.dataApi.location.lat,
                  data.dataApi.location.lon,
                ]}
                icon={data.img.includes("cdn") === true ? redIcon : defaultIcon}
              >
                <Popup>
                  <Card
                    cityName={data.dataApi.location.name}
                    image={data.img}
                    days={data.dataApi.forecast.forecastday}
                  />
                </Popup>
              </Marker>
            );
          }
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
