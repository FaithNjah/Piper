import React from "react";
import { Link } from "react-router-dom";

const DivOne = () => {
  return (
    <div className="bg-[#EFF7FF] h-[81px] flex justify-between">
      <div className="mt-[10px]">
        <h1 className="ml-[50px] font-mono font-semibold text-[40px] text-[#082183]">
          PIPER
        </h1>
      </div>

      <div className="flex justify-between mt-[25px]">
        <p className="ml-[10px] mr-[10px] font-sans text-[20px] text-[#082183]">
          Home
        </p>
        <p className="ml-[10px] mr-[10px] font-sans text-[20px] text-[#4CC0F8]">
          Courses
        </p>
        <p className="ml-[10px] mr-[10px] font-sans text-[20px] text-[#4CC0F8]">
          Live Classes
        </p>
        <p className="ml-[10px] mr-[10px] font-sans text-[20px] text-[#4CC0F8]">
          Recorded Classes
        </p>
        <p className="ml-[10px] mr-[10px] font-sans text-[20px] text-[#4CC0F8]">
          Take Test
        </p>
      </div>

      <div className="h-[45px] w-[174px] bg-[#082183] mr-[50px] mt-[20px] font-mono font-semibold text-[25px] rounded-[15px] text-center">
        <Link to={"/"}>
          <p className="text-[#ffffff]">Signup</p>
        </Link>
      </div>
    </div>
  );
};

export default DivOne;
