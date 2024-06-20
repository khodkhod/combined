import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

const Nav = () => {
  const { username } = useParams(); // Make sure to call useParams()

  const navLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Register",
      path: "/register",
    },
    {
      name: "Signin",
      path: "/signin",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "UserProfile",
      path: `/users/user/${username || "defaultUsername"}`, // Adjusted for dynamic routing
    },
    {
      name: "SendMailer",
      path: "/Sendmailer", // Adjusted for dynamic routing
    },
    {
      name: "NotFound",
      path: "/*",
    },
  ];

  return (
    <div>
      <ul className="flex items-center justify-between bg-gray-900 p-5 text-white">
        <div className="flex space-x-5">
          <div className="font-bold">
            <Link to="/">Home</Link>
          </div>
          <div className="space-x-5 text-grey-500">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <Link to="/users" className="hover:text-white">Users</Link>
            <Link to={`/users/user/${username || "defaultUsername"}`} className="hover:text-white">Profile</Link>
          </div>
        </div>
        <div className="flex ms-10 space-x-5">
          {navLink.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </div>
      </ul>
      <Outlet />
    </div>
  );
};

export default Nav;
