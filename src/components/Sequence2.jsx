import { motion, useAnimate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const Sequence2 = () => {
  const [scope, animate] = useAnimate();
  const progress = useMotionValue(100);

  const sequence = [
    ["#box1", { x: 200 }, { duration: 2 }],
    ["#box2", { x: -250, opacity: 0 }, { duration: 1 }],
    [progress, 400, { duration: 1.5 }],
  ];

  useEffect(() => {
    animate(sequence);
  }, []);

  return (
    <div className="mt-24 mx-10 flex items-center justify-center">

    
    <div ref={scope}
    >
      <motion.div
        id="box1"
        style={{ width: progress, height: 100, backgroundColor: "crimson" }}
      ></motion.div>
      <motion.div
        id="box2"
        style={{ width: 100, height: 100, backgroundColor: "pink" }}
      ></motion.div>
    </div>
    </div>
  );
};

export default Sequence2;