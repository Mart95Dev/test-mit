import React from "react";
import styled from "styled-components";
import MessageEmpty from "./../Slide/MessageEmpty";

function PanelEmpty() {
  return (
    <PanelEmptyStyled>
      <img
        className="image panel"
        src="/images/panneau-vide.png"
        alt="panneau de ville indiquant aucun nom de ville"
      />
      <img
        className="image floor"
        src="/images/butte.png"
        alt="sol nu avec un socle en béton"
      />
      <MessageEmpty className="message" />
    </PanelEmptyStyled>
  );
}

export default PanelEmpty;

const PanelEmptyStyled = styled.div`
  .image {
    position: absolute;
    width: 85%;
  }

  .panel {
    z-index: 5;
    top: 21rem;
    left: 1.9rem;
  }

  .floor {
    bottom: 0rem;
    width: 150%;
  }

  .message {
    font-size: 25px;
  }
`;
