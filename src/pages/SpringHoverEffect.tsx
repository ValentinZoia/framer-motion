import {motion} from "framer-motion";

export const SpringHoverEffect = () => {
  return (
    <div>
        {/* whileHover */}
        {/*El type spring le da como un efecto de rebote cuando hago hover*/ }
        <motion.div 
            className="box"
            whileHover={{
                scale:1.2,
                rotate:10,
            }}
            transition={{
                type:"spring",
                stiffness:300
            }}
        >
            Hover Me!
        </motion.div>

    </div>
  )
}
