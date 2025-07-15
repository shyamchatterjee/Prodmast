import { MdOutlineWeb } from "react-icons/md";
import { HiCheckCircle } from "react-icons/hi";
let Service = () => {
  return <div className="w-full flex flex-col gap-3"> <div className="w-full flex justify-center items-center flex-col gap-4 p-2 md:justify-center md:gap-16 md:flex-row">
    
         <div className="w-50 p-2  bg-white rounded-2xl flex flex-col gap-2 md:w-80 md:p-4 ">
            <div className="flex flex-col gap-2">
 <p>Total Project</p>
       <div className="flex flex-row items-center gap-1">
                      <p className="font-bold">1475</p>
                      <p className="text-green-400">34%</p>
       </div>
            </div>
            <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-2">
                          <p>Finished</p>
                          <div className="mini-box"></div>
                          <p>10%</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                          <p>InProject</p>
                          <div className="mini-box"></div>
                          <p>13%</p>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                          <p>Rejected</p>
                          <div className="mini-box"></div>
                          <p>11%</p>
                    </div>
            </div>
                 
                  <div className="mini-boxes"></div>        
                   <div className="w-full flex flex-row gap-3 md:gap-3">
                          <div className="mini-box2 w-8 h-30 "></div>
                          <div className="bg-emerald-700 w-8 h-26 mt-4 rounded-2"></div>
                          <div className="mini-box2 w-8 h-20 mt-10 "></div>
                          <div className="bg-emerald-700 w-8 h-28 mt-2 rounded-2"></div>
                   </div>


                 <div className="fixed   hidden  md:block  w-50 bg-white p-3 md:flex flex-col gap-2 rounded-2xl   ">
                     <div className="w-full flex justify-between items-center">
                           <MdOutlineWeb className="bg-green-200 p-1 text-2xl"/>
                           <img src="https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-512.png" height={12} width={12} alt="" />
                     </div>
                     <p>Total Projects 8%</p>
                     <p className="text-2xl font-bold">1951+</p>
                     <p className="txt-sm">Increase of 126 this month</p>
                 </div>
                 
         </div>
         
        
 <div className=" w-50 bg-white p-2 md:flex flex-col gap-2 rounded-2xl md:hidden  ">
                     <div className="w-full flex justify-between items-center">
                           <MdOutlineWeb className="bg-green-200 p-1 text-2xl"/>
                           <img src="https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-512.png" height={12} width={12} alt="" />
                     </div>
                     <p>Total Projects 8%</p>
                     <p className="text-2xl font-bold">1951+</p>
                     <p className="txt-sm">Increase of 126 this month</p>
                 </div>


         <div className="w-full  bg-white rounded-2xl p-3 md:w-96">
                  <h2 className="text-2xl">Key Benifits of Our System for</h2>
                  <h2 className="text-2xl">Your Business Efficiency</h2>
                  <p>Our system boost productivity, cut costs, and bussiness growth.</p>
                  <div className="flex items-center gap-1">
                        <HiCheckCircle className="text-green-950"/>
                        <p style={{fontSize:"17px",fontWeight:"bold"}}>Boosting Quality with Teach</p></div>
                        <p>With advanced technology, We help you achive top Product</p>
                        <p>quality.Discover how we can enhance your standars</p>
                        <div className="flex items-center gap-1">
                        <HiCheckCircle className="text-green-950"/>
                        <p style={{fontSize:"17px",fontWeight:"bold"}}>Optimization Production Process</p></div>
                        <p>Boost factory efficiency and productivity with our innotive solutions.</p>
                        <p>See how the latest technology canmaximize your output</p>
                        <div className="flex items-center gap-1">
                        <HiCheckCircle className="text-green-950"/>
                        <p style={{fontSize:"17px",fontWeight:"bold"}}>AI-Driven Production</p></div>
                        <p>Leverage the power of AI to transform your manufacturing processes,</p>
                        <p>Aciving faster and more effective results</p>
         </div>
  </div>
     <div className="w-full bg-black p-5 md:p-20   flex flex-col gap-2 text-white">
         <div className="mt-10  flex  flex-col justify-center items-center "><p style={{fontSize:"30px"}}>Tailored Plans for Your  </p>
            <p style={{fontSize:"30px"}}>Manufacturing Scale</p>
            <p style={{fontSize:"10px"}}>Flexible pricing for any business size</p>
         </div>
          <div className="w-full flex flex-col  items-center gap-2 md:gap-5 justify-center md:flex-row">
                   <div className="color w-50 rounded-2xl p-2 md:w-80  md:p-3">
                        <p className="font-bold">Starter</p>
                         <p>This package offers the basic feactures you need to get started</p>
                         <p>$39 /month</p>
                         <button className=" mt-2 cursor-pointer w-full p-1 bg-transparent border-1 rounded-2xl border-b-green-200">Get Started</button>
                           <p style={{marginTop:"5px" , fontSize:"13px",textAlign:"center"}}>Features</p>
                            <div className="flex  gap-1">
                        <HiCheckCircle className="text-white mt-1.5"/>
                        <p>Production up to 10,000 units per month</p></div>
                       <div className="flex  gap-1 ">
                        <HiCheckCircle className="text-white mt-1.5 "/>
                        <p>24/7 technical support</p></div>
                    <div className="flex  gap-1 ">
                        <HiCheckCircle className="text-white mt-1.5 "/>
                        <p>Access the production deshbord</p>
                   </div>
                   <div className="flex  gap-1 ">
                        <HiCheckCircle className="text-white mt-1.5 "/>
                        <p>Initial setup guide</p>
                   </div>
                    
                   </div>
                   <div className="color w-50 rounded-2xl  p-2 md:w-80 md:p-3">
                          <p className="font-bold">Enterprice</p>
                         <p>This package provide full access to all premium features</p>
                         <p>$99 /month</p>
                         <button className=" mt-2 cursor-pointer w-full p-1 bg-transparent border-1 rounded-2xl border-b-green-200">Get Started</button>
                           <p style={{marginTop:"5px" , fontSize:"13px",textAlign:"center"}}>Features</p>
                            <div className="flex  gap-1">
                        <HiCheckCircle className="text-white mt-1.5"/>
                        <p>Unlimited production units</p></div>
                       <div className="flex  gap-1 ">
                        <HiCheckCircle className="text-white mt-1.5 "/>
                        <p>Dedicated account manager</p></div>
                    <div className="flex  gap-1 ">
                        <HiCheckCircle className="text-white mt-1.5 "/>
                        <p>Tailred manufacturing solutions</p>
                   </div>
                   <div className="flex  gap-1 ">
                        <HiCheckCircle className="text-white mt-1.5 "/>
                        <p>Predictive production optimization</p>
                   </div>
                    

                   </div>
          </div>

            <div className="box3 mt-6 w-full p-4 bg-green-950 p-2 rounded-2xl flex items-center flex-col gap-2">
                     <p style={{fontSize:"22px"}}>Professional</p>
                     <p>designed for grater flexbility, this solution offers</p>
                     <p>advanced tooks for custom tailoring to you needs.</p>
                     <button className="box text-black p-1 w-30 rounded-2xl font-bold cursor-pointer">Get Started</button>
            </div>
     </div>
     <div className="w-full h-60">

     </div>
  </div>
};
export default Service;
