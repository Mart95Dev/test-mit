import React, { useRef, useContext } from "react";
import AppContext from "../../context/AppContext";
import styled from "styled-components";
import InputText from "./InputText";
import ButtonSearch from "./ButtonSearch.jsx";
import { positionCities } from "./../Map/coordinates";

import { zoomStart } from "../Map/coordinates";
/**
 * Search a city from prompt
 *
 * @return input for search city
 */
function SearchBox() {
  //state
  const { setWeatherMarkerMap, setIsOpen, fetchData ,setIsError, setCenterMarkerMap} = useContext(AppContext);

  let inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const prompt = inputRef.current.value.trim();
    if (prompt.length > 0) {
      if (prompt === "") return setIsOpen(false);
      const newCity = { city: prompt, image: null };
      fetchData([...positionCities, newCity]).then((data) => {
         
        if(data[4].dataApi === "error"){
          setIsError(true);
          setCenterMarkerMap([zoomStart[0].latitude, zoomStart[0].longitude])
        }else{
        setIsError(false);
        setCenterMarkerMap([data[4].dataApi.location.lat, data[4].dataApi.location.lon])
        }
        setWeatherMarkerMap(data);
        setIsOpen(true); 
        
      })
       
    }
  };

  return (
    <SearchBoxStyled id="prompt" onSubmit={(e) => handleSubmit(e)}>
      <InputText ref={inputRef} placeholder="Saisir une ville" />
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
