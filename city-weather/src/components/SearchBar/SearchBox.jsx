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
  position: fixed;
  top: 1.2rem;
  left: 1.4rem;
  width: 23rem;
`;
