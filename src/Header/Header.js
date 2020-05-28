import React from "react";
import "./Header.css";

function Header() {
  return (
    <div id="myDIV" className="header">
      <nav className="navbar navbar-light" id="nav1">
        <a className="navbar-brand" href="#">
          <img src={require("./logo.jpeg")} width="100" height="70" alt="ToDoList" />
        </a>
      </nav>
      <h1 id="mainTitle">My To Do List</h1>
      <h4>Make it happen!</h4>
    </div>

  );
}

export default Header;