import React, { useState } from "react";
import styled from "styled-components";
import PanelHeader from "./PanelHeader";
// import MessageEmpty from './card/MessageEmpty';
import BoxWeather from "./../../Reusable/BoxWeather";
import ButtonPanel from "./../Slide/ButtonPanel";

function Panel() {
  //state
  const [isOpen, setIsOpen] = useState(false);

  //comportement
  const handeClickPanel = (open) => {
    setIsOpen(!open);
    console.log("panel", isOpen);
  };

  return (
    <PanelStyled
      className="text-3xl font-bold underline"
      style={isOpen ? { left: "0rem" } : { left: "-26rem" }}
    >
      <ButtonPanel
        isSlideOpened={isOpen}
        onClick={() => handeClickPanel(isOpen)}
      />

      {}
      <>
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
      </>
    </PanelStyled>
  );
}

export default Panel;

const PanelStyled = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  height: 100vh;

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
