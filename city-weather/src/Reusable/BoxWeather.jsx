import React from "react";
import styled from "styled-components";
import TitleDaily from "./../components/Slide/BoxWeather/TitleDaily";
import WeatherParameters from "./../components/Slide/BoxWeather/WeatherParameters";
import BoxWeatherMinMax from "./BoxWeatherMinMax";

function BoxWeather({ day, date, className }) {
  return (
    <BoxWeatherStyled className={className}>
      <TitleDaily day={day} date={date} />
      <WeatherParameters />
      <div className="flex gap-10">
        <BoxWeatherMinMax title="Minimum of day" temp="07°" />
        <BoxWeatherMinMax title="Maximal of day" temp="27°" />
      </div>
    </BoxWeatherStyled>
  );
}

export default BoxWeather;

const BoxWeatherStyled = styled.div`
  z-index: 2;
  width: 26rem;
  position: fixed;
  padding-top: 0.5rem;
  border-top: 1px solid #d9d9d9;
  background: white;
`;
