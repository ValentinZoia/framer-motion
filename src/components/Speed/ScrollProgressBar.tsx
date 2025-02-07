import { MotionValue, useTransform,motion } from "framer-motion"

const ScrollProgressBar = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  
    return (
      <div className="fixed left-8 top-0 bottom-0 w-2 my-8 bg-gray-500 z-50 rounded-lg">
        <motion.div className="w-full bg-red-700 origin-top rounded-lg" style={{ height: lineHeight, transition: "height 0.1s ease" }} />
      </div>
    )
  }

  export default ScrollProgressBar