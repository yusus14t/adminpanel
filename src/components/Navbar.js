import {
  faBars,
  faShoppingCart,
  faTachometerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Outlet, NavLink , Link , } from "react-router-dom";

class Navbar extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem("userName"));
    const handleLogout = () => {
      localStorage.clear();
      window.location.replace("/");
    };
    const handlemenu = () => {

    };

    return (
      
      <>
        <nav className="navbar navbar-expand-xl">
          <div className="container h-100">
            <NavLink className="navbar-brand" to="/">
              <h1 className="site-title mb-0">Product Admin</h1>
            </NavLink>
            <button
              className="navbar-toggler ml-auto mr-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} />
              {/* <i className="fas fa-bars tm-nav-icon"></i> */}
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto h-100">
                <li className="nav-item mr-2">
                  <NavLink
                    className="nav-link menuitmes px-4   d-flex flex-column  text-light"
                    to="/"
                  >
                    <FontAwesomeIcon
                      className="navIcon hoverlink"
                      icon={faTachometerAlt}
                    />
                    Dashboard
                    {/* <span className="sr-only">(current)</span> */}
                  </NavLink>
                </li>
                <li className="nav-item mr-2">
                  <NavLink
                    className="nav-link menuitmes d-flex flex-column px-4 text-light"
                    to="/products"
                  >
                    <FontAwesomeIcon
                      className="navIcon hoverlink"
                      icon={faShoppingCart}
                    />
                    Products
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link menuitmes d-flex flex-column px-4 text-light"
                    to={"/account"}
                  >
                    <FontAwesomeIcon className="navIcon" icon={faUser} />
                    Accounts
                  </NavLink>
                </li>
                {user && (
                  <li className="nav-item">
                    <Link
                      className="nav-link menuitmes d-flex flex-column px-4 text-light"
                      onClick={handleLogout}
                      to={"/"}
                    >
                      Admin, Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  }
}
export default Navbar;
