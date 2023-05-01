import React from "react";
import styled from "styled-components";
import TitleDaily from "./../components/Slide/BoxWeather/TitleDaily";
import WeatherParameters from "./../components/Slide/BoxWeather/WeatherParameters";
import BoxWeatherMinMax from "./BoxWeatherMinMax";

/**
 *
 * Box to display informations of Weather on panel
 *
 */

function BoxWeather({
  day,
  date,
  className,
  tempMini,
  tempMax,
  temp,
  WindSpeed,
  tempIcon,
  altImage,
}) {
  return (
    <BoxWeatherStyled className={className}>
      <TitleDaily day={day} date={date} />
      <WeatherParameters
        temp={temp}
        WindSpeed={WindSpeed}
        tempIcon={tempIcon}
        altImage={altImage}
      />
      <div className="flex gap-10">
        <BoxWeatherMinMax title="Tempétaure min." temp={tempMini} />
        <BoxWeatherMinMax title="Tempétaure max." temp={tempMax} />
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
