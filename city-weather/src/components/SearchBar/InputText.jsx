import React from "react";
import styled from "styled-components";

function InputText({ placeholder }) {
  return (
    <InputTextStyled>
      <input
        type="text"
        aria-label="Search weather city"
        placeholder={placeholder}
      />
      <div className="icon">loupe</div>
    </InputTextStyled>
  );
}

export default InputText;
const InputTextStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background: white;
  -webkit-box-shadow: 1px 1px 11px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 1px 11px -3px rgba(0,0,0,0.75);
box-shadow: 1px 1px 11px -3px rgba(0,0,0,0.75);
    border-radius: 1rem;
    padding-left: 1.1rem;
 

  input {
    grid-column-start: 1
    width: 100%;
    height: 3.2rem;
    border: none;
    border-radius: 1rem 0 0 1rem;
   
   
  }

  .icon{
    grid-column-start: 2;
    display: flex;
    align-items: center;
  }
`;
