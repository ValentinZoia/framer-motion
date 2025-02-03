import { motion } from 'framer-motion';



const title = "Hello, World!";
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}


const TextReveal = () => {
  return (
    <motion.h1
    className='text-8xl'
        initial="hidden"
        whileInView={"visible"}
        transition={{straggerChildren:0.2}}
    >
        <TextRevealEffect text={title}/>
    </motion.h1>
  )
}


const TextRevealEffect = ({text}:{text:string}) => {
return(
    <>
    
 {text.split("").map((l,i)=>{
            return(
                <motion.span
                variants={variants}
                key={i}
                transition={{duration:0.2,delay:i*0.1}}
                
                >
                    {l}
                </motion.span>
            )
        })}
    
   
    </>
)
}


export default TextReveal