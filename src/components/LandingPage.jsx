import { duration } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textStructure mt-52 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className=" masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.55, 0, 1, 0.45], duration: 2 }}
                    className="mr-[0.5vw] w-[9vw] bg-red-400 rounded-md h-[5vw] relative -top-[0.4] "
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className="uppercase text-[7vw] leading-[6vw] tracking-tighter font-Founders_Grotesk_X-Condensed font-bold"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px]  border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex item-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
