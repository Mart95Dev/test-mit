import styled from "styled-components";
import InputText from "./InputText";

function SearchBox() {
  return (
    <SearchBoxStyled>
      <InputText placeholder="Search City" />
    </SearchBoxStyled>
  );
}

export default SearchBox;
const SearchBoxStyled = styled.div`
  z-index: 4;
  position: absolute;
  top: 1.2rem;
  left: 1rem;
  width: 23rem;
`;
