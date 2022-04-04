import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {" "}
      <ul>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
            to="/products"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
            to="/details/1"
          >
            Details
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
