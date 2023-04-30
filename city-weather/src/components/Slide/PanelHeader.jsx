import React from "react";
import styled from "styled-components";

function PanelHeader() {
  return (
    <PanelHeaderStyled className="pt-20 ">
      <div className=" meteo uppercase">Météo</div>
      <span className="city absolute pt-20 ">nom de la ville</span>
      <img
        className="panneau"
        src="./images/panneau-ville.png"
        alt="panneau de la ville"
      />
    </PanelHeaderStyled>
  );
}

export default PanelHeader;

const PanelHeaderStyled = styled.div`
  background: #689df6;

  .meteo {
    position: absolute;
    top: 4.1em;
    left: 7.4em;
    color: white;
    letter-spacing: 0.2em;
    font-size: 1.4em;
  }

  .city {
    top: 5.7rem;
    left: 6.6rem;
    font-size: 2rem;
  }

  .panneau {
    margin-left: 2rem;
    width: 85%;
  }
`;
