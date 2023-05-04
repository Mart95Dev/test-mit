import { createContext } from "react";

export default createContext({
  isOpen: false,
  setIsOpen: () => {},
  isError: false,
  setIsError: () => {},
  searchCity: "",
  setSearchCity: () => {},
  fetchData: () => {},
  weatherMarkerMap: [],
  setWeatherMarkerMap: () => {},
});
