import styled from "styled-components";
import InputText from "./InputText";

function SearchBox() {
  return (
    <SearchBoxStyled>
      <InputText placeholder="Search weather city" />
    </SearchBoxStyled>
  );
}

export default SearchBox;
const SearchBoxStyled = styled.div`
  z-index: 2;
  position: absolute;
  top: 1.2rem;
  left: 5rem;
  width: 15rem;
`;
