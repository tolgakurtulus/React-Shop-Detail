import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, loadingReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  loading: loadingReducer,
});

export default reducers;
