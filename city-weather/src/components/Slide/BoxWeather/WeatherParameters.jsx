import React from "react";
import styled from "styled-components";

function WeatherParameters({ temp, WindSpeed, tempIcon, altImage }) {
  return (
    <WeatherParametersStyled>
      <span>{`${temp}°C`}</span>
      <span className=" border-[#D9D9D9] border-l border-r">
        <img src={tempIcon} alt={altImage} />
      </span>
      <span>{`${WindSpeed}km/h`}</span>
    </WeatherParametersStyled>
  );
}

export default WeatherParameters;

const WeatherParametersStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem; 

  span {
    padding: 0.3rem 2.5rem;
    font-size: 1.2rem;
  }
`;
