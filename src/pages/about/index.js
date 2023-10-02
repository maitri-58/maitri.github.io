import React from "react";
import { motion } from "framer-motion";

/* import css */
import "../../assets/scss/about.scss";

/* import images */
import portraitImg from "../../assets/images/portrait.jpeg";

const About = () => {
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
      <div className="about-section d-flex align-items-center justify-content-center h-100 py-4">
        <div className="container-lg h-100">
          <div className="row align-items-center align-content-center h-100">
            <div className="col-md-6 d-flex aling-items-center custom-md-order-2">
              <motion.div
                className="portrait-wrap bg-gray-dark"
                initial={{ translateX: "-40%" }}
                whileInView={{ translateX: "0%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2
                }}
              >
                <img
                  src={portraitImg}
                  alt="portrait-img"
                  className="w-100 h-auto"
                />
              </motion.div>
            </div>
            <div className="col-md-6 d-flex mt-md-0 mt-3 flex-wrap flex-column">
              <motion.h2
                className="fs-22 mb-md-5 pb-md-5 mb-3 pb-3 section-title-wrap"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                // animate={{ opacity: "1" }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
              >
                <span className="d-inline-block position-relative section-title fw-bold">
                  About Me
                </span>
              </motion.h2>
              <motion.p
                className="about fs-18 font-secondary"
                initial={{ opacity: 0, y: "10px" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // animate={{ opacity: "1" }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
              >
                Hey there! 👋. I'm Maitri, a software engineer based in London, UK, that
                loves to code and build products with a delightful user
                experience. Currently working at{" "}
                <a
                  href="https://viitorcloud.com/"
                  target="_blank"
                  className="text-decoration-underline text-gray-dark"
                >
                  ViitorCloud Technologies
                </a>{" "}
                as a Frontend React Developer, building a port management
                system. Before that I worked at{" "}
                <a
                  href="https://www.tatvasoft.com/"
                  target="_blank"
                  className="text-decoration-underline text-gray-dark"
                >
                  Tatvasoft
                </a>{" "}
                as a <i>Web Designer</i>. I love working in between product,
                engineering and developer experience.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
