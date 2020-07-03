import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import SearchBox from "./SearchBox";
import Dropdown from "./DropDown";
import { Link } from "react-router-dom";
export default function Header({ handleMovies }) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
        </Nav>
        <div>
          <Dropdown setMovies={handleMovies} />
        </div>
        <div>
          <SearchBox setMovies={handleMovies} />
        </div>
      </Navbar>
    </div>
  );
}
