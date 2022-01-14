import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
} from "../redux/actions/productActions";

const ProcutDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { image, price, category, description, title } = product;

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
  }, [productId]);

  return (
    <div className="c-shop-detail">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="row d-flex align-items-center">
          <div className="col-6 card">
            <div className="d-flex justify-content-center">
              <img className="card-img-top" src={image} alt={title}></img>
            </div>
          </div>
          <div className="col-6 card">
            <div className="card-body">
              <div className="card-title col-12">
                <h2>{title}</h2>
              </div>
              <div className="card-text col-12">
                <h3>
                  <strong>$ {price}</strong>
                </h3>
              </div>
              <div className="card-text col-12">{category}</div>
              <div className="card-title col-12">
                <h6>{description}</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcutDetail;
