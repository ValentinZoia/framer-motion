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
  const getYTransformConfig = (cardId: number) => {
    const baseTransform = ["0vh", "0vh", "50vh", "50vh", "-50vh", "-50vh", "0vh", "0vh"];
    
    switch (cardId) {
      case 0:
        return ["10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "10vh", "0vh"];
      case 1:
        return ["25vh", "25vh", "25vh", "25vh", "25vh", "25vh", "25vh", "25vh", "25vh", "25vh", "25vh"];
      case 2:
        return  ["40vh", "40vh", "40vh", "40vh", "40vh", "40vh", "40vh", "40vh", "40vh", "40vh", "40vh"];
      default:
        return baseTransform;
    }
  };

  const getXTransformConfig = (cardId:number)=>{
    switch (cardId) {
      case 0:
        return ["0vw", "0vw", "10vw", "10vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw"];
      case 1:
        return ["0vw", "0vw", "0vw", "0vw", "0vw", "100vw", "35vw", "35vw", "100vw", "0vw", "0vw"];
      case 2:
        return ["0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "10vw"];
      default:
        return ["0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "0vw", "10vw"];
    }
  }

  // Crear las transformaciones
  const opacity = useTransform(
    scrollYProgress,
    speedStillMoments,
    getOpacityConfig(id)
  );

  const y = useTransform(
    scrollYProgress,
    speedStillMoments,
    getYTransformConfig(id)
  );

  const x = useTransform(
    scrollYProgress,
    speedStillMoments,
    getXTransformConfig(id)
  )

  return (
    <motion.div
      className="w-[300px] sm:w-[400px] md:w-[450px] md:h-[200px] lg:w-[600px] xl:w-[700px] 2xl:w-[900px]  lg:h-[350px] rounded-lg bg-transparent text-white p-6 fixed inset-0"
      style={{
        opacity,
        y,
        x,
        
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <h2 className="text-md sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 text-slate-600">{title}</h2>
      <p className="text-slate-200 text-md sm:text-xl lg:text-2xl">{text}</p>
      
    </motion.div>
  );
};

export default Card;