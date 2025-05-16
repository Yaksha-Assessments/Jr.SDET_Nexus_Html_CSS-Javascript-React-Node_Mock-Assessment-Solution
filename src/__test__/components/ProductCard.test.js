import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ProductCard from "../../components/ProductCard";

describe("boundary", () => {
    test("ProductCardComponent boundary renders product title", () => {
        render(<ProductCard title="Test Product" price={99.99} image="test-image.jpg" />);

        expect(screen.getByText("Test Product")).toBeInTheDocument();
    });

    test("ProductCardComponent boundary renders product price", () => {
        render(<ProductCard title="Test Product" price={99.99} image="test-image.jpg" />);

        expect(screen.getByText("$99.99")).toBeInTheDocument();
    });

    test("ProductCardComponent boundary renders product image with correct alt text", () => {
        render(<ProductCard title="Test Product" price={99.99} image="test-image.jpg" />);

        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", "test-image.jpg");
        expect(img).toHaveAttribute("alt", "Test Product");
    });

    test("ProductCardComponent boundary renders without crashing", () => {
        const { container } = render(<ProductCard title="Test Product" price={99.99} image="test-image.jpg" />);

        expect(container).toBeInTheDocument();
    });
});
