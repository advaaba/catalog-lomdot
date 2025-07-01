import React, { useState } from "react";
import "../Css/DropDown.css";
import filtersData from "../data/filterData.json";

const Dropdown = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const years = filtersData.years;
  const typeLomda = filtersData.typeLomda;
  const dedicated = filtersData.dedicated;
  const language = filtersData.language;
  const bahad = filtersData.bahad;

  return (
    <div className="dropdown">
      {isVisible && <div className="overlay-drop" onClick={toggleVisibility}></div>}
      <button className="dropdown-btn" onClick={toggleVisibility}>
        סינון
      </button>
      {isVisible && (
        <div className="dropdown-content">
          <div className="dropdown-submenu">
            <button className="submenu-btn" onClick={() => toggleSubMenu(0)}>סוג</button>
            {openSubMenu === 0 && (
              <div className="submenu-content">
                {typeLomda.map((type, index) => (
                  <button key={index} className="dropdown-link">{type}</button>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown-submenu">
            <button className="submenu-btn" onClick={() => toggleSubMenu(2)}>בה"ד</button>
            {openSubMenu === 2 && (
              <div className="submenu-content">
                {bahad.map((item, index) => (
                  <button key={index} className="dropdown-link">{item}</button>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown-submenu">
            <button className="submenu-btn" onClick={() => toggleSubMenu(3)}>שנה</button>
            {openSubMenu === 3 && (
              <div className="submenu-content">
                {years.map((year, index) => (
                  <button key={index} className="dropdown-link">{year}</button>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown-submenu">
            <button className="submenu-btn" onClick={() => toggleSubMenu(4)}>שפת פיתוח</button>
            {openSubMenu === 4 && (
              <div className="submenu-content">
                {language.map((type, index) => (
                  <button key={index} className="dropdown-link">{type}</button>
                ))}
              </div>
            )}
          </div>

          <div className="dropdown-submenu">
            <button className="submenu-btn" onClick={() => toggleSubMenu(5)}>ייעוד</button>
            {openSubMenu === 5 && (
              <div className="submenu-content">
                {dedicated.map((type, index) => (
                  <button key={index} className="dropdown-link">{type}</button>
                ))}
              </div>
            )}
          </div>

          <button className="button-save-drop">שמירה</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
