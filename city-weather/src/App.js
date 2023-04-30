import { MapPage } from "./components/Map/MapPage";
import SearchBox from "./components/SearchBar/SearchBox";
import Panel from "./components/Slide/Panel";
import styled from "styled-components";

function App() {
  return (
    <AppStyled>
      <SearchBox />
      <Panel />
      <MapPage />
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  position: relative;
`;
