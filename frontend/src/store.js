import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import productListReducer from "./reducer/productReducer";

const rootReducer = combineReducers({
  productList: productListReducer
});

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
