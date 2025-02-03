import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./Card";



const cards = [
    {
      url: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=3867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1482784160316-6eb046863ece?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=3841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const ScrollCarousel = () => {
  const targetRef = useRef(null);

  {/*
    se utiliza el hook useScroll de framer-motion para obtener el
    valor de scrollYProgress, que representa el progreso del 
    desplazamiento vertical como un valor entre 0 y 1. 
    Este valor se actualiza automáticamente a medida que el usuario
    se desplaza por la página.
    */}
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  {/*
    utiliza el hook useTransform para transformar el valor de scrollYProgress
    en un valor de desplazamiento horizontal (x). En este caso, 
    cuando scrollYProgress es 0, x es "1%", y cuando scrollYProgress es 1,
    x es "-95%". Esto significa que el contenido del carrusel se desplazará
    horizontalmente de "1%" a "-95%" a medida que el usuario se desplaza
    verticalmente por la página.
    */}
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => (
            <Card card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollCarousel;