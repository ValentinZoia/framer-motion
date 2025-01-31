import { motion, useScroll, useTransform } from "framer-motion";

// Definimos el componente ScrollIndicator
const ScrollIndicator = () => {
  // Obtenemos el progreso del scroll de la página
  const { scrollYProgress } = useScroll();
    console.log(scrollYProgress);
  // Transformamos el progreso del scroll en un ancho de línea (0% a 100%)
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    
  
  return (
    
    <div className="h-[200vh] p-[20px]">
      {/* Barra de progreso de scroll */}
      <motion.div
        className="fixed top-0 left-0 h-[5px] bg-red-500"
        style={{
          width: lineWidth, // Ancho dinámico basado en el scroll
          transition: "width 0.1s ease", // Transición suave de la barra
        }}
      />

      {/* Contenido largo para generar scroll */}
      <div className="mt-[50px]">
        {[...Array(100)].map((_, i) => (
          <p key={i} className="mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    </div>
  );
};


export default ScrollIndicator;