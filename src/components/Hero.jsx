import React from "react";
import vaso from "../assets/vasoStarbucks.png";
import figura from "../assets/figura.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-10 h-full justify-between pt-64">
      <div className="items-center ">
        <h1 className="text-[#FFFFFF] text-[60px] font-semibold">
          Rich and creamy goodnes of our Frappuccinos
        </h1>
        <div className="w-[400px] text-left">
          <p className="text-[#FFFFFF] text-[20px] font-normal text-left">
            Step into a world of pure bliss with our dreamy Frappuccino
            creations.
          </p>
          <p className="text-[#FFFFFF] text-[20px] font-normal text-left">
            Each sip is like a magical journey, whisking you away to a place of
            wonder and delight.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <img alt="" src={vaso} className="absolute w-[370px] h-[570px]" />
        <img alt="" src={figura} className="" />
      </div>
    </div>
  );
};

export default Hero;
