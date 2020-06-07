import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function NavContainer(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <h3>
              <i className="fab fa-github mr-3"></i>
              Github
            </h3>
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default NavContainer;
