import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { workList } from "../../mock/mock";
/* import css */
import "../../assets/scss/work.scss";

const Work = () => {
  const location = useLocation();
  return (
    <div className="work-section">
      <div className="container-lg h-100">
        <motion.p
          className="text text-center mb-md-4 mb-3"
          initial={{ scale: "0" }}
          animate={{ scale: "100%" }}
          transition={{
            duration: 0.4,
            delay: 1,
          }}
        >
          <span className="fs-38 fw-medium text-uppercase designation">
            Work
          </span>
        </motion.p>
        {workList && workList?.length > 0 && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 1.4,
            }}
            className="work-listing d-flex flex-wrap justify-content-between"
          >
            {workList?.map((workItem, idx) => {
              return (
                <li className="work-card" key={idx}>
                  <div className="content-wrap">
                    <div className="img-wrap">
                      <img
                        src={require(`../../assets/images/${workItem?.coverImg}`)}
                        alt=""
                        className="mw-100 h-auto"
                      />
                    </div>
                    <div className="text-wrap">
                      <h2 className="fs-18 font-primary text-uppercase title">
                        {workItem?.title}
                      </h2>
                      <p className="fs-16 font-secondary summary">
                        {workItem?.summary}
                      </p>
                      <Link to={"/"} className="fs-14 font-secondary btn sm secondary-btn demo-link">
                        Go to demo
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </motion.ul>
        )}
        {JSON.stringify(location, null, 2)}
      </div>
    </div>
  );
};

export default Work;
