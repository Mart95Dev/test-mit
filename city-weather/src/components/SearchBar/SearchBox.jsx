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

  const handleChange = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputRef.current.value === "") return setIsOpen(!isOpen);
    const newCity = { city: inputRef.current.value.trim(), image: null };
    fetchData([...positionCities, newCity]).then((data) => {
      console.log(data);
      setWeatherMarkerMap(data);
    });
  };

  return (
    <SearchBoxStyled onSubmit={(e) => handleSubmit(e)}>
      <InputText
        ref={inputRef}
        onChange={handleChange}
        placeholder="Search City"
      />
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
