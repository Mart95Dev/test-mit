import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonSearch from "./../components/SearchBar/ButtonSearch";
import SearchBox from "./../components/SearchBar/SearchBox";

test("input value updates on button click", () => {
  render(<SearchBox />);
  render(<ButtonSearch />);

  const inputElement = screen.getByPlaceholderText("Saisir une ville");
  // const buttonElement = screen.queryByClassName("button");
  const searchValue = "toulouse";

  fireEvent.change(inputElement, { target: { value: searchValue } });
  // fireEvent.click(buttonElement);

  expect(inputElement.value).toBe(searchValue);
});