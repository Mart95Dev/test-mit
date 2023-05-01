import React, { useRef, useContext } from "react";
import AppContext from "../../context/AppContext";
import styled from "styled-components";
import InputText from "./InputText";
import ButtonSearch from "./ButtonSearch.jsx";
import { positionCities } from "./../Map/coordinates";

/**
 * Search a city from prompt
 *
 * @return input for search city
 */
function SearchBox() {
  //state
  const { setWeatherMarkerMap, setWeatherData, isOpen, setIsOpen, fetchData } =
    useContext(AppContext);

  let inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = inputRef.current.value.trim();
    if (prompt.length > 0) {
      if (prompt === "") return setIsOpen(false);
      const newCity = { city: prompt, image: null };
      fetchData([...positionCities, newCity]).then((data) => {
        setWeatherMarkerMap(data);
        setIsOpen(true);
      });
    }
  };

  return (
    <SearchBoxStyled onSubmit={(e) => handleSubmit(e)}>
      <InputText ref={inputRef} placeholder="Search City" />
      <ButtonSearch />
    </SearchBoxStyled>
  );
}

export default SearchBox;
const SearchBoxStyled = styled.form`
  position: relative;
  z-index: 4;
  position: fixed;
  top: 1.2rem;
  left: 1.4rem;
  width: 23rem;
`;
