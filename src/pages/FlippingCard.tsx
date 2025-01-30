import { motion } from "framer-motion";
import { useState } from "react";


const variants ={
    font: { rotateY: 0.1 },
    back: { rotateY: 180 },
}

export const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center">
        <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="perspective-1000 cursor-pointer "
      
    >
      <motion.div
        variants={variants}
        initial="font"
        animate={isFlipped ? "back" : "font"}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-style-preserve-3d"
      >
        
        <div className="absolute inset-0  bg-blue-500 flex items-center justify-center text-xl font-bold rotate-y-180">
          Click Me!
        </div>
      </motion.div>
    </motion.div>
    </div>
    
  );
};
