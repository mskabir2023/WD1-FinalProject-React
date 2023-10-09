import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import AddEditProduct from "./AddEditProduct";
import { addProduct } from "../services/network";
import Product from "../model/product";

function AddProduct() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    const addNewProduct = async (product) => {
        console.log(product);
        const response = await addProduct(product);
        if (response.success) {
            navigate("/");
        } else {
            setErrorMessage(response.error);
        }
    };

    const initialProduct = Product.getEmptyProduct();

    return (
        <div className="user-form">
            <h2>Add Product</h2>
            <hr />
            {errorMessage && <label className="errorMessage">{errorMessage}</label>}
            <AddEditProduct
                initialProduct={initialProduct}
                saveButtonText="Add"
                saveProduct={addNewProduct} />
        </div>
    );
}

export default AddProduct;
