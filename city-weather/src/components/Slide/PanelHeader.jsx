import React from "react";
import styled from "styled-components";

function PanelHeader({ city }) {
  return (
    <PanelHeaderStyled className="pt-20 ">
      <div className=" meteo uppercase">Météo</div>
      <span className="city absolute pt-20">{city}</span>
      <img className="panneau" src="./images/panneau-ville.png" alt={city} />
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
    left: 4.2rem;
    font-size: 2rem;
  }

  .panneau {
    margin-left: 2rem;
    width: 85%;
  }
`;
