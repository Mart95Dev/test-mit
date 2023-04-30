import React from "react";
import styled from "styled-components";

function WeatherParameters() {
  return (
    <WeatherParametersStyled>
      <span>Temp°</span>
      <span className=" border-[#D9D9D9] border-l border-r">Icon</span>
      <span>15km/h</span>
    </WeatherParametersStyled>
  );
}

export default WeatherParameters;

const WeatherParametersStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;

  border-bottom: 1px solid #d9d9d9;

  span {
    padding: 0.3rem 2.5rem;
    font-size: 1.2rem;
  }
`;
