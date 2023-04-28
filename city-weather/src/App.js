import { MapPage } from "./components/Map/MapPage";
import styled from "styled-components";
import SearchBox from "./components/SearchBar/SearchBox";

function App() {
  return (
    <AppStyled>
      <SearchBox />
      <MapPage />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div``;
