import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useRef } from "react";
import LataSpeedImg from "../assets/speed_lata.png";


const firstMove = [
    [0      , 0.25   , 0.40   , 0.45], // progreso del scroll
    ["45vh" , "30vh" , "30vh" , "45vh"], // posiciones de la imagen lata speed
    [0      , 45     , 45     , 0] // rotacion de la lata
];

const secondMove =[
    [0.45   , 0.47, 0.62 , 0.67],
    ["45vh" , "30vh" , "30vh" , "45vh"],
    [0      , -45     , -45     , 0],
];

const thirdMove = [
    [0.67   , 0.70, 0.85 , 0.90],
    ["45vh" , "30vh" , "30vh" , "45vh"],
    [0      , 45     , 45     , 0],
];

const allScrollProgress  = firstMove[0] 
 .concat(secondMove[0])
 .concat(thirdMove[0]) as number[];

 const allPositions = firstMove[1]
 .concat(secondMove[1])
 .concat(thirdMove[1]) as string[];

const allRotations = firstMove[2]
 .concat(secondMove[2])
 .concat(thirdMove[2]) as number[];



const Speed = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //     console.log("Scroll: ", latest)
  //   })

  return (
    <article className="w-full h-[800vh] bg-gray-800" ref={scrollRef}>
      
        <LataSpeed scrollYProgress={scrollYProgress} />
        <CajaDeTexto scrollYProgress={scrollYProgress} text="Lata Speed" startScrollProgress={0.25} endScrollProgress={0.45} />
        <CajaDeTexto scrollYProgress={scrollYProgress} text="Lata Speed" startScrollProgress={0.47} endScrollProgress={0.67} />
        <CajaDeTexto scrollYProgress={scrollYProgress} text="Lata Speed" startScrollProgress={0.70} endScrollProgress={0.90} />
      
    </article>
  );
};





 

const LataSpeed = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const y = useTransform(scrollYProgress, allScrollProgress, allPositions);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const rotate = useTransform(
    scrollYProgress,
    allScrollProgress,
    allRotations
  );

  return (
    <div className="w-[60%] mx-auto fixed inset-0 ">
      <div className="w-full flex justify-center items-center">
        <motion.img
        style={{ y, scale, rotate }}
        src={LataSpeedImg}
        alt="Lata Speed"
        
      ></motion.img>
      </div>
      
    </div>
  );
};

const CajaDeTexto = ({
  scrollYProgress,
  title,
  text,
  startScrollProgress,
  endScrollProgress,
}: {
  scrollYProgress: MotionValue;
  title?: string;
  text?: string;
  startScrollProgress: number;
  endScrollProgress: number;
}) => {
  const y = useTransform(scrollYProgress, [startScrollProgress, endScrollProgress], ["50vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [(startScrollProgress - 0.01), startScrollProgress,(endScrollProgress - 0.01) ,endScrollProgress], [ 0,1,1,0]);
  

  return (
    <div >
      <motion.div
        className="w-[100px] h-[100px] bg-yellow-700 fixed inset-0 mx-auto "
        style={{ y, opacity, }}
      >
        {title}
      </motion.div>
    </div>
  );
};

export default Speed;
