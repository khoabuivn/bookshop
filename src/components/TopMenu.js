import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContext } from '../contexts/Cart';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

const TopMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BookShop</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/login">Login</Link>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
              <CartContext.Consumer>
                {({ cartItems }) => <Link to="/cart">Cart ({cartItems.length})</Link>}
                
              </CartContext.Consumer>
            </NavLink>
          </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopMenu;
