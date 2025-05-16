import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";
import useFetchProducts from "../hooks/useFetchProducts";

jest.mock("../hooks/useFetchProducts");

describe("boundary", () => {
  test("AppComponent boundary renders loading spinner when loading", () => {
    useFetchProducts.mockReturnValue({
      products: [],
      loading: true,
      error: null,
    });

    render(<App />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("AppComponent boundary renders error message when there is an error", () => {
    useFetchProducts.mockReturnValue({
      products: [],
      loading: false,
      error: { message: "Failed to fetch products" },
    });

    render(<App />);

    expect(screen.getByText("Error fetching products: Failed to fetch products")).toBeInTheDocument();
  });

  test("AppComponent boundary renders product list when products are fetched", () => {
    useFetchProducts.mockReturnValue({
      products: [{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }],
      loading: false,
      error: null,
    });

    render(<App />);

    expect(screen.getByText("Product Inventory")).toBeInTheDocument();
  });
});
