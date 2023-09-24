import React from "react";
import { motion } from "framer-motion";

/* import css */
import "../../assets/scss/about.scss";

/* import images */
import portraitImg from "../../assets/images/portrait.jpg";

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
        <div className="container-lg">
          <motion.h2
            className="fs-70 text-center mb-md-5 pb-md-5 mb-3 pb-3 text-gray-dark"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // animate={{ opacity: "1" }}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
          >
            <span className="d-inline-block position-relative section-title fw-bold">About Me</span>
          </motion.h2>
          <motion.p
            className="about text-center fs-22"
            initial={{ opacity: 0, y: "10px" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // animate={{ opacity: "1" }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            Hey there! 👋. I'm Maitri, a software engineer based in UK, that
            loves to code and build products with a delightful user experience.
            Currently working at{" "}
            <a
              href="https://viitorcloud.com/"
              target="_blank"
              className="text-decoration-underline text-gray-dark"
            >
              ViitorCloud Technologies
            </a>{" "}
            as a <i>Frontend React Developer</i>, building a port management system.
            Before that I worked at {" "}
            <a
              href="https://www.tatvasoft.com/"
              target="_blank"
              className="text-decoration-underline text-gray-dark"
            >
              Tatvasoft
            </a>{" "}
            as a <i>Web Designer</i>. I love working in between product, engineering
            and developer experience.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
