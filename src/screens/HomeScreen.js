import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewDataToDB } from "../actions/dataActions";

function HomeScreen({history }) {
  const [location, setLocation] = useState("");
  const [customer_name, setCustomer] = useState("");
  const [amount_paid, setAmount] = useState("");
  const [volume_dispensed, setVolume] = useState("");
  const [complete_status, setStatus] = useState("");


  const dispatch = useDispatch();

  const addDataToDbR = useSelector((state) => state.addDataToDbR);
  const { AddingDataLoading, DataAddedSuccessStatus } = addDataToDbR;

 

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(location,customer_name,amount_paid,volume_dispensed,complete_status)
    dispatch(addNewDataToDB(location,customer_name,amount_paid,volume_dispensed,complete_status));
  };

  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-md-8 col-lg-5 py-6">
            <div>
              <div className=" text-center">
                <h6 className="h3 mb-1">New Data</h6>
              </div>
            

              <span className="clearfix"></span>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label className="form-control-label">Location</label>
                  <div className="input-group input-group-merge">
                    <input
                      required
                      type="text"
                      className="form-control form-control-prepend"
                      id="input-email"
                      placeholder="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                       
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-control-label">Customer Name</label>
                  <div className="input-group input-group-merge">
                    <input
                      required
                      type="text"
                      className="form-control form-control-prepend"
                      id="input-email"
                    
                      placeholder="Customer Name"
                      value={customer_name}
                      onChange={(e) => setCustomer(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                       
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-control-label">Amount Paid</label>
                  <div className="input-group input-group-merge">
                    <input
                      required
                    
                      type="number"
                      className="form-control form-control-prepend"
                      
                      placeholder="Amount Paid"
                      value={amount_paid}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                     
                      </span>
                    </div>
                  </div>
                </div>
               
                <div className="form-group mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <label className="form-control-label">Volume Dispensed</label>
                    </div>
                    <div className="mb-2">
                      <a
                     
                        className="small text-muted border-primary"
                        
                      >
                       
                      </a>
                    </div>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      required
                      type="number"
                      className="form-control form-control-prepend"
                      
                     
                      value={volume_dispensed}
                      onChange={(e) => setVolume(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <label className="form-control-label">
                        Status
                      </label>
                    </div>
                   
                  </div>
                  <div className="input-group input-group-merge">
                  <select
                  clasName='form-control'
                  onChange={(e) => setStatus(e.target.value)}

                  value={complete_status}

                   >
                    <option value="true">Completed</option>
                    <option value="false">Not Completed</option>
                  </select>
                   
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                       
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    disabled={AddingDataLoading && "disable"}
                    type="submit"
                    className="btn btn-block bg-dark text-white"
                  >
                    {AddingDataLoading ? (
                      <div
                        className="spinner-border spinner-border-sm  text-light"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Add new data"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeScreen;
