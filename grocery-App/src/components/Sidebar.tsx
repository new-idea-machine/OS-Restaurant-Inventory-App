
import React from 'react';
import { Button, Container, Nav, Navbar as SidebarBs } from "react-bootstrap"


export function Sidebar() {
  return (
    
    <nav id="sidebar" className="bg-light">
        <div className="position-fixed bg-light" style={{ width: '280px', height: '100vh', left: 0, top: 100 }}>
      {/* Sidebar content goes here */}
      <Container>
      <ul className="list-unstyled">
        <li className="p-4">Category1</li>
        <li className="p-4">Category2</li>
        <li className="p-4">Category3</li>
      </ul>
      </Container>
      </div>
    </nav>
    
  );
};


