import React, { useState } from "react";
import {InsightsDropdownItems } from "./NavbarItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";
function InsightsDropdown() {
  const [Insightsdropdown, setInsightsDropdown] = useState(false);

  return (
    <>
      <ul
        className={
          Insightsdropdown ? "services-menu clicked" : "services-menu"
        }
        onClick={() => setInsightsDropdown(!Insightsdropdown)}
      >
        {InsightsDropdownItems.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.url}
                className={item.cName}
                onClick={() => setInsightsDropdown(false)}
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
export default InsightsDropdown;
