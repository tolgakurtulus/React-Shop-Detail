import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, setLoading } from "../redux/actions/productActions";
import LoadingContainer from "./LoadingContainer.jsx";

const ProcutDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const { image, price, category, description, title } = product;

  const fetchProductDetail = async () => {
    dispatch(setLoading(true));

    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div className="c-shop-detail">
      {loading && loading ? (
        <LoadingContainer />
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
