import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
function LoginScreen({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(login(email, password));
  };

  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-100">
          <div className="col-md-6 col-lg-5 col-xl-4 py-6 py-md-0">
            <div style={{ marginTop: "-50px" }} className="">
              <div className="mb-5 text-center">
                <h6 className="h3 mb-1">Account Login</h6>
                <div>
                  <div class="icon icon-shape rounded-circle bg-success text-white mr-4">
                    <i className="fa fa-lock"></i>
                  </div>
                </div>
                <p className="text-muted mb-0"></p>
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
              <form onSubmit={submitHandler} className="">
                <div className="form-group">
                  <label className="form-control-label">Email address</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-envelope"></i>
                      </span>
                    </div>
                    <input
                      required
                      type="email"
                      className="form-control"
                      id="input-email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mb-0">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <label className="form-control-label">Password</label>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>
                    <input
                      required
                      type="password"
                      className="form-control"
                      id="input-passwordlogin"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    disabled={loading && "disable"}
                    type="submit"
                    className="btn btn-block bg-dark text-white"
                  >
                    {!loading ? (
                      "Sign in"
                    ) : (
                      <div
                        className="spinner-border spinner-border-sm  text-light"
                        role="status"
                      >
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}
                  </button>
                </div>
              </form>

              <div className="d-flex justify-content-center text-center form-inline"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginScreen;
