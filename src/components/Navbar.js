import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="title">
          Masquerade
        </Link>
        <ul>
          <CustomLink to="/characters">Characters</CustomLink>
          <CustomLink to="/groups">Groups</CustomLink>
        </ul>
      </nav>
    </div>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const path = window.location.pathname;
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
