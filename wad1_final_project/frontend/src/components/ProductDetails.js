import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../services/network";

export default function ProductDetails({ index, product, reload }) {
    const color = (index % 2 === 0 ? "#f4f6fc" : "#fff" );
    const navigate = useNavigate();
    const edit = () => {
        console.log("Edit: ", product.id);
        navigate("/edit/" + product.id);
    };

    const handleDelete = async () => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this product?"
        );
        if (confirmation) {
            await deleteProduct(product.id);
            reload();
        }
    };

    return (
        <>
            <div className="cell" style={{backgroundColor:color}}>{product.name}</div>
            <div className="cell" style={{backgroundColor:color}}>{new Number(product.price).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</div>
            <div className="cell" style={{backgroundColor:color}}>{product.origin}</div>
            <div className="cell" style={{backgroundColor:color}}>{product.inStock ? "Yes" : "No"}</div>
            <div className="cell" style={{backgroundColor:color}}>
                <button onClick={edit} className="btn btn-primary" title="Edit Product">Edit</button>
                <button onClick={handleDelete} className="btn btn-danger margin-left" title="Delete Product">Delete</button>
            </div>
        </>
    );
}
