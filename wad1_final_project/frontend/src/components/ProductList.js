import ProductDetails from "./ProductDetails";
import { useEffect, useState } from "react";
import { loadProducts } from "../services/network";

export default function ProductList() {
  const [inStockOnly, setInStockOnly] = useState(true);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const getProducts = async () => {
    const result = await loadProducts();
    if (result.success) {
      setAllProducts(result.data);
      setProducts(result.data.filter((product) => inStockOnly ? product.inStock === true : true));
    } else {
      alert(result.error);
    }
  };
  const showInStockOnlyChanged = () => {
    setProducts(allProducts.filter((product) => !inStockOnly ? product.inStock === true : true));
    setInStockOnly(!inStockOnly);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="products">
      <h2>Products</h2>
      <div className="showInStock">
        <label>
          <input type="checkbox" name="inStockOnly" checked={inStockOnly} onChange={showInStockOnlyChanged}/>
          &nbsp;Show only products which are in stock</label>
      </div>
      <hr />
      <div className="table">
        <div className="cell-hd">Name</div>
        <div className="cell-hd">Price</div>
        <div className="cell-hd">Origin</div>
        <div className="cell-hd">In Stock</div>
        <div className="cell-hd">&nbsp;</div>
        {products.length === 0 && <div className="cell-span-all">Empty product list!</div>}
        {products.map((product, index) => (
          <ProductDetails
            key={index}
            index={index}
            product={product}
            reload={getProducts}
          />
        ))}
      </div>
    </div>
  );
}
