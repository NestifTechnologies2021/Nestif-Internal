import React, { useState } from "react";
import { WorkforceDropdownItems } from "./NavbarItems";
import { Link } from "react-router-dom";

function WorkforceDropdown() {
  const [subdropdown, setsubDropdown] = useState(false);

  return (
    <>
      <ul
        className={subdropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setsubDropdown(!subdropdown)}
      >
        {WorkforceDropdownItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.link}
                onClick={() => subdropdown(false)}
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
export default WorkforceDropdown;
