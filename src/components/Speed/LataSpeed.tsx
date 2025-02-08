import { useTransform, motion, MotionValue } from "framer-motion";
import LataSpeedImg from "../../assets/speed_lata.png";
import LineRed from "./LineRed";

const LataSpeed = ({ scrollYProgress, scrollProgressHandler }: { scrollYProgress: MotionValue; scrollProgressHandler: number[] }) => {


  const speedTransitionX = [
    "0%", "0%", // Momento 1: 0 - 0.05 (Lata quieta)
    "0%", "100%", // Momento 2: 0.05 - 0.09 (Lata se mueve a la derecha)
    "100%", "100%", // Momento 3: 0.09 - 0.3 (Lata quieta)
    "100%", "0%", // Momento 4: 0.3 - 0.39 (Lata se mueve a la izquierda)
    "0%", "0%", // Momento 5: 0.39 - 0.48 (Lata quieta)
    "0%", "-100%", // Momento 6: 0.48 - 0.59 (Lata se mueve a la izquierda)
    "-100%", "-100%", // Momento 7: 0.59 - 0.68 (Lata quieta)
    "-100%", "0%", // Momento 8: 0.68 - 0.79 (Lata se mueve a la derecha)
    "0%", "0%", // Momento 9: 0.79 - 0.88 (Lata quieta)
    "0%", "100%" // Momento 10: 0.88 - 1 (Lata se mueve a la derecha)
  ];
  
  const speedTransitionY = [
    "0vh", "5vh", // Momento 1: 0 - 0.05 (Lata baja )
    "5vh", "10vh", // Momento 2: 0.05 - 0.09 (Lata baja )
    "10vh", "10vh", // Momento 3: 0.09 - 0.3 (Lata se mantiene en esta posición)
    "10vh", "15vh", // Momento 4: 0.3 - 0.39 (Lata baja )
    "15vh", "20vh", // Momento 5: 0.39 - 0.48 (Lata baja)
    "20vh", "25vh", // Momento 6: 0.48 - 0.59 (Lata baja )
    "25vh", "25vh", // Momento 7: 0.59 - 0.68 (Lata se mantiene en esta posición)
    "25vh", "30vh", // Momento 8: 0.68 - 0.79 (Lata baja )
    "30vh", "35vh", // Momento 9: 0.79 - 0.88 (Lata baja )
    "35vh", "40vh" // Momento 10: 0.88 - 1 (Lata baja )
  ];
  
  const speedScale = [
    0.8, 0.8,  // Momento 1: 0 - 0.05 (Escala inicial)
    0.8, 2,      // Momento 2: 0.05 - 0.09 (Aumenta la escala)
    2, 2,  // Momento 3: 0.09 - 0.3 (Escala se mantiene)
    2, 0.8,      // Momento 4: 0.3 - 0.39 (Disminuye la escala)
    0.8, 0.8,  // Momento 5: 0.39 - 0.48 (Escala vuelve al valor inicial y se mantiene)
    0.8, 2,      // Momento 6: 0.48 - 0.59 (Aumenta la escala)
    2, 2,  // Momento 7: 0.59 - 0.68 (Escala se mantiene)
    2, 0.8,      // Momento 8: 0.68 - 0.79 (Disminuye la escala)
    0.8, 0.8,  // Momento 9: 0.79 - 0.88 (Escala vuelve al valor inicial y se mantiene)
    0.8, 2       // Momento 10: 0.88 - 1 (Aumenta la escala)
  ];
  
  const speedOpacity = [
    0.5, 0.5,   // Momento 1: 0 - 0.05 (scale: 0.8, opacity: 0.5)
    0.5, 1,       // Momento 2: 0.05 - 0.09 (scale: 2, opacity: 1)
    1, 1,       // Momento 3: 0.09 - 0.3 (scale: 2, opacity: 1)
    1, 0.5,     // Momento 4: 0.3 - 0.39 (scale: 0.8, opacity: 0.5)
    0.5, 0.5,   // Momento 5: 0.39 - 0.48 (scale: 0.8, opacity: 0.5)
    0.5, 1,       // Momento 6: 0.48 - 0.59 (scale: 2, opacity: 1)
    1, 1,       // Momento 7: 0.59 - 0.68 (scale: 2, opacity: 1)
    1, 0.5,     // Momento 8: 0.68 - 0.79 (scale: 0.8, opacity: 0.5)
    0.5, 0.5,   // Momento 9: 0.79 - 0.88 (scale: 0.8, opacity: 0.5)
    0.5, 1        // Momento 10: 0.88 - 1 (scale: 2, opacity: 1)
  ];
  
  const speedRotation = [
    0, 0, // Momento 1: 0 - 0.05 (Sin rotación)
    -20, 0, // Momento 2: 0.05 - 0.09 (Rotación a la izquierda)
    0, 0, // Momento 3: 0.09 - 0.3 (Sin rotación)
    20, 0, // Momento 4: 0.3 - 0.39 (Rotación a la derecha)
    0, 0, // Momento 5: 0.39 - 0.48 (Sin rotación)
    20, 0, // Momento 6: 0.48 - 0.59 (Rotación a la derecha)
    0, 0, // Momento 7: 0.59 - 0.68 (Sin rotación)
    -20, 0, // Momento 8: 0.68 - 0.79 (Rotación a la izquierda)
    0, 0, // Momento 9: 0.79 - 0.88 (Sin rotación)
    -20, 0  // Momento 10: 0.88 - 1 (Rotación a la izquierda)
  ];
  
  
    
  
  const speedStillMoments = [
    0, 0.09 , // La lata no esta quieta y tiene scale de 0.8
    0.09, 0.3, //La lata esta quieta y tiene scale de 2
    0.3,0.59, // La lata no esta quieta y tiene scale de 0.8
    0.59,0.68,// La lata esta quieta y tiene scale de 2
    0.68,1,// La lata no esta quieta y tiene scale de 0.8
    1 // La lata esta quieta y tiene scale de 2
  ];
  
  
  
    const y = useTransform(scrollYProgress, scrollProgressHandler, speedTransitionY); 
    const scale = useTransform(scrollYProgress, scrollProgressHandler, speedScale);
    const opacity = useTransform(scrollYProgress, scrollProgressHandler, speedOpacity);
    const lataX = useTransform(scrollYProgress, scrollProgressHandler, speedTransitionX); 
    const rotate = useTransform(scrollYProgress, scrollProgressHandler, speedRotation);
    
  
    return (
      <div className="w-[30%] md:w-[25%] lg:w-[20%] mx-auto fixed inset-0 ">
         <div className="w-full flex justify-center items-center">
            
            <motion.div
            style={{ y, scale,  x: lataX, opacity, rotate }}
            className="flex gap-4 items-center justify-center"
            >
              <LineRed scrollYProgress={scrollYProgress} speedStillMoments={speedStillMoments} />
                <img
                src={LataSpeedImg}
                alt="Lata Speed"
                className="w-full"
                />
                
                

            </motion.div>
            
            {/* <motion.img
              style={{ y, scale,  x: lataX, opacity, rotate }}
              src={LataSpeedImg}
              alt="Lata Speed"
            /> */}
        </div>
        
      </div>
    );
  };

  export default LataSpeed