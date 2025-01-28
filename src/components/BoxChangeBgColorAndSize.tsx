import { motion } from 'framer-motion'


export default function BoxChangeBgColorAndSize() {
  return (
    <motion.div
    className="size-32 rounded-md bg-white flex items-center justify-center text-white font-bold text-2xl"
    initial={{
      scale: 1,
    }}
    animate={{
      scale: [1, 1, 2, 2, 1,1,2,2,1,1],
      
      backgroundColor: ["#f00","#f00", "#ff0","#ff0", "#0f0","#0f0", "#00f","#00f", "#000","#000"],
    }}
    transition={{ duration: 10, repeat: Infinity }}
  >
    Hello World
  </motion.div>
  )
}
