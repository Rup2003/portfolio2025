import logo from "../assets/projectImg/RupakSahaLogo-removebg-preview.png";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const NavBar = () => {
  return (
    <nav className="bg-black flex items-center justify-between py-1">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-20 w-auto" />
      </div>
      <div className="flex items-center justify-center gap-2 text-2xl lg:text-4xl lg:gap-4 ">
        <IoLogoInstagram className="hover:text-pink-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out" />
        <FaLinkedin className="hover:text-blue-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out" />
        <FaGithub className="hover:text-white hover:scale-110 hover:-translate-y-1  transition-all duration-300 ease-in-out" />
        <FaSquareXTwitter className="hover:text-gray-300 hover:scale-110 hover:-translate-y-1  transition-all duration-300 ease-in-out" />
      </div>
    </nav>
  );
};
