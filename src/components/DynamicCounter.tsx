import { motion } from 'framer-motion';
import  { useState } from 'react'

const variants={
    even:{
      backgroundColor: "#ff0000",
      scale: 0.8,
      color:"000",
      transition: {
        duration:2
      }
    },
    odd: {
      backgroundColor: "#003333",
      scale: 1,
      color:"fff",
      transition: {
        duration:1
      }
  
    }
  }
export default function DynamicCounter() {
    const [count, setCount] = useState(0);
    return (
     <div className="flex flex-col justify-center items-center gap-4">
      <motion.div className="w-24 h-24 text-center text-white " initial="odd" animate={count % 2 === 0 ? "even" : "odd"} variants={variants}>
        {count}
      </motion.div>
      <button className="px-4 py-2 bg-white rounded-md font-bold" onClick={() => setCount((c) => c + 1)}>
          Click
        </button>

        <button className="px-4 py-2 bg-white rounded-md font-bold" onClick={() => setCount(0)}>
          RESET
        </button>
      </div> 
  )
}
