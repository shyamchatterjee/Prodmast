import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { Context } from "../../Context/context";
let Form = () => {
  let { boolen, setboolen, curreState, setState } = useContext(Context);
  return (
    <div
      className={
        boolen == false
          ? "hidden"
          : "form w-70 bg-white  p-3 top-0 fixed mr-40 rounded-2xl"
      }
    >
      {curreState === true ? (
        <form
          action=""
          className="w-full p-3  flex flex-col items-center gap-3  "
        >
          <div className="w-full flex justify-between items-center ">
            <h2 style={{ fontSize: "18px" }} className=" font-bold ">
              Signup
            </h2>
            <IoMdClose
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => {
                setboolen(false);
              }}
              className="font-bold"
            />
          </div>
          <input
            type="text"
            name=""
            id=""
            className="input   w-full  p-3 border-1 h-10 "
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name=""
            id=""
            className="input  w-full  p-3 border-1 h-10 "
            placeholder="Your email"
            required
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="input  w-full  p-5 border-1 h-10 "
            required
          />
          <button className="w-full bg-black p-2 text-white buttons cursor-pointer">
            Create account
          </button>
          <div className="flex items-center gap-1">
            <p>Allredy have an account? </p>
            <p
              style={{ cursor: "pointer", fontWeight: "bolder" }}
              onClick={() => {
                setState(false);
              }}
            >
              Login
            </p>
          </div>
        </form>
      ) : (
        <form
          action=""
          className="w-full p-3  flex flex-col items-center gap-3  "
        >
          <div className="w-full flex justify-between items-center ">
            <h2 style={{ fontSize: "18px" }} className=" font-bold ">
              Login
            </h2>
            <IoMdClose
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => {
                setboolen(false);
              }}
              className="font-bold"
            />
          </div>

          <input
            type="email"
            name=""
            id=""
            className="input  w-full  p-3 border-1 h-10 "
            placeholder="Your email"
            required
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="input  w-full  p-5 border-1 h-10 "
            required
          />
          <button className="w-full bg-black p-2 text-white buttons cursor-pointer">
            Login
          </button>
          <div className="flex items-center gap-1">
            <p>Create a new account? </p>
            <p
              style={{ cursor: "pointer", fontWeight: "bolder" }}
              onClick={() => {
                setState(true);
              }}
            >
              Signup
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
export default Form;
