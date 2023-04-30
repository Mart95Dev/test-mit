import React from "react";
import styled from "styled-components";

function TitleDaily({ day, date }) {
  return (
    <TitleDailyStyled className="capitalize">
      <span>{day}</span>
      <span>{date}</span>
    </TitleDailyStyled>
  );
}

export default TitleDaily;

const TitleDailyStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 2.7rem;

  span {
    font-size: 1.4rem;
    color: #689df6;
    font-weight: 300;
  }
`;
