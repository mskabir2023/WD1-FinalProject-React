import { render, screen } from "@testing-library/react";
import Login from "../components/Login";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

test("renders Login form", () => {
  render(<Login />);
  expect(screen.getAllByText("Login")[0]).toBeInTheDocument();
});
