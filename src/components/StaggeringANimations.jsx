import React from 'react'
import { motion } from "framer-motion";
import { emoji } from "../emoji";  


const varients = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: 0.2,   //time gap between each child animation
      when:"beforeChildren"   //to start parent animation before child animation
    },
  },
}

const childVarients = {
  hidden:{opacity:0 ,y:100},
  visible:{ opacity:1 ,transition:{duration:0.5},y:0}
}


const StaggeringANimations = () => {
  return (
    <div className="flex items-center justify-center mt-16 ">
        <motion.div
          variants={varients}
          initial="hidden"
          animate="visible"
          className="flex bg-gray-500 rounded-4xl h-[350px] w-[1000px] items-center justify-center"
        >
          {emoji.map((emo) => (
            <motion.div
              key={emo.id}
              variants={childVarients}
              className="text-9xl"
            >
              {emo.symbol}
            </motion.div>
          ))}
        </motion.div>
        </div>
  )
}

export default StaggeringANimations