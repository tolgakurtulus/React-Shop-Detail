import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";


function App() {

  const products = useSelector((state) => state);
  useEffect(() => {
    console.log("products", products)
  }, [])


  return (
    <div className="c-app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
      {/* <div className="spinner-border text-warning" role="status">
        <span className="sr-only"></span>
      </div> */}
    </div>
  );
}

export default App;
