import axios from "axios";

import {
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from "../constants/userConstants";
import { PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    });

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (err) {
    console.error(err);
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    });
  }
};
