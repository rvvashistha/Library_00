import React from "react";
import Nav from "react-bootstrap/esm/Nav";

const NavigationMenu = () => {
  return (
    <Nav
      activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>   
      <Nav.Item>
        <Nav.Link href="/libraries">List of libraries</Nav.Link>
      </Nav.Item> 
    </Nav>
  );
};

export default NavigationMenu;
