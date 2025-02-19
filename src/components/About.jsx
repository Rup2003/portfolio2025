import Aboutpic from "../assets/projectImg/977348dcf1d5f5b7bc108c01d8a1dec4.png";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent border-b pb-4 ">
      <h2 className="my-2 text-center text-4xl">About Me</h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-3/4 lg:w-2/3 h-auto"
              src={Aboutpic}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 1, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex items-center"
        >
          <div className="flex justify-center lg:justify-center ">
            <div className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text pb-16 font-extralight tracking-tight text-transparent text align-middle">
              <p className="text-2xl tracking-tighter mt-7 max-w-xl">
                I'm a Full-Stack Developer with a passion for frontend
                craftsmanship and a solid grasp of backend technologies.
                Pursuing my BTech in Computer Science, I specialize in creating
                seamless digital experiences. With expertise in AWS Cloud, I
                build scalable and efficient solutions. I thrive on solving
                problems, exploring new technologies, and pushing the boundaries
                of web development. Let’s create something amazing
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
