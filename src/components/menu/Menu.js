/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Menu.scss";

function Menu() {
  return (
    <div id="menu" className="menu">
      <img
        className="close"
        onClick={() => {
          document.getElementById("menu").style.transform =
            "translateX(-150px)";
          document.getElementById("background").style.opacity = "0";
          document.getElementById("background").style.pointerEvents = "none";
        }}
        src="/images/icon-close.svg"
        alt=""
        onKeyPress={() => {
          document.getElementById("menu").style.transform =
            "translateX(-150px)";
          document.getElementById("background").style.pointerEvents = "none";
          document.getElementById("background").style.opacity = "0";
        }}
      />
      <nav>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
