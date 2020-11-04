import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, { type, payload }) => {
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return {
        products: [],
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: payload
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};


export const productDetailsReducer = (state = { product: { reviews: [] } }, { type, payload }) => {
  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: payload
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
