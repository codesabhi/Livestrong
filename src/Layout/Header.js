import React, { useState, useContext } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // NavBarText,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const context = useContext(UserContext);

  const [openToggle, setOpenToggle] = useState(false);

  const flipToggle = () => setOpenToggle(!openToggle);

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand style={{ marginLeft: "10px" }}>
        <Link to="/" className="text-white" style={{ textDecoration: "none" }}>
          GitFire App
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {context.User?.email ? context.User.email : ""}
      </NavbarText>
      <NavbarToggler onClick={flipToggle} />
      <Collapse isOpen={openToggle} navbar>
        <Nav className="ml-auto" style={{ marginLeft: "auto" }} navbar>
          {context.User ? (
            <NavItem>
              <NavLink onClick={() => {context.setUser(null)}} className="text-white">
                LogOut
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signin" className="text-white">
                  SignIn
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
