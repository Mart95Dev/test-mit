import React from "react";
import { SlMagnifier } from "react-icons/sl";
import styled from "styled-components";

function ButtonSearch() {
  return (
    <ButtonSearchStyled>
      <SlMagnifier className="icon" />
    </ButtonSearchStyled>
  );
}

export default ButtonSearch;

const ButtonSearchStyled = styled.button`
  position: absolute;
  top: 1rem;
  right: 3.3rem;
  border: none;

  .icon {
    position: relative;
    left: 1.5rem;
    font-size: 22px;
    color: #689df6;
    font-weight: bold;

    :hover {
      color: #929090;
    }

    :active {
      color: #393838;
    }
  }
`;
