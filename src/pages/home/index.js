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
        delayChildren: 3,
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
      <div className="home-section">
        <div className="container-lg h-100">
          <div className="row align-items-center align-content-center h-100">
            <div className="col-md-6 d-flex aling-items-center custom-md-order-2">
              <div className="about-me">
                <motion.span
                  className="d-inline-block mb-xxl-4 mb-3 rounded-3 fs-16 fw-normal its-me-label ms-4"
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
                  className="fs-70 fw-bold name mb-xxl-3 mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 2.4,
                  }}
                >
                  Maitri <span className="d-block">Champaneri</span>
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
            <div className="col-md-6 d-flex align-items-center justify-content-center mt-md-0 mt-3">
              <motion.div
                className="portrait-wrap"
                initial={{ translateX: "160%" }}
                animate={{ translateX: "0%" }}
                transition={{
                  duration: 0.8,
                  delay: 1.4,
                }}
              >
                <img
                  src={portraitImg}
                  alt="portrait-img"
                  className="w-100 h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <i className="down-btn"></i>
      </div>
    </>
  );
};

export default Home;
