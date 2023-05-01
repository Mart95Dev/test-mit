import { useState } from "react";
import { MapPage } from "./components/Map/MapPage";
import SearchBox from "./components/SearchBar/SearchBox";
import Panel from "./components/Slide/Panel";
import styled from "styled-components";
import AppContext from "./context/AppContext";
import { useFetch } from "./components/Map/useFetch";

function App() {
  //state
  const [searchCity, setSearchCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherMarkerMap, setWeatherMarkerMap] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { fetchData } = useFetch();

  const AppContextValue = {
    weatherData,
    setWeatherData,
    searchCity,
    setSearchCity,
    isOpen,
    setIsOpen,
    fetchData,
    weatherMarkerMap,
    setWeatherMarkerMap,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      <AppStyled>
        <SearchBox />
        <Panel />
        <MapPage />
      </AppStyled>
    </AppContext.Provider>
  );
}

export default App;

const AppStyled = styled.div`
  position: relative;
`;
