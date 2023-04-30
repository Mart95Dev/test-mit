import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { positionCities } from "./coordinates";
import { zoomStart } from "./coordinates";
import styled from "styled-components";
import Card from "./../../Reusable/Card";
import { EMPTY_DATA_PANEL } from "./../../api/EmptyDataPanel";
// import { translateDate } from "../Slide/helper";
// import { cityWeather } from "../Slide/helper";

export function MapPage() {
  //this.state.
  const [weatherData, setWeatherData] = useState(EMPTY_DATA_PANEL);
  const [weatherMarkerMap, setWeatherMarkerMap] = useState([]);

  //comportement
  const dataApi = async (key, url, id) => {
    // const partialUrl = `${url}?appid=${key}&exclude=current,minutely,hourly,alerts&units=metric&lat=${latitude}&lon=${longitude}`;
    const partialUrl = `${url}?key=${key}&days=3&dt&q=${id}`;
    const response = await fetch(partialUrl);
    return response.json();
  };

  const fetchData = async () => {
    const API = process.env.REACT_APP_API_KEY;
    const URL = process.env.REACT_APP_API_URL;
    const promises = positionCities.map(async ({ id, image }) => {
      const data = await dataApi(API, URL, id);
      return { dataApi: data, img: image };
    });
    const data = await Promise.all(promises);
    setWeatherMarkerMap(data);
    // const dailyDtValues = await data.map(({ daily }) =>
    //   daily.map(({ dt }) => dt)
    // );
    // setApiDataTimestamp(dailyDtValues);

    // const dailyTempValues = await data.map(({ daily }) =>
    //   daily.map(({ temp }) => temp)
    // );
    // setApiDataTemp(dailyTempValues);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        {/* {positionCities.map(({ id, latitude, longitude, url }) => { */}
        {weatherMarkerMap.map((data) => {
          return (
            <Marker
              key={data.dataApi.location.name}
              position={[data.dataApi.location.lat, data.dataApi.location.lon]}
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
