import { FaStarOfLife } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiBox } from "react-icons/fi";
import { FaWrench } from "react-icons/fa";
import { BiShieldQuarter } from "react-icons/bi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { MdShowChart } from "react-icons/md";
let About = () => {
  return (
    <div id="about" className="mt-4  box2 w-full p-3  flex flex-col gap-2 ">
      <div className="flex justify-center items-center flex-col text-white">
        <h2 className="mt-10 text-2xl ">Efficient and Integrated </h2>
        <h2 className="text-2xl">Manufacturing service</h2>
        <p className="pera">
          simple operations with efficient, quality-focused services.
        </p>
      </div>
      <div className="mt-7 w-full flex flex-row  flex-wrap gap-6 justify-center md:flex-wrap">
        <div className="box3 w-35 p-3  flex flex-col rounded-2xl gap-2 text-white md:w-45 ">
          <div className="flex items-center justify-between">
            <FaStarOfLife className="text-sm" />
            <FaArrowTrendUp className="text-sm" />
          </div>
          <p>Production and Assembly</p>
          <p className="pera">
            Details on production, assembly, capacity, and product types
          </p>
        </div>
        <div className="box3 w-35 p-3  flex flex-col rounded-2xl gap-2 text-white md:w-45 ">
          <div className="flex items-center justify-between">
            <HiOutlineSquare3Stack3D className="text-sm" />
            <FaArrowTrendUp className="text-sm" />
          </div>
          <p>Custom Manufacturing</p>
          <p className="pera">
            Custom product creation with design and customization option
          </p>
        </div>
        <div className="box3 w-35 p-3  flex flex-col rounded-2xl gap-2 text-white md:w-45 ">
          <div className="flex items-center justify-between">
            <FaWrench className="text-sm" />
            <FaArrowTrendUp className="text-sm" />
          </div>
          <p>Quality Control</p>
          <p className="pera">
            Procedures and systems in place to ensure high product quality.
          </p>
        </div>
        <div className="box3 w-35 p-3  flex flex-col rounded-2xl gap-2 text-white md:w-45 ">
          <div className="flex items-center justify-between">
            <BiShieldQuarter className="text-sm" />
            <FaArrowTrendUp className="text-sm" />
          </div>
          <p>Technology and Innovation</p>
          <p className="pera">Details on the latest Manufacturing</p>
          <p className="pera">technologies and ongoing innovation.</p>
        </div>
        <div className="box3 w-35 p-3  flex flex-col rounded-2xl gap-2 text-white md:w-45 ">
          <div className="flex items-center justify-between">
            <FiBox className="text-sm" />
            <FaArrowTrendUp className="text-sm" />
          </div>
          <p>Packaging and Logistics</p>
          <p className="pera">Packaging and logistics for shipping to </p>
          <p className="pera">customers and distributors.</p>
        </div>
        <div className="box3 w-35 p-3  flex flex-col rounded-2xl gap-2 text-white md:w-45 ">
          <div className="flex items-center justify-between">
            <MdShowChart className="text-sm" />
            <FaArrowTrendUp className="text-sm" />
          </div>
          <p>Consulting Market Research</p>
          <p className="pera">Services to help companies understand </p>
          <p className="pera">market needs and provide strategic advice.</p>
        </div>
      </div>
    </div>
  );
};
export default About;
