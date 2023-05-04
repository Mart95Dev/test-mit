import { createContext } from "react";

export default createContext({
  isOpen: false,
  setIsOpen: () => {},
  searchCity: "",
  setSearchCity: () => {},
  fetchData: () => {},
  weatherMarkerMap: [],
  setWeatherMarkerMap: () => {},
  isError: false,
  setIsError: () => {},
});
