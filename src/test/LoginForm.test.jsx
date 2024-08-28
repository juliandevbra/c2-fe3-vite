import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "../Components/LoginForm";

describe("Testing LoginForm Component", () => {
  test("Should render title", () => {
    render(<LoginForm />);
    const title = screen.getByText("Debe ingresar");
    expect(title).toBeVisible();
  });
  test("Should render first input", () => {
    render(<LoginForm />);
    const email = screen.getByRole("email");
    expect(email).toBeDefined();
  });
  test("Should change second input", () => {
    render(<LoginForm />);
    const pass = screen.getByTestId("password");
    fireEvent.change(pass, { target: { value: "Contraseña123" } });
    expect(pass.value).toBe("Contraseña123"); // pass.value === 'Contraseña123'
  });
  test("Should call button function", () => {
    const handleClick = vi.fn();
    render(<LoginForm handleClick={handleClick} />);
    const button = screen.getByText("Enviar");
    fireEvent.click(button);
    expect(handleClick).toBeCalledTimes(1);
  });
});
