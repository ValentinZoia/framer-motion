import { motion } from "framer-motion";


const RevealLinks = () => {
  return (
    <section className="w-full grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black">
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Linkedin</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
    </section>
  );
};

const variants_1 = {
  initial: {
    y: 0,
  },
  hovered: {
    y: "-100%",
    
  },
};

const variants_2 = {
    initial: {
      y: "100%",
    },
    hovered: {
      y: 0,
      
    },
  };

  const DURATION = 0.25;
  const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap
        text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl "
    >
      <div>
        {children.split("").map((l,i)=>{
            return(
                <motion.span
                variants={variants_1}
                transition={{
                    delay: i * STAGGER,
                    duration: DURATION,
                    ease: "easeInOut",
                }}
                key={i}
                className="inline-block"
                >
                    {l}
                </motion.span>
            )
        })}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l,i)=>{
            return(
                <motion.span
                variants={variants_2}
                key={i}
                className="inline-block"
                transition={{
                    delay: i * STAGGER,
                    duration: DURATION,
                    ease: "easeInOut",
                }}
                >
                    {l}
                </motion.span>
            )
        })}
      </div>
    </motion.a>
  );
};

export default RevealLinks;
