import { motion, MotionValue, useTransform } from "framer-motion";

const Card = ({
  id,
  title,
  text,
  speedStillMoments,
  scrollYProgress
}: {
  id: number;
  title: string;
  text: string;
  speedStillMoments: number[];
  scrollYProgress: MotionValue<number>;
}) => {
  // Define las posiciones basadas en el ID
  const position = id % 2 === 0 ? "left" : "right";
  const xPosition = position === "left" ? "calc(50% - 350px)" : "calc(50% + 50px)";

  // Configuración de opacidades según el ID
  const getOpacityConfig = (cardId: number) => {
    switch (cardId) {
      case 0:
        return [
          0, 0,
          1, 1,
          0, 0,
          0, 0,
          0, 0,
          0
        ];
      case 1:
        return [
          0, 0,
          0, 0,
          0, 0,
          1, 1,
          0, 0,
          0
        ];
      case 2:
        return [
          0, 0,
          0, 0,
          0, 0,
          0, 0,
          0, 0,
          1
        ];
      default:
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
  };

  // Configuración de transformaciones Y según el ID
  // const getYTransformConfig = (cardId: number) => {
  //   const baseTransform = ["0%", "0%", "50%", "50%", "-50%", "-50%", "0%", "0%"];
    
  //   switch (cardId) {
  //     case 1:
  //       return ["0%", "0%", "50%", "50%", "0%", "0%", "0%", "0%", "0%", "0%", "0%"];
  //     case 2:
  //       return ["0%", "0%", "0%", "0%", "0%", "0%", "50%", "50%", "0%", "0%", "0%"];
  //     case 3:
  //       return ["0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "0%", "50%"];
  //     default:
  //       return baseTransform;
  //   }
  // };

  // Crear las transformaciones
  const opacity = useTransform(
    scrollYProgress,
    speedStillMoments,
    getOpacityConfig(id)
  );

  // const y = useTransform(
  //   scrollYProgress,
  //   speedStillMoments,
  //   getYTransformConfig(id)
  // );

  return (
    <motion.div
      className="md:w-[350px] md:h-[200px] lg:w-[400px] lg:h-[250px] rounded-lg bg-slate-200/60 p-6 fixed"
      style={{
        opacity,
        // y,
        left: xPosition,
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <h2 className="text-xl font-bold mb-2 text-slate-800">{title}</h2>
      <p className="text-slate-700">{text}</p>
      <div className="absolute bottom-4 right-4 text-sm text-slate-500">
        {position === "left" ? "←" : "→"} Card {id}
      </div>
    </motion.div>
  );
};

export default Card;