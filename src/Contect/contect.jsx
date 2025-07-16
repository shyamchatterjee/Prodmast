import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
let Contect = () => {
  return (
    <div className="w-full bg-black text-white p-5">
      <div className=" mt-3 w-full flex items-center flex-col gap-5 md:flex-row md:justify-center md:gap-5 ">
        <div className="flex items-center flex-col gap-2 ">
          <div className="flex gap-1 items-center">
            <img
              src="https://cdn.vectorstock.com/i/500p/45/61/lion-head-logo-esports-line-art-vector-52294561.jpg"
              className="h-8 w-8"
              alt=""
            />
            <p style={{ fontSize: "20px" }}>Prodmast</p>
          </div>
          <p style={{ fontSize: "14px" }}>
            Our solution make oroduction faster and chapter.{" "}
          </p>{" "}
          <p style={{ fontSize: "14px" }}>contect us for more information</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-col items-center gap-2 ">
            <p style={{ fontSize: "18px" }}>Company</p>
            <p style={{ fontSize: "14px" }}>about us</p>{" "}
            <p style={{ fontSize: "14px" }}>Customers</p>
            <p style={{ fontSize: "14px" }}>Newsroom</p>
            <p style={{ fontSize: "14px" }}>Events</p>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <p style={{ fontSize: "18px" }}>Industries</p>
            <p style={{ fontSize: "14px" }}>Precision Metalforming</p>{" "}
            <p style={{ fontSize: "14px" }}>Industrial Manufacturing</p>
            <p style={{ fontSize: "14px" }}>High Tect & electronics</p>
            <p style={{ fontSize: "14px" }}>Aerospace</p>
          </div>
        </div>
        
          <div className="flex flex-col items-center gap-2 ">
            <p style={{ fontSize: "18px" }}>Products</p>
            <p style={{ fontSize: "14px" }}>Manufacturing Execution System</p>
            <p style={{ fontSize: "14px" }}>Enterprise Resource Planing</p>

            <p style={{ fontSize: "14px" }}> Quality Managment System</p>
            <p style={{ fontSize: "14px" }}>Supply Chain Planing</p>
          </div>

          <div className="flex flex-col items-center gap-2 ">
            <p style={{ fontSize: "18px" }}>Get in Touch</p>
            <p>hello@prodmast.com</p>
            <div className="flex items-center gap-1">
            <FaLinkedin/>
            <FaInstagram/>
            <FaFacebookSquare/>
        </div>
        </div>
    </div>
    <div className="mt-4  w-full border-b-1"></div>
         <div className="mt-4  flex justify-between items-center">
                <p style={{fontSize:"10px"}}>@2025 prodmast. All rights reserved</p>
                <p   style={{fontSize:"10px"}}>Terms & Condition   Privecy Policy</p>
         </div>
    </div>
  );
};
export default Contect;
