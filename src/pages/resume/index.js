import React, { useEffect } from "react";
import { motion } from "framer-motion";

/* import css */
import "../../assets/scss/home.scss";

/* import images */
import portraitImg from "../../assets/images/portrait.jpg";

const Resume = ({ id }) => {
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
      <div className="resume-section">Resume</div>
    </>
  );
};

export default Resume;
