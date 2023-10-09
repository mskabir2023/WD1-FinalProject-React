import { render, screen } from "@testing-library/react";
import AddEditProduct from "../components/AddEditProduct";
import Product from "../model/product";

test("renders Button Text", () => {
  const testProduct = Product.getEmptyProduct();
  render(<AddEditProduct initialProduct={testProduct} saveButtonText="Test Data" />);
  expect(screen.getByText("Test Data")).toBeInTheDocument();
});


test("renders product", () => {
  const testProduct = new Product("id", "Test Name", 100, "Test Origin", true);
  render(<AddEditProduct initialProduct={testProduct} />);
  expect(screen.getByDisplayValue('Test Name')).toBeInTheDocument();
  expect(screen.getByDisplayValue('100')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Test Origin')).toBeInTheDocument();
});
