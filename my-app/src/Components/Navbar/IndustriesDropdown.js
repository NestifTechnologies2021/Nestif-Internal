import React, { useState } from "react";
import {IndustriesDropdownItems } from "./NavbarItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";
function IndustriesDropdown() {
  const [IndustriesDropdown, setIndustriesDropdown] = useState(false);

  return (
    <>
      <ul
        className={
            IndustriesDropdown ? "services-menu clicked" : "services-menu"
        }
        onClick={() => setIndustriesDropdown(!IndustriesDropdown)}
      >
        {IndustriesDropdownItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.url}
                className={item.cName}
                onClick={() => setIndustriesDropdown(false)}
              >
              {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default IndustriesDropdown;
