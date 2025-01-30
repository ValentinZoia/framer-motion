import { motion } from "framer-motion";

export const SpringEffects = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="  grid  grid-cols-2 gap-8 ">
        {/* whileHover */}
        {/*El type spring le da como un efecto de rebote cuando hago hover*/}
        <motion.div
          className="box"
          whileHover={{
            scale: 1.2,
            rotate: 10,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          Hover Me!
        </motion.div>

        {/* whileTap */}
        <motion.div
          className="box"
          whileTap={{
            scale: 0.8,
            backgroundColor: "crimson",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          Tap Me!
        </motion.div>

        {/* whileDrag */}
        <motion.div
          className="box"
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          whileDrag={{
            scale: 1.2,
            rotate: 10,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          Drag Me!
        </motion.div>
      </div>
    </div>
  );
};
