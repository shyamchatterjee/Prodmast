import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Context } from "../../Context/context";
let Navbar = ()=>{
   
   let {bool,setBool} = useContext(Context)
    return <div className=" nav  w-full h-15 md:h-20 bg-white flex justify-between p-2 items-center md:p-3 ">
          <div className="flex items-center">
                <img src="https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png" className="h-8 w-8 md:w-13 md:h-10" alt="" />
                <p className="  text-1xl   md: text-2xl">Prodmast</p>
          </div>
          <div className=" hidden md:flex items-center justify-around  gap-3 text-2xl">
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Contect</p>
          </div>
           <div className={bool==false?"hidden":" block bar  w-4xl h-full text-2xl flex-col  items-center bg-gradient-to-r from-white to-green-600 fixed top-0 z-2 p-5 ml-40   md:hidden"}>
            <IoMdClose  className="text-2xl cursor-pointer  "   onClick={()=>{setBool(false)}}/>
            <p className="peras">Home</p>
            <p className="peras">About</p>
            <p className="peras">Service</p>
            <p className="peras">Contect</p>
            <button className=" bg-green-950 rounded-full w-26 p-2  text-white cursor-pointer">Sign Up</button>
          </div>
          <button className="  hidden md:block bg-green-950 rounded-full w-22 p-2  text-white cursor-pointer">Sign Up</button>
           <FaBarsStaggered onClick={()=>{setBool(true)}}  className=" md:hidden  text-3xl cursor-pointer text-black"/> 
        
          
    </div>
}
export default Navbar