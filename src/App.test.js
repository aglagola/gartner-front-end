import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders application", () => {
  render(<App />);
  const chart = screen.getByText(/Stock Market Data/i);
  expect(chart).toBeInTheDocument();
});
