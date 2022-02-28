import React from "react";

import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav>
        <ul className="navigation">
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/students">STUDENTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
