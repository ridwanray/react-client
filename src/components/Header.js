import { useDispatch, useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userLogin);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  const handleCollapse = () => {
    console.log("handleCollapse");
    var nav = document.getElementById("navbar-main-collapse");
    var btn = document.getElementById("navbar-main");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
  };

  return (
    <header>
      <nav
        className="navbar  navbar-main navbar-expand-xl navbar-dark bg-dark  fixed-top"
        id="navbar-main"
      >
        <div className="container">
          <span style={{ fontFamily: "system-ui", fontWeight: "900" }}>
            <LinkContainer to="/dashboard">
              <Nav.Link>
                <span
                  className="navbar-brand"
                  style={{
                    fontFamily: "system-ui",
                    fontSize: "30px",
                    fontWeight: "900",
                  }}
                >
                  Dashboard
                </span>
              </Nav.Link>
            </LinkContainer>
          </span>

          <span style={{ fontFamily: "system-ui", fontWeight: "900" }}>
            <LinkContainer to="/">
              <Nav.Link>
                <span
                  className="navbar-brand"
                  style={{
                    fontFamily: "system-ui",
                    fontSize: "30px",
                    fontWeight: "900",
                  }}
                >
                  Add Data
                </span>
              </Nav.Link>
            </LinkContainer>
          </span>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-main-collapse"
            aria-controls="navbar-main-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar-collapse-overlay"
            id="navbar-main-collapse"
          >
            <div className="position-relative">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-main-collapse"
                aria-controls="navbar-main-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-times"></i>
              </button>
            </div>

            <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
              {userInfo ? (
                <span onClick={handleCollapse}>
                  <li className="nav-item">
                    <Nav.Link>
                      <span onClick={logoutHandler}>Log out</span>
                    </Nav.Link>
                  </li>
                </span>
              ) : (
                <span onClick={handleCollapse}>
                  <li className="nav-item">
                    <LinkContainer to="/login">
                      <Nav.Link>
                        <span onClick={handleCollapse}>Log in</span>
                      </Nav.Link>
                    </LinkContainer>
                  </li>
                </span>
              )}

              <li className="nav-item">
                {userInfo ? (
                  <LinkContainer to="/dashboard">
                    <Nav.Link>
                      <span
                        onClick={handleCollapse}
                        className="btn btn-sm btn-white ml-3"
                      >
                        <i className="fas fa-user"></i>
                        Dashboard
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                ) : (
                  <LinkContainer to="/signup">
                    <Nav.Link>
                      <span
                        onClick={handleCollapse}
                        className="btn btn-sm btn-white ml-3"
                      >
                        <i className="fas fa-user"></i>
                        Sign Up
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                )}
              </li>
            </ul>

            <div className="d-lg-none px-4 text-center mb-1">
              {userInfo ? (
                <span>
                  <LinkContainer to="/projects">
                    <Nav.Link>
                      <span
                        onClick={handleCollapse}
                        className="btn btn-block btn-sm text-white bg-dark"
                      >
                        <i className="fas fa-sign-in-alt"></i> Projects
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                  <Nav.Link>
                    <span
                      onClick={logoutHandler}
                      className="btn btn-block btn-sm text-white bg-dark"
                    >
                      <i className="fas fa-sign-in-alt"></i> Logout
                    </span>
                  </Nav.Link>
                </span>
              ) : (
                <span>
                  <LinkContainer to="/projects">
                    <Nav.Link>
                      <span
                        onClick={handleCollapse}
                        className="btn btn-block btn-sm text-white bg-dark"
                      >
                        <i className="fas fa-sign-in-alt"></i> Projects
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <span
                        onClick={handleCollapse}
                        className="btn btn-block btn-sm text-white bg-dark"
                      >
                        <i className="fas fa-sign-in-alt"></i> Log in
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                </span>
              )}
            </div>
            <div className="d-lg-none px-4 text-center">
              {userInfo ? (
                <LinkContainer to="/dashboard">
                  <Nav.Link>
                    <span
                      onClick={handleCollapse}
                      className="btn btn-block btn-sm text-white bg-dark"
                    >
                      <i className="fas fa-sign-out-alt"></i> Dashboard
                    </span>
                  </Nav.Link>
                </LinkContainer>
              ) : (
                <span>
                  <LinkContainer to="/register-student">
                    <Nav.Link>
                      <span
                        onClick={handleCollapse}
                        className="btn btn-block btn-sm text-white bg-dark"
                      >
                        <i className="fas fa-sign-out-alt"></i> Student Sign Up
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register-kid">
                    <Nav.Link>
                      <span
                        onClick={handleCollapse}
                        className="btn btn-block btn-sm text-white bg-dark"
                      >
                        <span class="badge badge-danger badge-pill badge-md badge-floating border-white">
                          New
                        </span>
                        <i className="fas fa-sign-out-alt"></i> Kid Student Sign
                        Up
                      </span>
                    </Nav.Link>
                  </LinkContainer>
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
