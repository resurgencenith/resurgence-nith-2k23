import React, { useEffect } from "react";
import "./LoadingScreen.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function LoadingScreen() {
    const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
    }, [controls, inView]);
  return (
    <motion.div
      id="splash_screen"
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        show: {
          y: '-100vh',
          opacity: 0.7,
          transition: {
            ease:"linear",
            duration: 0.7,
            delay: 1.5,
          },
        },
        hidden: { y: 0, opacity: 1 },
      }}
    >
      <div className="loader">
        <div className="circles">
          <span className="one" />
          <span className="two" />
          <span className="three" />
        </div>
        <div className="pacman">
          <span className="top" />
          <span className="bottom" />
          <span className="left" />
          <div className="eye" />
        </div>
      </div>
    </motion.div>
  );
}
