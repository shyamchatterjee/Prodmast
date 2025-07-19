import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Context } from "../../Context/context";
import { FaBars } from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";
let Navbar = () => {
  let { bool, setBool, setboolen, boolen } = useContext(Context);
  return (
    <div className=" nav  w-full  mt-2   rounded-full bg-white flex md:justify-around items-center md:flex-row justify-between p-4   ">
      <div className="flex items-center">
        <img
          src="https://cdn.vectorstock.com/i/500p/45/61/lion-head-logo-esports-line-art-vector-52294561.jpg"
          className="h-8 w-10 md:w-13 md:h-10"
          alt=""
        />
        <p style={{ fontSize: "20px" }}>Prodmast</p>
      </div>
      <div className=" hidden md:flex items-center justify-around  gap-3 text-2xl">
        <AnchorLink href="#home">
          <p>Home</p>
        </AnchorLink>
        <AnchorLink href="#about">
          <p>About</p>
        </AnchorLink>
        <AnchorLink href="#service">
          {" "}
          <p>Service</p>
        </AnchorLink>
        <AnchorLink href="#contect">
          {" "}
          <p>Contect</p>
        </AnchorLink>
      </div>
      <div className={bool == false ? "hidden" : " block bar md:hidden"}>
        <IoMdClose
          className="ml-8  text-2xl cursor-pointer mt-10  "
          onClick={() => {
            setBool(false);
          }}
        />
        <AnchorLink href="#home">
          <p className="peras">Home</p>
        </AnchorLink>
        <AnchorLink href="#about">
          <p className="peras">About</p>
        </AnchorLink>
        <AnchorLink href="#service">
          {" "}
          <p className="peras">Service</p>
        </AnchorLink>
        <AnchorLink href="#contect">
          {" "}
          <p className="peras">Contect</p>
        </AnchorLink>
        <button
          className="button"
          onClick={() => {
            setboolen(true);
          }}
        >
          Sign Up
        </button>
      </div>
      <button
        className=" hidden md:block bg-green-950 rounded-full w-30  p-2  text-white cursor-pointer"
        onClick={() => {
          setboolen(true);
        }}
      >
        Sign Up
      </button>
      <FaBars
        onClick={() => {
          setBool(true);
        }}
        className=" md:hidden  text-3xl cursor-pointer text-black"
      />
    </div>
  );
};
export default Navbar;
