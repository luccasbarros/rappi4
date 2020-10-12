import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Feed from "./Feed";
import UpperMenuCat from "./UpperMenuCat"

test("Testar restaurants no input", () => {
  const { getByLabelText } = render(<Feed />);

  const textoRestaurantes = getByLabelText(/Restaurantes/);

  expect(textoRestaurantes).toBeInTheDocument();
});

test("Testar upperMenuCat", () => {
    const { getByText } = render(<UpperMenuCat />);
  
    const categorias = getByText("Árabe");
  
    expect(categorias).toBeInTheDocument();
  });