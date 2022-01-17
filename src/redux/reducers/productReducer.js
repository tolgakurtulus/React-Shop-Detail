import { ActionTypes } from "../contants/action-types";

const INITIAL_STATE = {
  products: [],
};

const INITIAL_STATE_LOADING = {
  loading: false,
};

export const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export const loadingReducer = (state = INITIAL_STATE_LOADING, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOADING_PRODUCT:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};


export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
