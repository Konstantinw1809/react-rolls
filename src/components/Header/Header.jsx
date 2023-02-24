import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

function Header() {
  return (
    <header className="app__header">
      <div className="app__header-content">
        <Link to="/">
          <div className="app__header-content-logo">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/logo.svg"}
              width="92"
              height="92"
              alt="logo"
            />
          </div>
        </Link>
        <h1 className="app__header-content_heading">Доставка роллов</h1>
        <p className="app__header-content_text">Быстро и вкусно</p>
      </div>
    </header>
  );
}

export default Header;
