// import { motion } from "framer-motion";
import StaggeringANimations from "./components/StaggeringANimations";
import SequenceAnimations from "./components/SequenceAnimations";
import Sequence2 from "./components/Sequence2";
import { Routes,Route } from "react-router-dom";
import ScrollAnimation from "./components/ScrollAnimation";
import { AnimatedTestimonialsDemo } from "./components/AnimatedTestimonialsDemo";




const App = () => {
 
  return (
    <div className="text-white">
      <div>
      <h1 className="text-4xl font-bold text-center mt-10">Framer Motion Animations</h1>
      <div className="text-center mt-5 text-xl underline underline-offset-4">
        <p >Click on below links to see different animations</p>
        <a className="text-blue-400 mr-3 mt-3" href="/scroll">Scroll Animation</a>
        <a className="text-blue-400 mr-3 mt-3" href="/StaggeringANimations">Staggering Animations</a>
        <a className="text-blue-400 mr-3 mt-3" href="/SequenceAnimations">Sequence Animations</a>
        <a className="text-blue-400 mr-3 mt-3" href="/Sequence2">Sequence 2</a>
        <a className="text-blue-400 mr-3 mt-3" href="/AnimatedTestimonialsDemo">Animated Testimonials</a>
      </div>
      </div>

      <Routes>
        <Route path={"/scroll"} element={<ScrollAnimation />} />
        <Route path={"/StaggeringANimations"} element={<StaggeringANimations />} />
        <Route path={"/SequenceAnimations"} element={<SequenceAnimations />} />
        <Route path={"/Sequence2"} element={<Sequence2 />} />
        <Route path={"/AnimatedTestimonialsDemo"} element={<AnimatedTestimonialsDemo />} />
      </Routes>
      {/* <motion.div
        drag
        whileDrag={{ scale: 2, backgroundColor: "blue" }}   //while dragging
        dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}   //limit the drag area
        dragDirectionLock="true"                           //lock the direction of drag and not move in diagonal only horizontal or vertical
        animate={{
          rotate: [0, 360, 0, -360, 0],
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
        }}
        transition={{
          duration: 4,
          delay: 1,
          repeat: 3,
          repeatDelay: 0.5,
          ease: "anticipate",
        }}
        whileHover={{
          backgroundColor: "green",
        }}
        whileTap={{ scale: 1.5 }} //onclick
        className="h-[200px] w-[200px] border bg-red-500"
      ></motion.div> */}
      

     


    

  

     
      </div>
   
  );
};

export default App;
