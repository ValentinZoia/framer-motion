import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const ScrollAnimation = () => {
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    //si vemos el console.log del scroll,
    //cuando  llega a 300 deberia tener una scala de 1.5 
    // y haber desaparecido por completo
  });


              //  en este espacio de scroll [0, 300]  - va a crecer de 1 a 1.5
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
              //     en este espacio de scroll  - va a desaparecer
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="bg-blue-500 w-32 h-32 rounded-lg shadow-lg"
        style={{ scale, opacity }}
      ></motion.div>
      <div className="h-[350vh] w-full"></div>
    </div>
  );
};

export default ScrollAnimation;