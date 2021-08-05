// import React from "react";
import Data from "./Data";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardDataInfo } from "../actions/userActions";
function Datas({ history }) {
  const dispatch = useDispatch();
  const dataInfo = useSelector((state) => state.userDashboardData);
  const { FetchningDataLoading, datas, error, success } = dataInfo;

  useEffect(() => {
    dispatch(getDashboardDataInfo());
    console.log("coming from datas effect");
  }, [dispatch, history]);

  return (
    <>
      <table
        className="table  bg-light container"
        style={{ marginTop: "10px" }}
      >
        <thead>
          <tr className="text-dark">
            <th scope="col">Location</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Amount Paid</th>
            <th scope="col">Volume Dispensed</th>
            <th scope="col">Status </th>
          </tr>
        </thead>
        <tbody>
          {FetchningDataLoading ? (
            <div className="mt-5 container d-flex justify-content-center text-center text-muted h4">
              <span className="text-center">Fetching data .... hang on....</span>
            </div>
          ) : error ? (
            <div className="text-center ml-5 d-flex justify-content-center container">
              {error}
            </div>
          ) : (
            <Data alldatas={datas} />
          )}
        </tbody>
      </table>
    </>
  );
}

export default Datas;
