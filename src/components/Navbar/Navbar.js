import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { TiThMenuOutline } from "react-icons/ti";
import { BsCameraReels } from "react-icons/bs";
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden text-white absolute right-0 top-10 icon"
      >
        {open ? <ImCross></ImCross> : <TiThMenuOutline></TiThMenuOutline>}
      </div>
      <div className="navbar">
        <div className="logo">
          <p className="logo">
            <BsCameraReels></BsCameraReels> Picturesque
          </p>
        </div>
        <div
          className={`absolute md:static font-mono duration-500 ease-in ${
            open ? "top-20 flex flex-col" : "top-[-120px]"
          }`}
        >
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/gallery"
          >
            Gallery
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/blog"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/about"
          >
            About
          </NavLink>

          {user ? (
            <button className="singupBtn" onClick={() => signOut(auth)}>
              Log Out
            </button>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/login"
            >
              LogIn
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
