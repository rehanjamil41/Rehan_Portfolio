import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import ProfilePhoto from "../components/ProfilePhoto";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full flex-col items-center justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* Background Component */}
      <HeroBackground />

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center">
        <div
          className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
        >
          <AnimatedTitle
            text={"Hi   I'm   Rehan Jamil."}
            className={
              "mb-1 text-center text-[30px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[35px] md:mb-16 md:text-[50px] lg:text-[70px]"
            }
            wordSpace={"mr-[10px]"}
            charSpace={"mr-[0.001em]"}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
