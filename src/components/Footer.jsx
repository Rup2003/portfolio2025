import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="py-14 ">
    {/* <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent text-4xl"
    >
      Footer
    </motion.h2> */}

    <div className="container grid">
      <div className="footer-about">
        <h3>Rupak saha</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <div className="footer-form">
        <h3>Get in Touch</h3>
        <form action="#">
          <input type="email"
          required
          autoComplete="off"
          placeholder="email" />
          <input type="submit" value="submit" />
        </form>
      </div>
      <div className="footeer-social">
      <div>
      <IoLogoInstagram className="hover:text-pink-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out" />
        <FaLinkedin className="hover:text-blue-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out" />
        <FaGithub className="hover:text-white hover:scale-110 hover:-translate-y-1  transition-all duration-300 ease-in-out" />
        <FaSquareXTwitter className="hover:text-gray-300 hover:scale-110 hover:-translate-y-1  transition-all duration-300 ease-in-out" />
      </div>
      </div>
      <div className="footer-contact">
      <h3>contact me</h3>
      <h3>+91 9073427595</h3>
      </div>
      </div> 
    </footer>
  );
};
