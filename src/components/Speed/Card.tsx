import { motion, MotionValue } from "framer-motion";

const Card = ({ title, text, position, cardY, cardOpacity }: { title: string; text: string; position: "left" | "right"; cardY: MotionValue<string>, cardOpacity: MotionValue<number> }) => {
    const xPosition = position === "left" ? "calc(50% - 350px)" : "calc(50% + 50px)"; // Adjust positions as needed
  
    return (
      <motion.div
        className="md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[250px] rounded-lg bg-slate-200/60 p-6 fixed"
        style={{
          y: cardY,
          opacity: cardOpacity,
          left: xPosition,
          transition: "opacity 0.5s ease, transform 0.5s ease", // Smooth transitions
        }}
      >
        <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-white">{text}</p>
      </motion.div>
    );
  };

  export default Card