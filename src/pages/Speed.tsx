import {
  motion,
  MotionValue,
  useScroll,
  
  useTransform,
} from "framer-motion";
import { useRef } from "react";
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
    <article className="w-full h-[900vh] bg-black" ref={scrollRef}>
        <ScrollProgressBar scrollYProgress={scrollYProgress} />
        <LataSpeed scrollYProgress={scrollYProgress} />
        <CajaDeTexto
          scrollYProgress={scrollYProgress}
          text="Lata Speed 1"
          startScrollProgress={0.25}
          endScrollProgress={0.45}
          position="right"
          endBoxPosition="1vh"
        />
        <CajaDeTexto
          scrollYProgress={scrollYProgress}
          text="Lata Speed 2"
          startScrollProgress={0.47}
          endScrollProgress={0.67}
          position="left"
          endBoxPosition="10vh"
        />
        <CajaDeTexto
          scrollYProgress={scrollYProgress}
          text="Lata Speed 3"
          startScrollProgress={0.7}
          endScrollProgress={0.9}
          position="right"
          endBoxPosition="20vh"
        />
    </article>
  );
};



const ScrollProgressBar = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  
    return (
      <div className="fixed left-8 top-0 bottom-0 w-2 my-8 bg-gray-500 z-50 rounded-lg">
        <motion.div className="w-full bg-red-700 origin-top rounded-lg" style={{ height: lineHeight, transition: "height 0.1s ease" }} />
      </div>
    )
  }
 

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
  endBoxPosition,
  position,
}: {
  scrollYProgress: MotionValue;
  title?: string;
  text?: string;
  startScrollProgress: number;
  endScrollProgress: number;
  endBoxPosition: string;
  position: "left" | "right";
}) => {
  const y = useTransform(scrollYProgress, [(startScrollProgress - 0.01), startScrollProgress,(endScrollProgress - 0.01) ,endScrollProgress,(endScrollProgress + 0.17)], ["50vh", "50vh","50vh", "25vh",endBoxPosition]);
  const opacity = useTransform(scrollYProgress, [(startScrollProgress - 0.01), startScrollProgress,(endScrollProgress - 0.01) ,endScrollProgress], [ 0,1,1,1]);
  

  const xPosition = position === "left" ? "calc(50% - 300px)" : "calc(50% + 200px)"

  return (
    <motion.div
      className="w-[250px] h-[100px] bg-transparent rounded-b-lg border-white/30 border-b-[1px] border-x-[1px] fixed flex items-center justify-center text-white text-sm"
      style={{
        y,
        opacity,
        left: xPosition,
        
      }}
    >
    {title}
      {text}
    </motion.div>
  )
};

export default Speed;
