import profilepic from "../assets/projectImg/7c817b4ae557f0259e6f4c5057907844.png";
import { motion } from "motion/react"


const container = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-35 lg:pt-40">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text pb-16 text-6xl font-extralight mt-20 tracking-tight text-transparent lg:mt-50 lg:text-7xl"
            >
              Rupak Saha
            </motion.h1>
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              FullStack Developer
            </motion.span>
            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-2-xl text-2xl py-6 tracking-tighter bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent"
            >
              I craft seamless digital experiences with modern web technologies.
              From intuitive frontend interfaces to robust backend
              architectures, I blend creativity with performance. Skilled in AWS
              Cloud, I build scalable solutions that bridge innovation and
              efficiency.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center mt-9">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="rounded-2xl w-3/4 lg:w-2/3 h-auto"
              src={profilepic}
              alt="Rupak Saha"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
