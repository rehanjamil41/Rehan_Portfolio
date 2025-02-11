import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

function Tools() {
  return (
    <section
      className="relative z-10 w-full bg-gradient-to-r from-[#1f2024] to-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-28"
      id="tools"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Tools & Technologies"}
          className="text-center text-[45px] font-bold text-[#e4ded7] sm:text-[55px] md:text-[60px] lg:text-[70px] mb-16 sm:mb-20"
          wordSpace={"mr/[12px]"}
          charSpace={"mr/[0.001em]"}
        />

        <div className="flex flex-wrap w-full justify-center gap-12">
          {/* Frontend Card */}
          <div className="w-full sm:w-[250px] lg:w-[280px] p-8 bg-[#1F2024] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <AnimatedBody delay={0.2} text="Frontend Technologies" className="text-center text-[24px] font-semibold text-[#e4ded7] mb-6" />
            <div className="flex justify-center gap-6">
              <SiTypescript size={50} className="text-[#e4ded7] hover:text-[#61dafb] transition-colors duration-300" />
              <SiJavascript size={50} className="text-[#e4ded7] hover:text-[#f7df1e] transition-colors duration-300" />
              <SiReact size={50} className="text-[#e4ded7] hover:text-[#61dafb] transition-colors duration-300" />
              <SiNextdotjs size={50} className="text-[#e4ded7] hover:text-[#b54040] transition-colors duration-300" />
            </div>
          </div>

          {/* Backend Card */}
          <div className="w-full sm:w-[250px] lg:w-[280px] p-8 bg-[#1F2024] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <AnimatedBody delay={0.3} text="Backend Technologies" className="text-center text-[24px] font-semibold text-[#e4ded7] mb-6" />
            <div className="flex justify-center gap-6">
              <SiPostgresql size={50} className="text-[#e4ded7] hover:text-[#336791] transition-colors duration-300" />
              <SiMysql size={50} className="text-[#e4ded7] hover:text-[#4479a1] transition-colors duration-300" />
              <SiMongodb size={50} className="text-[#e4ded7] hover:text-[#4DB33D] transition-colors duration-300" />
              <SiNodedotjs size={50} className="text-[#e4ded7] hover:text-[#68a063] transition-colors duration-300" />
            </div>
          </div>

          {/* Other Tools Card */}
          <div className="w-full sm:w-[250px] lg:w-[280px] p-8 bg-[#1F2024] rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <AnimatedBody delay={0.4} text="Other Tools" className="text-center text-[24px] font-semibold text-[#e4ded7] mb-6" />
            <div className="flex justify-center gap-6">
              <SiGithub size={50} className="text-[#e4ded7] hover:text-[#6e5494] transition-colors duration-300" />
              <SiGit size={50} className="text-[#e4ded7] hover:text-[#f1502f] transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
