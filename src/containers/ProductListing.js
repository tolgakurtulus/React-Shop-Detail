import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setLoading } from "../redux/actions/productActions";
import ProcutComponent from "./ProductComponent";

const ProcutListing = () => {
  const dispatch = useDispatch();
  const productstest = useSelector((state) => state);


  const fetchProducts = async () => {
    dispatch(setLoading(true));

    await axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        dispatch(setProducts(response.data));
        // dispatch(setLoading(false));
        console.log("1");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("2");
        // dispatch(setLoading(false));
        console.log("productstest", productstest);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container c-product-component">
      <div className="row">
        <ProcutComponent />
      </div>
    </div>
  );
};

export default ProcutListing;
