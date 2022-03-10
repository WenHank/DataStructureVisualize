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
            <NavDropdown title="Basic" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Array</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Link List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Stack</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Queue</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tree" id="basic-nav-dropdown">
              <NavDropdown.Item href="/tree">
                Tree Intruduction
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Binary Tree
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Complete</NavDropdown.Item>
              <NavDropdown.Item href="/bst">
                Binary Search Tree
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Advanced Tree" id="basic-nav-dropdown">
              <NavDropdown.Item href="/avl">AVL</NavDropdown.Item>
              <NavDropdown.Item href="/rbt">Red Black Tree</NavDropdown.Item>
              <NavDropdown.Item href="/maxheap">Max Heap</NavDropdown.Item>
              <NavDropdown.Item href="/minheap">Min Heap</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Search" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Linear</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Binary Search
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sort" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Insert</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Select</NavDropdown.Item>
              <NavDropdown.Item href="/bubble">Bubble</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Quick</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Graph" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">DFS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">BFS</NavDropdown.Item>
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
