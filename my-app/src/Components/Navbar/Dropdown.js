import React, { useState } from "react";
import { ServiceDropdown } from "./NavbarItems";
import { Link } from "react-router-dom";
import WorkforceDropdown from "./Workforcedropdown";

import { FaAngleRight } from "react-icons/fa";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);
  const [subdropdown, setsubDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-menu clicked" : "services-menu"}
        onClick={() => setDropdown(!dropdown)}
      >
     {ServiceDropdown.map((nav) => {
      {/* if (nav.title === "Workforce Management") {
          return (
            <li
                  key={nav.id}
                  onMouseEnter={() => setsubDropdown(true)}
                  onMouseLeave={() => setsubDropdown(false)}
                >
                  <Link to={nav.url} >{nav.title}<FaAngleRight/> </Link>
                  {subdropdown && <WorkforceDropdown />}
                </li>
              );
              }
              else */}
          return (
              <li   key={nav.id}
                  onMouseEnter={() => setsubDropdown(true)}
                  onMouseLeave={() => setsubDropdown(false)}>
                <Link to={nav.url}>{nav.title}</Link>
              </li>
            );
        })}
      </ul>
    </>
  );
}
export default Dropdown;
