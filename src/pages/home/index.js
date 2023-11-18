import React from "react";
import { motion } from "framer-motion";

/* import css */
import "../../assets/scss/home.scss";

const Home = () => {
  const line1 = "Hi, I am Maitri. A Front End Developer Based In London, UK";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
    },
  };

  return (
    <>
      <div className="home-section mx-4 d-flex align-items-center justify-content-center">
        <div className="content-wrapper text-white d-flex align-items-center justify-content-center flex-wrap">
          <motion.p
            className="text text-center"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {line1?.split("")?.map((char, index) => {
              return (
                <motion.span
                  className="fs-38 fw-medium text-uppercase designation"
                  variants={letter}
                  key={char + "-" + index}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.p>
          <motion.button
            className="primary-btn fs-30 fw-medium btn"
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 3,
            }}
          >
            CONTACT ME
          </motion.button>
        </div>
        <div className="shape-1"></div>
        <div className="shape-2"></div>
      </div>
    </>
  );
};

export default Home;
