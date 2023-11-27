import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { FontAwesomeIconButton } from "./IconButton"

test("Renders the IconButton page", () => {
    render(
        <FontAwesomeIconButton
            fill={true}
            icon='fa-thumps-up'
        />
    )
    expect(screen.getByTestId("fa-icon-button")).toBeTruthy();
});

test("Renders the IconButton page - default args", () => {
    render(
        <FontAwesomeIconButton
            fill={true}
        />
    )
    expect(screen.getByTestId("fa-icon-button")).toBeTruthy();
});

test("Renders the IconButton page - dont fill", () => {
    render(
        <FontAwesomeIconButton
            fill={false}
            icon='fa-thumps-up'
        />
    )
    expect(screen.getByTestId("fa-icon-button")).toBeTruthy();
});