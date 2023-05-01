import React from "react";
import styled from "styled-components";

function BoxWeatherMinMax({ title, temp }) {
  return (
    <BoxWeatherMinMaxStyled>
      <span className="font-sans">{title}</span>
      <span>{`${temp}°C`}</span>
    </BoxWeatherMinMaxStyled>
  );
}

export default BoxWeatherMinMax;

const BoxWeatherMinMaxStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #585757;
  width: 11em;
  height: 3em;
  border-radius: 0.5rem;
  padding: 0.2em;
  position: relative;
  top: 0.5em;
  left: 0.5em;
  -webkit-box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    line-height: 1.3rem;
  }
`;
