import React from "react";
import styled from "styled-components";

function PanelEmpty() {
  return (
    <PanelEmptyStyled>
      <div className="text-[#393838] flex flex-col absolute top-[7rem]  w-full">
        <span className="text-center text-3xl text-red-600">OUPS !</span>
        <span className=" text-center text-xl">Le nom de cette ville est</span>
        {/* <span className="text-center text-xl">est</span> */}
      </div>
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

      <div className="absolute bottom-[21rem] left-[9.5rem] rotate-6">
        <span className="text-center text-4xl">Inconnue</span>
      </div>
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
    bottom: 6.2rem;
    left: 3.4rem;
  }

  .floor {
    bottom: 0rem;
    width: 150%;
  }

  .message {
    font-size: 25px;
  }
`;
