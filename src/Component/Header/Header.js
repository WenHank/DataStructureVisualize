import React from "react";
import { NavDropdown, Nav, Navbar, Container } from "react-bootstrap";
import "./Header.css";
import { BrowserRouter } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" variant="dark" sticky="top" className="Header">
      <Container>
        <Navbar.Brand href="/home">D.S.V</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Traditional" id="Traditional-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Tree Intruduction
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Binary Search Tree
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Adelson Velsky Landis Tree
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Red Black Tree
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Interactive" id="Interactive-nav-dropdown">
              <NavDropdown.Item href="/tree">
                Tree Intruduction
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bst">
                Binary Search Tree
              </NavDropdown.Item>
              <NavDropdown.Item href="/avl">
                Adelson Velsky Landis Tree
              </NavDropdown.Item>
              <NavDropdown.Item href="/rbt">Red Black Tree</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Game" id="Game-nav-dropdown">
              <NavDropdown.Item href="/tree">
                Tree Intruduction
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/bstinteractive">
                BST interactive
              </NavDropdown.Item>
              <NavDropdown.Item href="/avl">AVL interactive</NavDropdown.Item>
              <NavDropdown.Item href="/rbt">RBT interactive</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Nav className="logSystem">
          <img src="https://img.icons8.com/ios/50/000000/user--v2.png" />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
