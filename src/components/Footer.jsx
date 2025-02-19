import { motion } from "motion/react"
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

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="container flex flex-col md:grid md:grid-cols-4 gap-2.5"
      >
        <div className="footer-about ">
          <h3 className="text-lg font-semibold mb-2">Rupak saha</h3>
          <p className="text-sm font-bold w-[90%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="footer-form flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <form action="#" className="flex gap-1">
            <input
              type="email"
              required
              autoComplete="off"
              placeholder="email"
              className="border-2 rounded-lg px-4"
            />
            <input
              type="submit"
              value="submit"
              className="px-2 py-1 bg-purple-500 text-white rounded-lg"
            />
          </form>
        </div>
        <div className="footeer-social flex items-center">
          <div className="flex w-full items-center justify-center gap-3">
            <IoLogoInstagram
              className="hover:text-pink-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out"
              size="30"
            />
            <FaLinkedin
              className="hover:text-blue-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out"
              size="30"
            />
            <FaGithub
              className="hover:text-white hover:scale-110 hover:-translate-y-1  transition-all duration-300 ease-in-out"
              size="30"
            />
            <FaSquareXTwitter
              className="hover:text-gray-300 hover:scale-110 hover:-translate-y-1  transition-all duration-300 ease-in-out"
              size="30"
            />
          </div>
        </div>
        <div className="footer-contact flex gap-2 items-center justify-center">
          <h3 className="text-xl font-semibold">Contact me : </h3>
          <h3 className="font-mono text-lg">+91 9073427595</h3>
        </div>
      </motion.div>
    </footer>
  );
};
