import React from "react";
import pic1 from "../Pictures/Vector-s.png";
import pic2 from "../Pictures/Vector-N.png";

const DivThree = () => {
  return (
    <div className="h-[30vh] w-[500] bg-[#ffffff] ml-[20%] mt-[50px] rounded-l-[30px] pt-[60px] flex justify-between">
      <div>
        <p className="h-[45px] text-[#082183]  font-mono font-semibold text-[30px] text-center ">
          Over 500 plus
        </p>
        <p className="h-[45px] text-[#082183] ml-[50px] font-mono font-semibold text-[30px] text-center ">
          courses in one place
        </p>
      </div>

      <div className="ml-[-100px]">
        <img src={pic1} />
      </div>

      <div className="mr-[300px]">
        <img src={pic2} />
      </div>
    </div>
  );
};

export default DivThree;
