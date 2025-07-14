import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Context } from "../../Context/context";
let Navbar = ()=>{
   
   let {bool,setBool} = useContext(Context)
    return <div className=" nav  w-full  p-3 mt-2  rounded-full bg-white flex justify-between p-2 items-center md:p-3 ">
          <div className="flex items-center">
                <img src="https://tse2.mm.bing.net/th/id/OIP.CTZVRe2QsSp0H7iUwdTpwQHaEv?r=0&pid=ImgDet&w=474&h=303&rs=1&o=7&rm=3" className="h-8 w-8 md:w-13 md:h-10" alt="" />
                <p className="  text-1xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500   md: text-2xl">Prodmast</p>
          </div>
          <div className=" hidden md:flex items-center justify-around  gap-3 text-2xl">
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Contect</p>
          </div>
           <div className={bool==false?"hidden":" block bar flex  h-full text-2xl flex-col  items-center gap-3 bg-gradient-to-r from-white to-green-600 fixed top-0 z-2 p-5 ml-44  md:hidden"}>
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