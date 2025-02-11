"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href.split("#")[1];
    window.scrollTo({
      top: document.getElementById(href)?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center">
        <Container
          width="40%"
          height="140px"
          color="rgba(255, 255, 255, 0.01)"
          borderRadius={60}
          top="0px"
          left="0px"
          angle={45}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 rounded-lg"></div>
          <div className="flex items-center justify-around w-full min-w-[600px] rounded-lg px-6 py-4 shadow-lg backdrop-blur-lg bg-[rgba(0,0,0,0.5)]">
            <Link
              href="#home"
              onClick={handleScroll}
              aria-label="Scroll to Home Section"
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:text-[#00bcd4]"
            >
              <FaHome className="text-2xl" />
              <span className="mt-2 text-sm font-semibold">Home</span>
            </Link>

            <Link
              href="#about"
              onClick={handleScroll}
              aria-label="Scroll to About Section"
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:text-[#00bcd4]"
            >
              <FaUser className="text-2xl" />
              <span className="mt-2 text-sm font-semibold">About</span>
            </Link>

            <Link
              href="#work"
              onClick={handleScroll}
              aria-label="Scroll to Work Section"
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:text-[#00bcd4]"
            >
              <FaBriefcase className="text-2xl" />
              <span className="mt-2 text-sm font-semibold">Work</span>
            </Link>

            <Link
              href="#contact"
              onClick={handleScroll}
              aria-label="Scroll to Contact Section"
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110 hover:text-[#00bcd4]"
            >
              <FaEnvelope className="text-2xl" />
              <span className="mt-2 text-sm font-semibold">Contact</span>
            </Link>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;