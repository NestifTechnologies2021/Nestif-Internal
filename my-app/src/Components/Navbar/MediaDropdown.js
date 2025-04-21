import React, { useState } from "react";
import { MediaDropdownItems } from "./NavbarItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";
function MediaDropdown() {
  const [mediadropdown, setMediaDropdown] = useState(false);

  return (
    <>
      <ul
        className={
          mediadropdown ? "services-menu clicked" : "services-menu"
        }
        onClick={() => setMediaDropdown(!mediadropdown)}
      >
        {MediaDropdownItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setMediaDropdown(false)}
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
export default MediaDropdown;
