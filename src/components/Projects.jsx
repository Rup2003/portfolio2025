import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className=" pb-4">
      <motion.h2 
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 1.5 }}
      className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent text-4xl">
        Projects
      </motion.h2>
      <motion.div 
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: -100 }}
       transition={{ duration: 1.5 }}
      className="mt-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-800 bg-clip-text text-transparent text-4xl">
        Comming soon....
      </motion.div>
    </div>
  );
};
