import { useScroll} from "framer-motion";
import {  useRef } from "react";

import ScrollProgressBar from "../../components/Speed/ScrollProgressBar";
import LataSpeed from "../../components/Speed/LataSpeed";



const scrollProgressHandler = [
  0, 0.05,    // Momento 1: 0 - 0.05
  0.05, 0.09, // Momento 2: 0.05 - 0.09
  0.09, 0.3,  // Momento 3: 0.09 - 0.3
  0.3, 0.39,  // Momento 4: 0.3 - 0.39
  0.39, 0.48, // Momento 5: 0.39 - 0.48
  0.48, 0.59, // Momento 6: 0.48 - 0.59
  0.59, 0.68, // Momento 7: 0.59 - 0.68
  0.68, 0.79, // Momento 8: 0.68 - 0.79
  0.79, 0.88, // Momento 9: 0.79 - 0.88 
  0.88, 1,    // Momento 10: 0.88 - 1
];




const Speed = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  
  

  

  
  return (
    <article className="w-full h-[1000vh]   bg-transparent" ref={scrollRef}>
      <ScrollProgressBar scrollYProgress={scrollYProgress} />
      <LataSpeed
        scrollYProgress={scrollYProgress}
        scrollProgressHandler={scrollProgressHandler}
      />
      
      
    </article>
  );
};



export default Speed;
