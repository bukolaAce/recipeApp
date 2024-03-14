import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
  const navLinks = [
    { id: 1, path: "/", label: "Home", Route: "#herosection" },
    { id: 2, path: "/about", label: "About", Route: "#aboutus" },

    // { id: 6, path: '/contact', label: 'Contact' },
    // Add more links as needed
  ];
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="hidden md:block">
        <header className="shadow-md py-4 px-4 sm:px-10 bg-green-800 font-[sans-serif] min-h-[70px]">
          <div className="relative flex flex-wrap items-center gap-5 space-x-[28rem]">
            <Link to={"/"}>
            <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/tasty-1182560.png?f=webp&w=256"
                  alt="logo"
                  className="w-10 "
                />
            </Link>

            <ul className="flex lg:space-x-5 max-lg:space-y-2 max-lg:block max-lg:w-full">
              {navLinks.map((nav) => {
                return (
                  <>
                    <li
                      className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded"
                      key={nav.label}
                    >
                      <Link
                        to={nav.path}
                        className="lg:hover:text-green-500 text-white max-lg:text-white block font-semibold text-[20px]"
                      >
                        {nav.label}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </header>
      </div>

      <nav className="sticky top-0 z-50 flex-col w-full p-4 bg-green-800 md:hidden">
        <div className="container flex items-center justify-between mx-auto">
          <Link to={navLinks.path} className="text-lg font-bold text-white">
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/tasty-1182560.png?f=webp&w=256"
                  alt="logo"
                  className="w-10 "
                />
              </div>
            </div>
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <FontAwesomeIcon size="2x" icon={faBars} />
            </button>
          </div>
        </div>

        {/* MODAL */}
        {isOpen ? (
          <div className=" inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="relative w-full max-w-lg p-6 bg-white rounded-md shadow-lg">
              <div className="w-3.5 cursor-pointer shrink-0 fill-black hover:fill-red-500 float-right">
                <button className="text-xl text-green-800" onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faX} />
                </button>
              </div>
              <div className="flex-col items-end text-center ">
                {navLinks.map((nav) => {
                  return (
                    <>
                      <Link to={nav.path}>
                        <h4
                          className="m-6 text-xl font-semibold text-green-800 "
                          onClick={toggleMenu}
                        >
                          {nav.label}
                        </h4>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default NavBar;
