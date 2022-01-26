import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProcutComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="col-4 card" key={id}>
        <Link to={`/product/${id}`}>
          <div className="d-flex justify-content-center">
            <img className="card-img-top" src={image} alt={title}></img>
          </div>
          <div className="card-body">
            <div className="card-title col-12">
              <h6>{title}</h6>
            </div>
            <div className="card-text col-12">
              <p>
                <strong>$ {price}</strong>
              </p>
            </div>
            <div className="card-text col-12">
              <p>{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <> {renderList}</>;
};

export default ProcutComponent;
