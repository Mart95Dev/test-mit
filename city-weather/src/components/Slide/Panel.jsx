import React, { useState } from "react";
import styled from "styled-components";
import PanelHeader from "./PanelHeader";
// import MessageEmpty from './card/MessageEmpty';
import BoxWeather from "./../../Reusable/BoxWeather";

function Panel() {
  return (
    <PanelStyled className="text-3xl font-bold underline">
      <PanelHeader />
      <BoxWeather
        className="absolute top-[17rem]"
        day="today"
        date="thursday 04/29"
      />

      <BoxWeather
        className="absolute top-[34rem]"
        top="35.4rem"
        day="tomorrow"
        date="friday 04/30"
      />
    </PanelStyled>
  );
}

export default Panel;

const PanelStyled = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 26rem;
  background: white;
  -webkit-box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);

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
