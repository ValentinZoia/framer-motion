import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChangeEvent } from "react";

const ColorChanger = () => {

  //hue es un valor animado de Framer Motion, inicializado en 0 (rojo en HSL).
  const hue = useMotionValue(0);
  
  //useTransform() convierte el hue en un color en formato HSL.
  //100% representa la saturación máxima y 50% la luminosidad media.
  const backgroundColor = useTransform(hue, (h) => `hsl(${h}, 100%, 50%)`);
 

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
   //parseFloat(e.target.value): Convierte el valor del input a un número decimal.
   //hue.set(...): Actualiza el valor de hue, lo que a su vez cambia el color de fondo.
    hue.set(parseFloat(e.target.value));
    
  };

  return (
    <div>
      <motion.div
        className="color-box"
        style={{ backgroundColor, width: 200, height: 200, borderRadius: 16 }}
      />
      <div className="mt-4">
        <input
          type="range"
          min={0}
          max={360}
          step={1}//Incremento de 1 grados
          defaultValue={0}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default ColorChanger;