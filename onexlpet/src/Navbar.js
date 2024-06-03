import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import palmlogo from "./palmlogo.svg";
import "@fontsource/roboto";
import "./App.css";

function Navbar({ currentUser, onSignOut }) {
  const [activeLink, setActiveLink] = useState("/");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsSignedIn(true);
    }
  }, []);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const isLinkActive = (link) => {
    return activeLink === link ? "text-[#FFAA00] font-semibold" : "";
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setIsSignedIn(false);
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <div className="flex font-roboto text-[20px] leading-[23.44px] font-normal items-center justify-evenly">
        <div className="flex gap-[5px] items-center font-bold text-[32px] leading-[37.5px]">
          <img src={palmlogo} alt="page-logo" className=""></img>
          <p className="text-[#FFE55E]">
            <span className="text-[#FFAA00]">G</span>local
          </p>
        </div>

        <div className="h-[107.61px] flex items-center text-xl leading-[23.44px]">
          <ul className="nav-ul flex text-black gap-10">
            <li>
              <Link
                to="/"
                className={isLinkActive("/") + " nav-link"}
                style={{ textDecoration: "none" }}
                onClick={() => handleNavLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className={isLinkActive("/categories") + " nav-link"}
                style={{ textDecoration: "none" }}
                onClick={() => handleNavLinkClick("/categories")}
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isLinkActive("/about") + " nav-link"}
                style={{ textDecoration: "none" }}
                onClick={() => handleNavLinkClick("/about")}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={isLinkActive("/products") + " nav-link"}
                style={{ textDecoration: "none" }}
                onClick={() => handleNavLinkClick("/products")}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/petcare"
                className={isLinkActive("/petcare") + " nav-link"}
                style={{ textDecoration: "none" }}
                onClick={() => handleNavLinkClick("/petcare")}
              >
                Pet Care
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isLinkActive("/contact") + " nav-link"}
                style={{ textDecoration: "none" }}
                onClick={() => handleNavLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[332px] flex justify-between">
          {currentUser ? (
            <button
              className="w-[146px] h-[49px] bg-[#124C5F] text-white rounded-[5px]"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          ) : (
            <>
              <button
                className="w-[146px] h-[49px] bg-[#124C5F] text-white rounded-[5px]"
                onClick={() => navigate("/signin")}
              >
                Sign In
              </button>
              <button
                className="w-[146px] h-[49px] bg-[#C7E7E1] text-[#124C5F] rounded-[5px]"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
