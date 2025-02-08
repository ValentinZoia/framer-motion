import { motion, MotionValue, useTransform } from 'framer-motion';


const LineRed = ({scrollYProgress}:{scrollYProgress:MotionValue<number>}) => {
    const speedStillMoments = [
        0, 0.09 , // La lata no esta quieta y tiene scale de 0.8
        0.09, 0.3, //La lata esta quieta y tiene scale de 2
        0.3,0.59, // La lata no esta quieta y tiene scale de 0.8
        0.59,0.68,// La lata esta quieta y tiene scale de 2
        0.68,1,// La lata no esta quieta y tiene scale de 0.8
        1 // La lata esta quieta y tiene scale de 2
      ];
    
      //vamos a mostrar la linea solo cuando la lata de speed este quieta
      const opacityLine = [
        0,0,
        1,1,
        0,0,
        1,1,
        0,0,
        1
      ]
    
    
      const opacity = useTransform(scrollYProgress, speedStillMoments, opacityLine);
      
      
      return(
        <motion.div
            className="w-[4px] h-[100px] fixed inset-0 mx-auto bg-red-600 "
            style={{ opacity }}
        />
    
    
      );
}

export default LineRed