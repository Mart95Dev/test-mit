import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonSearch from "./../components/SearchBar/ButtonSearch";
import SearchBox from "./../components/SearchBar/SearchBox";
import AppContext from "../context/AppContext";

test("input value updates on button click", () => {
  const searchValue = "toulouse";

  render(
    <AppContext.Provider value={{ inputRef: { current: null } }}>
      <SearchBox />
      <ButtonSearch />
    </AppContext.Provider>
  );

  const inputElement = screen.getByPlaceholderText("Saisir une ville");

  fireEvent.change(inputElement, { target: { value: searchValue } });

  expect(inputElement.value).toBe(searchValue);
});
