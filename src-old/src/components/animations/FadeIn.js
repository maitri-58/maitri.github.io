import React from "react";
import { motion } from "framer-motion";

const FadeIn = (props) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 1,
      }}
    >
      {props.children}
    </motion.span>
  );
};

export default FadeIn;
