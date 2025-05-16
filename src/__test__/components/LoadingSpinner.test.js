import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import LoadingSpinner from "../../components/LoadingSpinner";

describe("boundary", () => {
    test("LoadingSpinnerComponent boundary renders without crashing", () => {
        const { container } = render(<LoadingSpinner />);

        expect(container).toBeInTheDocument();
    });

    test("LoadingSpinnerComponent boundary displays loading text", () => {
        render(<LoadingSpinner />);

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
});
