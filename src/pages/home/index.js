import React from "react";
import { motion } from "framer-motion";

/* import css */
import "../../assets/scss/home.scss";

/* import images */
import portraitImg from "../../assets/images/portrait.jpg";

const Home = () => {
  const line1 = "Frontend Developer";

  const sentence = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 3
      },
    }
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
    <div className="home-page">
      <div className="container h-full">
        <div className="row align-items-center h-full">
          <div className="col-md-6 d-flex aling-items-center">
            <div className="about-me">
              <motion.span
                className="d-inline-block mb-4 rounded-md fs-16 fw-normal its-me-label ms-4"
                initial={{ scale: "0" }}
                animate={{ scale: "100%" }}
                transition={{
                  duration: 0.4,
                  delay: 1,
                }}
              >
                It's me
              </motion.span>
              <motion.p
                className="fs-70 fw-bold name mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 2.4
                }}
              >
                Maitri H. Champaneri
              </motion.p>
              <motion.p
                className="fs-22 fw-medium text-uppercase designation"
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                {line1?.split("")?.map((char, index) => {
                  return (
                    <motion.span
                      className="fs-22 fw-medium text-uppercase designation"
                      variants={letter}
                      key={char + "-" + index}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <motion.div
              className="portrait-wrap"
              initial={{ translateX: "160%" }}
              animate={{ translateX: "0%" }}
              transition={{
                duration: 0.8,
                delay: 1.4,
              }}
            >
              <img src={portraitImg} alt="portrait-img" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
