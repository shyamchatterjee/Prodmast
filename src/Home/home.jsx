import { FaStar } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { IoMdSpeedometer } from "react-icons/io";
import { BsSpeedometer } from "react-icons/bs";
let Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-col items-center md: gap-3">
        <h1 className="  font-bold text-2xl md:text-3xl">The Future of Manufacturing</h1>
        <div className="flex flex-row items-center gap-2">
          <h1 className=" font-bold text-2xl md:text-3xl ">with</h1>
          <h1 className=" font-bold text-2xl  text-green-950 md:text-3xl">
            Latest Technology
          </h1>
        </div>
        
      </div>
      <div className="mt-6 w-full flex justify-center items-center gap-2">
        <button className="w-30 p-2 bg-green-950 rounded-full text-white cursor-pointer">
          Get Started
        </button>
        <button className="button w-30 p-2 bg-white rounded-full cursor-pointer text-black font-bold">
          Try Demo
        </button>
      </div>
      <div className=" mt-6 w-full flex justify-center items-center gap-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500 " />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <p className="font-bold">5.0</p>
      </div>
      <div className="w-full flex justify-center items-center gap-2">
        <p>from 80+ </p>
        <p className="font-bold  underline">reviews</p>
      </div>
       <div className=" hidden md:block w-full md:flex  flex-wrap justify-center gap-2 items-center md:gap-8">
                 <img src="https://img.freepik.com/premium-photo/industrial-factory-background-industry-pipe-rack-heat-chemical-manufacturing-equipment-steel-pipes_239711-11688.jpg" className="h-55 w-40 rounded-2xl md:h-55 md:w-40 " alt="" />
                 <div className="w-35 h-45 bg-green-950 text-white rounded-2xl  flex flex-col items-center justify-center md:w-35 md:h-45">
                          <p>100+</p>
                          <p className="text-sm">Our Esteemed</p>
                          <p className="text-sm ">Clients and</p>
                          <p className="text-sm">Partners</p>
                 </div>
                 <div className="w-50 bg-white p-2 flex flex-col gap-2 rounded-2xl">
                     <div className="w-full flex justify-between items-center">
                           <MdOutlineWeb className="bg-green-200 p-1 text-2xl"/>
                           <img src="https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-512.png" height={12} width={12} alt="" />
                     </div>
                     <p>Total Projects 8%</p>
                     <p className="text-2xl font-bold">1951+</p>
                     <p className="txt-sm">Increase of 126 this month</p>
                 </div>
                 <div className="box w-30 h-45  flex justify-center items-center flex-col rounded-2xl">
                                <p className="text-2xl font-bold">6+</p>
                                <p>Years of</p>
                                <p>Dedicated</p>
                                <p>Service</p>
                 </div>
                 <div className="box2 w-40 h-55  p-2  flex flex-col  text-white rounded-2xl">
                             <IoMdSpeedometer className="text-white mt-27 text-1xl"/>
                        <p  >Achieve Optimal</p>
                        <p>Efficiency and Boost</p>
                        <p>Productivity</p>
                 </div>
       </div>


<div className="block flex mt-4 justify-center items-center flex-row flex-wrap gap-3  md:hidden">
           
                 <img src="https://img.freepik.com/premium-photo/industrial-factory-background-industry-pipe-rack-heat-chemical-manufacturing-equipment-steel-pipes_239711-11688.jpg" className="h-40 w-28 rounded-2xl " alt="" />
                 <div className="w-25 h-40 bg-green-950 text-white rounded-2xl  flex flex-col items-center justify-center">
                          <p>100+</p>
                          <p className="text-sm">Our Esteemed</p>
                          <p className="text-sm ">Clients and</p>
                          <p className="text-sm">Partners</p>
                 </div>
                 <div className="box w-30 h-45  flex justify-center items-center flex-col rounded-2xl">
                                <p className="text-2xl font-bold">6+</p>
                                <p>Years of</p>
                                <p>Dedicated</p>
                                <p>Service</p>
                 </div>
                 <div className="w-35  bg-white p-2 flex flex-col  gap-2 rounded-2xl">
                     <div className="w-full flex justify-between items-center">
                           <MdOutlineWeb className="bg-green-200 p-1 text-2xl"/>
                           <img src="https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-512.png" height={12} width={12} alt="" />
                     </div>
                     <p>Total Projects 8%</p>
                     <p className="text-2xl font-bold">1951+</p>
                     <p className="txt-sm">Increase of 126 this month</p>
                 </div>
                 
                 
                 <div className="box2 w-30 h-45  p-2  flex flex-col justify-end  text-white rounded-2xl">
                             <IoMdSpeedometer className="text-white  text-2xl block"/>
                        <p  >Achieve Optimal</p>
                        <p>Efficiency and Boost</p>
                        <p>Productivity</p>
                 </div>
       </div>




    </div>
  );
};
export default Home;
