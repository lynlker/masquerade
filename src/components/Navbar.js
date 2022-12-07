import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="title">
          Masquerade
        </a>
        <ul>
          <li>
            <a href="/characters">Characters</a>
          </li>
          <li>
            <a href="/groups">Groups</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
