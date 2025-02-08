import { motion, useTransform, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

const LineRed = ({
  scrollYProgress,
  speedStillMoments
}: {
  scrollYProgress: MotionValue<number>;
  speedStillMoments: number[];
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Función para verificar el tamaño de la pantalla
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // 768px es el breakpoint md de Tailwind
    };

    // Verificar tamaño inicial
    checkScreenSize();

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const opacityLine = [
    0, 0,
    1, 1,
    0, 0,
    1, 1,
    0, 0,
    1
  ];

  const LineTransitionXsm = [
    "0%", "0%",
    "-1200%", "-1200%",
    "0%", "0%",
    "1200%", "1200%",
    "0%", "0%",
    "-1200%"
  ];

  const LineTransitionXmd = [
    "0%", "0%",
    "-2500%", "-2500%",
    "0%", "0%",
    "2500%", "2500%",
    "0%", "0%",
    "-2500%"
  ];

  const opacity = useTransform(scrollYProgress, speedStillMoments, opacityLine);
  const x = useTransform(
    scrollYProgress, 
    speedStillMoments, 
    isLargeScreen ? LineTransitionXmd : LineTransitionXsm
  );

  return (
    <motion.div
      className="w-[2px] h-[50%]  fixed bg-red-700 rounded-lg"
      style={{ 
        opacity,
        x
      }}
    />
  );
};

export default LineRed;