import { createContext } from "react";

export default createContext({
  weatherData: [],
  setWeatherData: () => {},
  isOpen: false,
  setIsOpen: () => {},
  searchCity: "",
  setSearchCity: () => {},
  fetchData: () => {},
  weatherMarkerMap: [],
  setWeatherMarkerMap: () => {},
});
