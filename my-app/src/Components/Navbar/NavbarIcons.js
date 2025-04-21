import React from "react";
import { useState } from "react";
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";
import "./NavbarIcons.css";
import "./Dropdown.css";
import Dropdown from "./Dropdown";
import MediaDropdown from "./MediaDropdown";
import InsightsDropdown from "./InsightsDropdown";
import IndustriesDropdown from "./IndustriesDropdown";


function NavbarIcons() {
  const [state, setState] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [Mediadropdown, setMediaDropdown] = useState(false);
  const [Insightsdropdown, setInsightsDropdown] = useState(false);
  const [industriesDropdown, setIndustriesDropdown] = useState(false);
  return (
    <>
      <div className="menu-icons" onClick={() => setState(!state)}>
        <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div className="Navigation">
        <ul className={state ? "nav-menu active" : "nav-menu"}>
          {NavbarItems.map((nav) => {
            if (nav.title === "SERVICES") {
              return (
                <li
                  key={nav.id}
                  className="dropdownMenu"
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={nav.url}>{nav.title} </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            } else if (nav.title === "MEDIA") {
              return (
                <li
                  key={nav.id}
                  className="dropdownMenu"
                  onMouseEnter={() => setMediaDropdown(true)}
                  onMouseLeave={() => setMediaDropdown(false)}
                >
                  <Link to={nav.url}>{nav.title} </Link>
                  {Mediadropdown && <MediaDropdown />}
                </li>
              );
            }
            else if (nav.title === "INSIGHTS") {
              return (
                <li
                  key={nav.id}
                  className="dropdownMenu"
                  onMouseEnter={() => setInsightsDropdown(true)}
                  onMouseLeave={() => setInsightsDropdown(false)}
                >
                  <Link to={nav.url}>{nav.title} </Link>
                  {Insightsdropdown && <InsightsDropdown/>}
                </li>
              );
            }
            else if (nav.title === "INDUSTRIES") {
              return (
                <li
                  key={nav.id}
                  className="dropdownMenu"
                  onMouseEnter={() => setIndustriesDropdown(true)}
                  onMouseLeave={() => setIndustriesDropdown(false)}
                >
                  <Link to={nav.url}>{nav.title} </Link>
                  {industriesDropdown && <IndustriesDropdown/>}
                </li>
              );
            }
            return (
              <li key={nav.id}>
                <Link to={nav.url}>{nav.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default NavbarIcons;
