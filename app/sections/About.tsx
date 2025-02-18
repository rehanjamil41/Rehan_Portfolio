import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import ProfilePhoto from "../components/ProfilePhoto";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-gradient-to-r from-[#1f2024] to-[#0E1016] pt-20 pb-40 md:pt-24 md:pb-48 lg:pt-28 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[80%] flex-col items-center justify-center lg:max-w-[1300px]">
        <AnimatedTitle
          text={"About Me"}
          className="text-center mb-12 text-[36px] font-bold text-[#f1f1f1] sm:text-[45px] md:mb-16 md:text-[58px] lg:text-[70px]"
          wordSpace={"mr-[18px]"}
          charSpace={"mr/[0.001em]"}
        />

        <div className="flex w-[100%] flex-col lg:flex-row lg:gap-24">
          <div className="w-full mb-12 flex flex-col gap-4 text-[18px] font-medium leading-relaxed text-[#e4ded7] md:mb-20 md:gap-6 md:text-[20px] lg:mb-20 lg:max-w-[60%] lg:text-[22px]">
            <AnimatedBody
              text="I’m Rehan Jamil, a Computer Science student with a passion for Web Development and Python programming. I enjoy building websites and working with modern technologies to create efficient and user-friendly solutions."
            />

            <AnimatedBody
              delay={0.3}
              text="I’m always learning and exploring new ways to improve my skills."
            />
          </div>
          <div className="w-full lg:w-[20%] flex flex-col items-center">
            <ProfilePhoto />
            <div className="text-center text-[#f1f1f1] text-lg md:text-xl mt-4">
              <p>
                Passionate about web development and python to create innovative, user-centered solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
