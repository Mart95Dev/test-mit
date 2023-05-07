import { useEffect, useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { positionCities } from "./coordinates";
import styled from "styled-components";
import Card from "./../../Reusable/Card";
import L from "leaflet";

/**
 * display reset button
 *
 */
function ResetViewButton({ center, zoom }) {
  const map = useMap();
  const { inputRef, setIsOpen, setTimestampCurrent } = useContext(AppContext);

  function handleClick() {
    inputRef.current.value = null;
    map.flyTo(center, zoom);
    setIsOpen(false);
    setTimestampCurrent(new Date());
  }

  return (
    <ResetViewButtonStyled>
      <button className="btn-reset" onClick={handleClick}>
        Reset
      </button>
    </ResetViewButtonStyled>
  );
}

/**
 * display the marker of the searched city
 *
 */
function SetCity({ data }) {
  const map = useMap();

  const redIcon = L.icon({
    iconUrl: "/images/marker-icon-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  useEffect(() => {
    if (map && data[4] && data[4].dataApi !== "error") {
      map.flyTo(
        [data[4].dataApi.location.lat, data[4].dataApi.location.lon],
        8
      );
    }
  }, [data[4]]);

  return data[4] && data[4].dataApi !== "error" ? (
    <Marker
      key={data[4].dataApi.location.name}
      position={[data[4].dataApi.location.lat, data[4].dataApi.location.lon]}
      icon={redIcon}
    >
      <Popup>
        <Card
          cityName={data[4].dataApi.location.name}
          image={data[4].img}
          days={data[4].dataApi.forecast.forecastday}
        />
      </Popup>
    </Marker>
  ) : null;
}

/**
 * display map and marker on map on load
 *
 */
export function MapPage() {
  const defaultIcon = L.icon({
    iconUrl: "/images/marker-icon-default.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const {
    fetchData,
    setWeatherMarkerMap,
    weatherMarkerMap,
    centerMarkerMap,
    timestampCurrent,
  } = useContext(AppContext);

  useEffect(() => {
    fetchData(positionCities).then((data) => {
      setWeatherMarkerMap(data);
    });
  }, [timestampCurrent]);

  return (
    <MapPageStyled>
      <MapContainer
        center={centerMarkerMap}
        zoom={5}
        scrollWheelZoom={true}
        zoomControl={false}
        className="map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {weatherMarkerMap.map((data) => {
          if (data.dataApi !== "error") {
            return (
              <Marker
                key={data.dataApi.location.name}
                position={[
                  data.dataApi.location.lat,
                  data.dataApi.location.lon,
                ]}
                icon={defaultIcon}
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
        <SetCity data={weatherMarkerMap} />
        <ZoomControl position="bottomright" />
        <ResetViewButton center={{ lat: 48.887616, lng: 2.270919 }} zoom={5} />
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

const ResetViewButtonStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9999;
  .btn-reset {
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px 16px;
  }
`;
