import { useState, useRef } from "react";
import { MapPage } from "./components/Map/MapPage";
import SearchBox from "./components/SearchBar/SearchBox";
import Panel from "./components/Slide/Panel";
import styled from "styled-components";
import AppContext from "./context/AppContext";
import { useFetch } from "./components/Map/useFetch";

import { zoomStart } from "./components/Map/coordinates";
function App() {
  const [searchCity, setSearchCity] = useState("");
  const [weatherMarkerMap, setWeatherMarkerMap] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timestampCurrent, setTimestampCurrent] = useState(null);
  const { fetchData } = useFetch();
  const [centerMarkerMap, setCenterMarkerMap] = useState([
    zoomStart[0].latitude,
    zoomStart[0].longitude,
  ]);
  let inputRef = useRef(null);
  const AppContextValue = {
    searchCity,
    setSearchCity,
    isOpen,
    setIsOpen,
    isError,
    setIsError,
    fetchData,
    weatherMarkerMap,
    setWeatherMarkerMap,
    centerMarkerMap,
    setCenterMarkerMap,
    timestampCurrent,
    setTimestampCurrent,
    inputRef,
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
