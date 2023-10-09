import { render, screen } from "@testing-library/react";
import ErrorPage from "../components/ErrorPage";

test("renders Error Page header", () => {
  render(<ErrorPage />);
  const headerElement = screen.getByText(/Error Page/i);
  expect(headerElement).toBeInTheDocument();
});

test("renders Error Page body", () => {
  render(<ErrorPage />);
  const headerElement = screen.getByText(/something went wrong/i);
  expect(headerElement).toBeInTheDocument();
});
