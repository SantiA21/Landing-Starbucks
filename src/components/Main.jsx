import React, { useEffect } from "react";
import coffes from "../assets/coffes.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex flex-col items-center bg-[#D4EAE2] pt-16">
      <div className="h-auto whitespace-nowrap">
        <h1 className="text-[#00623B] text-[90px] font-bold" data-aos="fade-right" data-aos-easing="linear">Good Coffes</h1>
        <h1 className="text-[#FFFFFF] text-[90px] font-bold drop-shadow-md" data-aos="fade-left" data-aos-easing="linear">
          Good Moods
        </h1>
      </div>
      <div className="absolute bottom-0 h-auto w-auto" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="50" data-aos-offset="0"> 
        <img alt="" src={coffes} className="size-full"/>
      </div>
    </div>
  );
};

export default Main;
