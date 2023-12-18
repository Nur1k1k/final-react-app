import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const state = useSelector((state) => state.handleCart);

  const List = () => {
  
  };
  const handleLogout = () => {
    props.data.setdata(null);
    console.log(props.data, "ana handle logout");
  };
  const Saved = () => {
   
  };
  const Login = () => {
    
  };
  const Logout = () => {
    
  };
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/E-mart">
            Collection
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/E-mart"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="buttons d-flex flex-direction-column">
              {Login()}
              {Register()}
              {Saved()}
              {List()}
              {Logout()}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
