import React, { useEffect, useState } from "react";

function AddEditProduct({initialProduct, saveButtonText, saveProduct }) {
  const [product, setProduct] = useState(initialProduct);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveProduct(product);
  };

  const handleChange = (e) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckBox = (e) => {
    setProduct({ ...product, inStock: e.target.checked });
  }

  useEffect(()=>{
    setProduct(initialProduct);
  },[initialProduct]);

  return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id ="name"
            type="text"
            name="name"
            value={product.name}
            required
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            className="form-control"
            id="price"
            type="number"
            min="0"
            name="price"
            value={product.price}
            required
            onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="origin">Origin</label>
          <input
            className="form-control"
            id="origin"
            type="text"
            name="origin"
            value={product.origin}
            required
            onChange={handleChange}/>
        </div>
        <div className="form-group ckbox-container"style={{ display: "flex" }}>
           
            <input
              type="checkbox"
              id="inStock"
              name="inStock"
              checked={product.inStock}
              onChange={handleCheckBox}
              style={{ marginTop: "15px", lineHeight: "2em" }}/>
               <label htmlFor="inStock" className="form-control checkbox-ctrl"      
                   style={{lineHeight: "2em", marginLeft: "10px", padding: '0px' }}
                   >In Stock</label>

        </div>
        <div className="d-grid mb-2">
          <input type="submit" value={saveButtonText} className="btn-lg-su btn btn-success btn-lg"/>
        </div>
      </form>
  );
}

export default AddEditProduct;
