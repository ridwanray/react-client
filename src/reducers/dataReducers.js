import { toast } from "react-toastify";

import {

    ADD_DATA_REQUEST,
    ADD_DATA_SUCCESS,
    ADD_DATA_FAIL,
    ADD_DATA_RESET,


  } from "../constants/dataConstants";

export const addDataReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA_REQUEST:
      
      return { AddingDataLoading: true };

    case ADD_DATA_SUCCESS:
      toast.success("New Data Successfully Added");
      return {
        newaddedcontact:action.payload, 
        AddingDataLoading: false,
        DataAddedSuccessStatus: true,
      };

    case ADD_DATA_FAIL:
        toast.error("An error occurred");
        return {...state, AddingDataLoading: false }
            
    case ADD_DATA_RESET:
      let { newaddedcontact } = state;
      return { newaddedcontact };

    default:
      return state;
  }
};





