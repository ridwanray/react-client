import axios from "axios";

import {
    ADD_DATA_REQUEST,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAIL,
    ADD_DATA_RESET,
} from "../constants/dataConstants";

export const addNewDataToDB = (
  location,
  customer_name,
  amount_paid,
  volume_dispensed,
  complete_status,

) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_DATA_REQUEST,
    });

    const { data } = await axios.post(
      `//hommiespace-env.us-west-2.elasticbeanstalk.com/api/create/`,
      {
        "location": `${location}`,
    "customer_name": `${customer_name}`,
    "amount_paid": `${amount_paid}`,
    "volume_dispensed": `${volume_dispensed}`,
    "complete_status": `${complete_status}`,
      },
     
    );
    dispatch({
      type: ADD_DATA_SUCCESS,
      payload: data,
    });
    dispatch({
      type: ADD_DATA_RESET,
    });
  } catch (error) {
    console.log("res", error.response);
  
  dispatch({
      type: ADD_DATA_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
  });
  dispatch({
      type: ADD_DATA_RESET,
    });
  }
};
