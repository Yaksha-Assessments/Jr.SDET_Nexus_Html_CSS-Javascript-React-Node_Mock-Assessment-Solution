import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ProductList from "../../components/ProductList";
import ProductCard from "../../components/ProductCard";

jest.mock("../../components/ProductCard");

describe("boundary", () => {
    const mockProducts = [
        { id: 1, title: "Product 1", price: 10.99, image: "product1.jpg" },
        { id: 2, title: "Product 2", price: 20.99, image: "product2.jpg" },
    ];

    test("ProductListComponent boundary renders without crashing", () => {
        ProductCard.mockImplementation(({ title, price, image }) => (
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
                <img src={image} alt={title} />
            </div>
        ));

        const { container } = render(<ProductList products={mockProducts} />);

        expect(container).toBeInTheDocument();
    });

    test("ProductListComponent boundary renders the correct number of ProductCard components", () => {
        ProductCard.mockImplementation(({ title, price, image }) => (
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
                <img src={image} alt={title} />
            </div>
        ));

        render(<ProductList products={mockProducts} />);

        expect(screen.getAllByRole("img")).toHaveLength(mockProducts.length);
    });

    test("ProductListComponent boundary passes the correct props to each ProductCard", () => {
        ProductCard.mockImplementation(({ title, price, image }) => (
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
                <img src={image} alt={title} />
            </div>
        ));

        render(<ProductList products={mockProducts} />);

        mockProducts.forEach((product) => {
            expect(screen.getByText(product.title)).toBeInTheDocument();
            expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
            expect(screen.getByAltText(product.title)).toHaveAttribute("src", product.image);
        });
    });
});
