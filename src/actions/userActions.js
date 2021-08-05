
import axios from "axios";
import { toast } from "react-toastify";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  Register_REQUEST,
  Register_SUCCESS,
  Register_FAIL,
  DASHBOARD_DATAINFO_REQUEST,
  DASHBOARD_DATAINFO_SUCCESS,
  DASHBOARD_DATAINFO_FAIL,
} from "../constants/userConstants";

export const getDashboardDataInfo = () => async (dispatch, getState) => {
  try {
    //console.log();
    dispatch({
      type: DASHBOARD_DATAINFO_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`//hommiespace-env.us-west-2.elasticbeanstalk.com/api/all/`, config);
    
    dispatch({
      type: DASHBOARD_DATAINFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("err:", error.response);

    dispatch({
      type: DASHBOARD_DATAINFO_FAIL,
      payload:
        error.response && error.response.data.details
          ? error.response.data.details
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/auth/login/`,
      { email: email, password: password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {

    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  console.log("logout consoling....");
  localStorage.removeItem("userInfo");
  var nav = document.getElementById("navbar-main-collapse");
  var btn = document.getElementById("navbar-main");
  nav.classList.remove("show");
  btn.classList.add("collapsed");
  dispatch({ type: USER_LOGOUT });
};

export const registerAccount = (email, password) => async (dispatch) => {
  try {
    console.log(email, password);
    dispatch({
      type: Register_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
    
      `//hommiespace-env.us-west-2.elasticbeanstalk.com/auth/newregister/`,
      {
        email: email,
        password: password,
      },
      config
    );

    dispatch({
      type: Register_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: Register_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
