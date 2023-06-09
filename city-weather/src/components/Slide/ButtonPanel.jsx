import React from "react";
import styled from "styled-components";
import { MdOutlineArrowRight } from "react-icons/md";

function ButtonPanel({ onClick }) {
  return (
    <ButtonPanelStyled onClick={onClick}>
      <MdOutlineArrowRight className="icon" />
    </ButtonPanelStyled>
  );
}

export default ButtonPanel;

const ButtonPanelStyled = styled.button`
  border: 4px solid red;
  z-index: 10;
  background: white;
  border: 1px solid #585757;
  border-radius: 0 0.3rem 0.3rem 0;
  width: 1.3rem;
  height: 3rem;
  position: absolute;
  top: 23rem;
  left: 26rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    color: #689df6;
    font-size: 5rem;
    transform: rotate(-180deg);

    :hover {
      color: #585757;
    }

    :active {
      color: #929090;
    }
  }
`;
