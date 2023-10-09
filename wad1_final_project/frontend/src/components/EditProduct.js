import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddEditProduct from "./AddEditProduct";
import { editProduct, getProduct } from "../services/network";
import { useNavigate } from "react-router-dom";
import Product from "../model/product";

function EditProduct() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(Product.getEmptyProduct());
  const productId = params.productId;
  const [errorMessage, setErrorMessage] = useState(null);

  const getProductById = async () => {
    const res = await getProduct(productId);
    if(res.success) {
      setProduct(res.data);
    }
  }

  useEffect(()=> {
    getProductById();
  }, []);

  const editNewProduct = async (product) => {
    const response = await editProduct(product);
    if (response.success) {
      navigate("/");
    } else {
      setErrorMessage(response.error);
    }
  };

  return (
      <div className="user-form">
        <h2>Edit Product</h2>
        <hr />
        {errorMessage && <label className="errorMessage">{errorMessage}</label>}
        <AddEditProduct
          initialProduct={product}
          saveButtonText="Update"
          saveProduct={editNewProduct}/>
      </div>
  );
}

export default EditProduct;
