import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [change, handleChange] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleChange(true);
      } else {
        handleChange(false);
      }
    });
  }, []);
  return (
    <div className={`navbar ${change && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c529.png"
        alt="Netflix-logo"
      />
      <img
        className="navbar__avatar"
        src="http://assets.stickpng.com/thumbs/5b506430c051e602a568ce3a.png"
        alt=""
      />
    </div>
  );
}

export default Navbar;
