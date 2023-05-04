import React, { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../context/AppContext";
import PanelHeader from "./PanelHeader";
import BoxWeather from "./../../Reusable/BoxWeather";
import ButtonPanel from "./../Slide/ButtonPanel";
import PanelEmpty from "./PanelEmpty"; // @Fixme
import { translateDayAndDate, ellipse } from "./helper";

/**
 * Display panel with weather informations
 *
 */

const Panel = () => {
  const { weatherMarkerMap, isError, isOpen, setIsOpen } =
    useContext(AppContext);

  const handleClickPanel = () => {
    if (weatherMarkerMap.length === 5) setIsOpen(!isOpen);
  };
  return (
    <PanelStyled
      className="text-3xl font-bold underline"
      style={isOpen ? { left: "0rem" } : { left: "-26rem" }}
    >
      <ButtonPanel isSlideOpened={isOpen} onClick={() => handleClickPanel()} />

      {weatherMarkerMap.length === 5 && !isError ? (
        <>
          <PanelHeader
            city={ellipse(weatherMarkerMap[4]?.dataApi.location.name)}
          />
          <BoxWeather
            className="boxWeatherStyle"
            day="Aujourd'hui"
            date={translateDayAndDate(
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[0].date
            )}
            tempMini={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[0].day.mintemp_c
            }
            tempMax={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[0].day.maxtemp_c
            }
            temp={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[0].day.avgtemp_c
            }
            WindSpeed={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[0].day.avgvis_km
            }
            tempIcon={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[0].day.condition
                .icon
            }
            altImage={weatherMarkerMap[4]?.dataApi.location.name}
          />

          <BoxWeather
            className="boxWeatherStyle"
            day="Demain"
            date={translateDayAndDate(
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[1].date
            )}
            tempMini={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[1].day.mintemp_c
            }
            tempMax={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[1].day.maxtemp_c
            }
            temp={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[1].day.avgtemp_c
            }
            WindSpeed={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[1].day.avgvis_km
            }
            tempIcon={
              weatherMarkerMap[4]?.dataApi.forecast.forecastday[1].day.condition
                .icon
            }
            altImage={weatherMarkerMap[4]?.dataApi.location.name}
          />
        </>
      ) : (
        isError && <PanelEmpty />
      )}
    </PanelStyled>
  );
};

export default Panel;

const PanelStyled = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  height: 100vh;
  text-decoration: none;

  width: 26rem;
  background: white;
  -webkit-box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);

  .boxWeatherStyle {
    position: initial;
  }
  .header {
    position: relative;
    padding-top: 68px;
    background: red;
    width: 100%;
    height: 255px;

    .meteo {
      position: absolute;
      display: flex;
      align-items: center;
      color: white;
      letter-spacing: 0.2em;
      font-size: 1.4em;
    }

    .panneau {
      margin-left: 2rem;
      width: 85%;
    }
  }

  .box {
    background: blue;
    width: 100%;
    height: 245px;
  }

  .space {
    width: 100%;
    height: 50px;
  }
`;
