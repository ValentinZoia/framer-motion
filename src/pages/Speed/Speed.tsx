import { useScroll } from "framer-motion";
import { useRef } from "react";

import ScrollProgressBar from "../../components/Speed/ScrollProgressBar";
import LataSpeed from "../../components/Speed/LataSpeed";
import LineRed from "../../components/Speed/LineRed";

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


const Speed = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  // const [cardData, setCardData] = useState([
  //   { position: "left", title: "Speed Unlimited 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  //   { position: "right", title: "Speed Unlimited 2", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  //   { position: "left", title: "Speed Unlimited 3", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
  // ]);
  // const [currentCardIndex, setCurrentCardIndex] = useState(0);

  

  // const cardProgressEnd = [0.40, 0.65, 0.90];

  // const currentCard = cardData[currentCardIndex];

  // const cardY = useTransform(scrollYProgress, [cardProgressStart[currentCardIndex], cardProgressEnd[currentCardIndex]], ["50vh", "-20vh"]);
  // const cardOpacity = useTransform(scrollYProgress, [cardProgressStart[currentCardIndex], cardProgressEnd[currentCardIndex]], [1, 0]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //       const progress = scrollYProgress.get();
  //       if (progress > cardProgressEnd[currentCardIndex] && currentCardIndex < cardData.length -1) {
  //           setCurrentCardIndex(currentCardIndex + 1)
  //       }
  //   }

  //   const unsubscribe = scrollYProgress.onChange(handleScroll);
  //   return unsubscribe;

  // }, [scrollYProgress, currentCardIndex, cardData.length, cardProgressEnd]);

  return (
    <article className="w-full h-[1000vh]   bg-black" ref={scrollRef}>
      <ScrollProgressBar scrollYProgress={scrollYProgress} />
      <LataSpeed
        scrollYProgress={scrollYProgress}
        scrollProgressHandler={scrollProgressHandler}
      />
      <LineRed scrollYProgress={scrollYProgress}/>

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
