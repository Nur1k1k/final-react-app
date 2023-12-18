import React, { useState, useEffect } from "react";





export default function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const addProduct = (product) => {
   
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${id.id}`
      );

    
    };

    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
       
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 ">
          <img
            src={product.image}
            alt={product.title}
            heigh="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5"> {product.title}</h1>
          <p className="lead fw-bolder">
            {" "}
            Rating {product.rating && product.rating.rate}
          </p>
          <i className="fa fa-star"></i>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-r py-2 "
            onClick={() => addProduct(product)}
          >
            {" "}
            Save product
          </button>
          
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}{" "}
        </div>
      </div>
    </div>
  );
}
