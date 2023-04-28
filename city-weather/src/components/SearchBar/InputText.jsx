import React from "react";
import styled from "styled-components";
import ButtonSearch from "./ButtonSearch";

function InputText({ placeholder }) {
  return (
    <InputTextStyled>
      <input type="text" aria-label={placeholder} placeholder={placeholder} />
      <ButtonSearch />
    </InputTextStyled>
  );
}

export default InputText;
const InputTextStyled = styled.div`
  display: flex;
  align-items: center;
  background: white;
  -webkit-box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 11px -3px rgba(0, 0, 0, 0.75);
  border-radius: 1rem;
  padding-left: 1rem;
  border: 1px solid #929090;

  input {
    color: #393838;
    width: 80%;
    height: 3.2rem;
    border: none;
    border-radius: 1rem 0 0 1rem;
    outline: none;
    padding-left: 10px;
  }
`;
