import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-[#EFF7FF] h-[100vh] w-[100%]">
      <div className="h-[120px] w-[100%] border-solid border-2 border-[0, 0, 0, 0.25]"></div>

      <div className="pt-[80px]">
        <form className="grid grid-cols-1 gap-1 m-[10px] h-[450px] w-[718px] bg-[white] top-[50px] left-[24%] rounded-[30px] pt-[100px] ml-[25%]">
          <label className="  ml-[70px] font-mono font-semibold text-[25px] text-[#082183]">
            Username
          </label>

          <input
            type="text"
            name="username"
            className="bg-[#F1F1F1] border-solid border-[1px] border-[#082183] rounded-[10px] w-[554px] h-[51px]  ml-[70px] mt-[-40px]"
          />

          <label className="  ml-[70px] mt-[0px] font-mono font-semibold text-[25px] text-[#082183]">
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            className="bg-[#F1F1F1] border-solid border-[1px] border-[#082183] rounded-[10px] w-[554px] h-[51px]  ml-[70px] mt-[-40px]"
          />

          <Link to={"/homepage"}>
            <button className="bg-[#082183] h-[50px] w-[146px] rounded-[15px] ml-[70px] font-mono font-semibold text-[15px] text-[#ffffff]">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
