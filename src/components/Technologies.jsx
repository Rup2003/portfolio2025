import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVar = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-slate-500 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVar(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-slate-500 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-slate-500 p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVar(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-slate-500 p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-400 rounded-2xl" />
        </motion.div>
        <motion.div
          variants={iconVar(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-slate-500 p-4"
        >
          <FaJava className="text-7xl text-blue-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};
