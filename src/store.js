import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import {
  userLoginReducer,
  registerReducer,
  userDashboardDataReducer,
} from "./reducers/userReducers";

import { addDataReducer } from "./reducers/dataReducers";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: registerReducer,
  userDashboardData: userDashboardDataReducer,
  addDataToDbR:addDataReducer
});


const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, logger))
);

export default store;
