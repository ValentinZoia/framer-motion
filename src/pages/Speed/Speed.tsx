import { useScroll} from "framer-motion";
import {  useRef } from "react";

import ScrollProgressBar from "../../components/Speed/ScrollProgressBar";
import LataSpeed from "../../components/Speed/LataSpeed";
import Card from "../../components/Speed/Card";


const scrollProgressHandler = [
  0, 0.05,    // Momento 1: 0 - 0.05
  0.05, 0.09, // Momento 2: 0.05 - 0.09
  0.09, 0.3,  // Momento 3: 0.09 - 0.3
  0.3, 0.39,  // Momento 4: 0.3 - 0.39
  0.39, 0.48, // Momento 5: 0.39 - 0.48
  0.48, 0.59, // Momento 6: 0.48 - 0.59
  0.59, 0.68, // Momento 7: 0.59 - 0.68
  0.68, 0.79, // Momento 8: 0.68 - 0.79
  0.79, 0.88, // Momento 9: 0.79 - 0.88 
  0.88, 1,    // Momento 10: 0.88 - 1
];

const speedStillMoments = [
  0, 0.09 , // La lata no esta quieta y tiene scale de 0.8
  0.09, 0.3, //La lata esta quieta y tiene scale de 2
  0.3,0.59, // La lata no esta quieta y tiene scale de 0.8
  0.59,0.68,// La lata esta quieta y tiene scale de 2
  0.68,1,// La lata no esta quieta y tiene scale de 0.8
  1 // La lata esta quieta y tiene scale de 2
];


const Speed = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const cardData =[
    { position: "left", title: "Speed Unlimited 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { position: "right", title: "Speed Unlimited 2", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { position: "left", title: "Speed Unlimited 3", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  ];
  

  

  
  return (
    <article className="w-full h-[1000vh]   bg-black" ref={scrollRef}>
      <ScrollProgressBar scrollYProgress={scrollYProgress} />
      <LataSpeed
        scrollYProgress={scrollYProgress}
        scrollProgressHandler={scrollProgressHandler}
      />
      
      {
        cardData.map((card, index) => (
          <Card
            id={index}
            key={index}
            title={card.title}
            text={card.text}
            // position={card.position as "left" | "right"}
            // cardY={cardY}
            // cardOpacity={cardOpacity}
            speedStillMoments={speedStillMoments}
            scrollYProgress={scrollYProgress}
          />
        ))
      }
      {/* <Card
        title={currentCard.title}
        text={currentCard.text}
        position={currentCard.position as "left" | "right"}
        cardY={cardY}
        cardOpacity={cardOpacity}
      /> */}
    </article>
  );
};



export default Speed;
