import React from "react";
import pic1 from "../Pictures/Rectangle 9.png";

const DivFive = () => {
  return (
    <div className="h-[110vh] flex justify-between bg-[#BDEAFF]">
      <div className="ml-[100px] mt-[80px]">
        <div className="h-[150px] font-mono font-semibold text-[40px] text-[#082183] text-center">
          <h1>
            Make your personalized <br /> learning experience
          </h1>
        </div>

        <div className="flex justify-between ">
          <div className="m-[20px]">
            <h1 className="font-mono font-semibold text-[40px] text-[#082183] m-[10px]">
              1
            </h1>
            <h3 className="font-mono font-semibold text-[20px] text-[#082183] m-[10px]">
              Create account
            </h3>
            <p className="  text-[15px] text-[#082183] m-[10px]">
              At first create your <br /> account on our website
            </p>
          </div>

          <div className="m-[20px]">
            <h1 className="font-mono font-semibold text-[40px] text-[#082183] m-[10px]">
              2
            </h1>
            <h3 className="font-mono font-semibold text-[20px] text-[#082183] m-[10px]">
              Select course
            </h3>
            <p className="  text-[15px] text-[#082183] m-[10px]">
              Then select your preferred <br /> course from our bucket
            </p>
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="m-[20px]">
            <h1 className="font-mono font-semibold text-[40px] text-[#082183] m-[10px]">
              3
            </h1>
            <h3 className="font-mono font-semibold text-[20px] text-[#082183] m-[10px]">
              Create account
            </h3>
            <p className="  text-[15px] text-[#082183] m-[10px]">
              Learn your skill from the <br /> best learning materials
            </p>
          </div>

          <div className="m-[20px]">
            <h1 className="font-mono font-semibold text-[40px] text-[#082183] m-[10px]">
              4
            </h1>
            <h3 className="font-mono font-semibold text-[20px] text-[#082183] m-[10px]">
              Create account
            </h3>
            <p className="  text-[15px] text-[#082183] m-[10px]">
              After learning the course <br /> make steps to success
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="m-[100px] text-center">
          <p className="  text-[15px] text-[#082183]">
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
            Labore iure soluta, quod natus eaque
          </p>
        </div>

        <div className="mt-[-50px] h-[700px] w-[700px]">
          <img src={pic1} />
        </div>
      </div>
    </div>
  );
};

export default DivFive;
