import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAccount } from "../actions/userActions";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

function SignupScreen({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/dashboard");
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);

    if (password !== confirmPassword) {
      setMessage("Enter the same password");
    } else {
      console.log("got heh");
      dispatch(registerAccount(email, password));
    }
  };

  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-md-8 col-lg-5 py-6">
            <div>
              <div className="mb-5 text-center">
                <h6 className="h3 mb-1">Create account</h6>
              </div>
              {error && (
                <div
                  className="text-center d-flex justify-content-center alert alert-group alert-outline-warning alert-dismissible fade show alert-icon"
                  role="alert"
                >
                  <div className="alert-content text-center">{error}</div>
                </div>
              )}

              <span className="clearfix"></span>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <label className="form-control-label">Email address</label>
                  <div className="input-group input-group-merge">
                    <input
                      required
                      type="email"
                      className="form-control form-control-prepend"
                      id="input-email"
                      placeholder="rayalan@gexample.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                </div>
                {message && (
                  <div
                    className="text-center d-flex justify-content-center alert alert-group alert-outline-warning alert-dismissible fade show alert-icon"
                    role="alert"
                  >
                    <div className="alert-content text-center">{message}</div>
                  </div>
                )}
                <div className="form-group mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <label className="form-control-label">Password</label>
                    </div>
                    <div className="mb-2">
                      <a
                        className="small text-muted border-primary"
                        data-toggle="password-text"
                        data-target="#input-password"
                      >
                        <i data-feather="eye"></i>
                      </a>
                    </div>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      required
                      type="password"
                      className="form-control form-control-prepend"
                      id="input-passwordreg"
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <label className="form-control-label">
                        Confirm password
                      </label>
                    </div>
                    <div className="mb-2">
                      <a
                        className="small text-muted border-primary"
                        data-toggle="password-text"
                        data-target="#input-password"
                      >
                        <i data-feather="eye"></i>
                      </a>
                    </div>
                  </div>
                  <div className="input-group input-group-merge">
                    <input
                      required
                      type="password"
                      className="form-control form-control-prepend"
                      id="input-password"
                      placeholder="********"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    disabled={loading && "disable"}
                    type="submit"
                    className="btn btn-block bg-dark text-white"
                  >
                    {loading ? (
                      <div
                        className="spinner-border spinner-border-sm  text-light"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      "Create my account"
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

export default SignupScreen;
