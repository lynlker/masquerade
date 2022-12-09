import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="title">
          Masquerade
        </a>
        <ul>
          <CustomLink href="/characters">Characters</CustomLink>
          <CustomLink href="/groups">Groups</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
};

export default Navbar;
