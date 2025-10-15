import React, {  useEffect } from 'react'
import { motion,scale,useAnimate } from "framer-motion";

const SequenceAnimations = () => {

    const [scope ,animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      const sequence = [
        [scope.current, { x: 800 }, { duration: 2 }],
        [scope.current, { x: -50, scale: 1.5, rotate: 360 }, { duration: 2 }],
        [scope.current, { scale: 0.5, borderRadius: "50%" }, { duration: 2 }],
      ];
      animate(sequence);
    }
  }, [scope, animate]);

  return (
    <div className='flex mx-36 mt-24'>
    <motion.div ref={scope}
    
    style={{width:200,height:200,backgroundColor:"purple"}}>


    </motion.div>
    </div>
  )
}

export default SequenceAnimations