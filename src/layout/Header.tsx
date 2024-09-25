import { Link, useLocation } from "react-router-dom";
import search from "../assets/search.svg";
import love from "../assets/love.svg";
import cart from "../assets/cart.svg";
import hamburger from "../assets/hamburger.png";
import close from "../assets/close.png";
import { useEffect, useState } from "react";

export const Header = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("/");
  const { pathname } = useLocation();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <header>
      <div className="bg-[#000] w-full py-3 px-4 flex flex-col md:flex-row md:justify-center gap-8 text-[#FAFAFA]">
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <div className="w-full md:w-3/12 flex flex-row gap-20 justify-between">
          <Link to="#" className="font-medium">
            ShopNow
          </Link>
          <select
            name="language"
            id=""
            className="bg-transparent border-none outline-none focus:bg-[#000] focus:border-none focus:outline-none"
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
      </div>
      <div className="container-main hidden lg:flex flex-col md:flex-row md:items-center justify-between py-3">
        <Link to="/">
          <h1 className="font-bold capitalize text-2xl mb-4">exclusive</h1>
        </Link>
        <div className="flex flex-row items-center gap-10 font-medium">
          <Link
            to="#"
            className={`${
              active === "/" ? "underline underline-offset-4" : ""
            } cursor-pointer`}
          >
            Home
          </Link>
          <Link to="#">Contact</Link>
          <Link to="#">About</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="flex items-center border bg-[#F5F5F5] rounded-sm cursor-pointer px-2 gap-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-[90%] active:border-0 focus:border-0 outline-none  bg-transparent border-none rounded-sm text-[#000] p-2 placeholder:text-[#000] text-sm font-medium opacity-80 placeholder:opacity-80"
            />
            <img src={search} className="w-4 h-4" />
          </div>
          <img src={love} className="w-5 h-5" />
          <img src={cart} className="w-5 h-5" />
        </div>
      </div>
      <div className="container-main lg:hidden flex flex-col md:flex-row md:items-center justify-between py-3">
        <div className="w-full flex items-center justify-between">
          <Link to="/">
            <h1 className="font-bold capitalize text-2xl mb-4">exclusive</h1>
          </Link>
          {nav ? (
            <img
              src={close}
              alt="hamburger icon"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setNav(!nav)}
            />
          ) : (
            <img
              src={hamburger}
              alt="hamburger icon"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setNav(!nav)}
            />
          )}
        </div>
        <div
          className={
            nav
              ? "w-full h-full z-50 fixed left-0 top-0 bg-gray-900/70 text-white lg:hidden backdrop-blur"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed w-full text-left bg-[#5e5a5a] left-0 top-0 bottom-0 text-white h-full p-10 py-10 ease-in duration-500"
                : "fixed p-10 w-full left-[-100%] z-50 top-0 duration-1000 h-full ease-in"
            }
          >
            <div className="w-full flex justify-between items-center mb-[5rem]">
              <div className="cursor-pointer p-0" onClick={() => setNav(false)}>
                <Link to="/">
                  <h1 className="font-bold capitalize text-2xl mb-4">
                    exclusive
                  </h1>
                </Link>
              </div>
              <div className="cursor-pointer" onClick={() => setNav(false)}>
                <img
                  src={close}
                  alt="hamburger icon"
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => setNav(!nav)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 text-white justify-between h-fit mb-[100px]">
              <Link
                to="#"
                className={`${
                  active === "/" ? "underline underline-offset-4" : ""
                } cursor-pointer`}
              >
                Home
              </Link>
              <Link to="#">Contact</Link>
              <Link to="#">About</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
            <div className="flex flex-row items-center gap-5">
              <div className="flex items-center border bg-[#F5F5F5] rounded-sm cursor-pointer px-2 gap-2">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-[90%] active:border-0 focus:border-0 outline-none  bg-transparent border-none rounded-sm text-[#000] p-2 placeholder:text-[#000] text-sm font-medium opacity-80 placeholder:opacity-80"
                />
                <img src={search} className="w-4 h-4" />
              </div>
              <img src={love} className="w-5 h-5" />
              <img src={cart} className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
