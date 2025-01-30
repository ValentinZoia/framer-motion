import { motion } from "framer-motion";

const DraggableComponent = () => {
  

  return (
    
      <motion.div
        drag='x'
        dragConstraints={{
          top: -5,
          left: -5,
          right: 5,
          bottom: 5,
        }}
        
        className="w-24 h-24 z-10 text-center bg-red-500 rounded-md cursor-pointer shadow-md flex items-center justify-center"
      >
        Drag Me
      </motion.div>
    
  );
};

export default DraggableComponent;
