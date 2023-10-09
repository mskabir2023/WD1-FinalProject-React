import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { cleanBeforeLogout } from "../services/network";
import React from "react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const logoutClicked = () => {
    cleanBeforeLogout();
    navigate("/login");
  };
  return (
    <div className="menu-container">
      <ul className="menu">
        {currentPath === "/" && (
          <>
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add product</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <a onClick={logoutClicked}>Logout</a>
            </li>
          </>
        )}
        {(currentPath === "/add" ||
          currentPath.startsWith("/edit") ||
          currentPath === "/chat") && (
          <li>
            <Link to="/">Back</Link>
          </li>
        )}
        {currentPath === "/login" && (
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        )}
        {currentPath === "/signup" && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {currentPath === "/error" && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
export default React.memo(Navbar);
