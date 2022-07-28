import React from "react";

import "../App.css";

function Header({ pageSlide }) {
  return (
    <header>
      <a href="/" className="logo">
        <h1>Logo</h1>
      </a>
      {pageSlide === "second" && (
        <a href="/" className="header-link">
          Discover more
        </a>
      )}
    </header>
  );
}

export default Header;
