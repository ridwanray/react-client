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
    DASHBOARD_DATAINFO_RESET,

  } from "../constants/userConstants";
  
  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        console.log("coming from login reducer");
        return { loading: true };
  
      case USER_LOGIN_SUCCESS:
        return { loading: false, authenticated:true, userInfo: action.payload };
  
      case USER_LOGIN_FAIL:
        toast.success(action.payload);
        return { loading: false, error: action.payload };
  
      case USER_LOGOUT:
        return {};
  
      default:
        return state;
    }
  };
  
  export const registerReducer = (state = {}, action) => {
    switch (action.type) {
      case Register_REQUEST:
        console.log("coming from register reducer");
        return { loading: true };
  
      case Register_SUCCESS:
        return { loading: false, userInfo: action.payload };
  
      case Register_FAIL:
        return { loading: false, error: action.payload };
  
      case USER_LOGOUT:
        return {};
  
      default:
        return state;
    }
  };


  export const userDashboardDataReducer = (state = { datas: [] }, action) => {
    switch (action.type) {
      case DASHBOARD_DATAINFO_REQUEST:
        return {FetchningDataLoading: true, datas: []}
  
      case DASHBOARD_DATAINFO_SUCCESS:
        toast("Data Loaded From DB");
        return {
          datas: action.payload,
          FetchningDataLoading: false 
        }
  
      case DASHBOARD_DATAINFO_FAIL:
        toast.error(action.payload);
        return {FetchningDataLoading: false, error: action.payload }

      case DASHBOARD_DATAINFO_RESET:
        return {};

      default:
        return state;
    }
  };
  