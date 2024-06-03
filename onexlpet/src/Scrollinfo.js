import React from "react";
import mouseicon from "./mouseicon.svg";
import arrow from "./arrow.svg";
import scroll from "./scroll.svg";

function Scrollinfo() {
  return (
    <div className="absolute mt-[620px] ml-[52px] w-[63px] h-[26.8px] transform rotate-90 ">
      <img
        src={arrow}
        alt="arrow"
        className="w-[13px] transform mt-7 -rotate-90"
      ></img>
      <div className="flex ml-3 w-[63px] h-[16.8px] gap-[25px] items-center">
        {/* <p className="w-[34px] h-[12px] text-[10px] font-semibold leading-3 transform tracking-[-0.07em]">
              SCROLL
            </p> */}
        <img src={scroll} alt="scroll" className="transform -rotate-90"></img>
        <img
          src={mouseicon}
          alt="mouse_icon"
          className="h-6 w-[16.8px] transform -rotate-90 "
        ></img>
      </div>
    </div>
  );
}

export default Scrollinfo;
