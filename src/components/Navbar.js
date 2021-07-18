import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
  const [navMenu, setNavMenu] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const handleResize = () => {
    setWindowsWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={
          colorChange || navMenu
            ? "flex justify-between items-center bg-black pt-4 pb-2 z-50 sticky top-0"
            : "flex justify-between items-center bg-black bg-opacity-50 pt-4 pb-2 z-50 sticky top-0"
        }
      >
        <div className="z-50">
          <h1 className="text-white text-2xl ml-4">
            <Link to="/" className="text-4xl">
              Procars
            </Link>
          </h1>
        </div>
        {windowsWidth < 769 ? (
          <>
            <div className="z-50">
              {navMenu ? (
                <ImCross
                  className="text-white text-4xl mr-4 cursor-pointer"
                  onClick={handleNavMenu}
                />
              ) : (
                <GiHamburgerMenu
                  className="text-white text-4xl mr-4 cursor-pointer"
                  onClick={handleNavMenu}
                />
              )}
            </div>
            <div
              className={
                navMenu
                  ? "flex flex-col absolute items-center left-0 right-0 top-16 pb-3 bg-black z-50"
                  : "hidden"
              }
            >
              <Link
                to="/"
                className="text-white text-xl m-auto mt-1 hover:text-orange active:text-orange"
                onClick={handleNavMenu}
              >
                Home
              </Link>
              <NavLink
                to="/carwash"
                className="text-white text-xl  m-auto mt-3 hover:text-orange active:text-orange"
                activeClassName="text-orange"
                onClick={handleNavMenu}
              >
                Carwash
              </NavLink>
              <NavLink
                to="/carwrap"
                className="text-white text-xl m-auto mt-3 hover:text-orange active:text-orange"
                activeClassName="text-orange"
                onClick={handleNavMenu}
              >
                Carwrap
              </NavLink>

              <NavLink
                to="/repairshop"
                className="text-white text-xl m-auto mt-3 hover:text-orange active:text-orange"
                activeClassName="text-orange"
                onClick={handleNavMenu}
              >
                Repairshop
              </NavLink>
              <NavLink
                to="/aboutus"
                className="text-white text-xl m-auto mt-3 hover:text-orange active:text-orange"
                activeClassName="text-orange"
                onClick={handleNavMenu}
              >
                About us
              </NavLink>
            </div>
          </>
        ) : (
          <div className="w-5/12 flex justify-around z-10">
            <Link to="/" className="text-white text-xl hover:text-orange">
              Home
            </Link>
            <NavLink
              to="/carwash"
              className="text-white text-xl hover:text-orange"
              activeClassName="text-orange"
            >
              Carwash
            </NavLink>
            <NavLink
              to="/carwrap"
              className="text-white text-xl hover:text-orange"
              activeClassName="text-orange"
            >
              Carwrap
            </NavLink>

            <NavLink
              to="/repairshop"
              className="text-white text-xl hover:text-orange"
              activeClassName="text-orange"
            >
              Repairshop
            </NavLink>
            <NavLink
              to="/aboutus"
              className="text-white text-xl mr-4 hover:text-orange"
              activeClassName="text-orange"
            >
              About us
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
