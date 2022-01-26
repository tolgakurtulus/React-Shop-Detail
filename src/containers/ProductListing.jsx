import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setLoading } from "../redux/actions/productActions";
import ProcutComponent from "./ProductComponent";
import LoadingContainer from "./LoadingContainer";


const ProcutListing = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const fetchProducts = async () => {
    dispatch(setLoading(true));
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    console.log("test1")
    fetchProducts();// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container c-product-component d-flex align-items-center justify-content-center flex-wrap">
        {loading && loading
          ? (
            <LoadingContainer />
          ) : (
              <ProcutComponent />
          )
        }
    </div>
  );
};

export default ProcutListing;
