import { useMotionValue, motion, useMotionValueEvent } from "framer-motion";


const UseMotionValueExample1 = () => {
    const x = useMotionValue(0);

    useMotionValueEvent(x, "animationStart", () => {
      console.log("animation started on x");
    });
  
    useMotionValueEvent(x, "change", (latest) => {
      console.log("x changed to", latest);
    });
  
    return (
      
      <div className='w-full h-screen bg-gray-900 flex items-center justify-center'>
       <motion.div
        className="box"
        drag
        dragConstraints={{ left: 0, right: 200 }}
        style={{ x }}
      />

    </div>
    )
    
}

export default UseMotionValueExample1