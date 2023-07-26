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
            className="fs-70 color-primary text-center mb-4"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // animate={{ opacity: "1" }}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="about text-center fs-18"
            initial={{ opacity: 0, y: "10px" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // animate={{ opacity: "1" }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            Hey there! 👋. I'm Maitri, a software engineer based in India, that
            loves to code and build products with a delightful user experience.
            Currently working at{" "}
            <a
              href="https://viitorcloud.com/"
              target="_blank"
              className="color-black1 text-decoration-underline"
            >
              ViitorCloud Technologies
            </a>{" "}
            as a Frontend react developer, building a port management system.
            Before that I worked at a{" "}
            <a
              href="https://www.tatvasoft.com/"
              target="_blank"
              className="color-black1 text-decoration-underline"
            >
              Tatvasoft
            </a>{" "}
            as a web designer. I love working in between product, engineering
            and developer experience.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
