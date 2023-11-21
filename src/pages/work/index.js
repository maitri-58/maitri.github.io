import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { workList } from "../../mock/mock";
/* import css */
import "../../assets/scss/work.scss";

const Work = () => {
  const navigate = useNavigate();
  return (
    <div className="work-section">
      <div className="container-lg h-100">
        <motion.p
          className="text text-center mb-md-4 mb-3"
          initial={{ scale: "0" }}
          whileInView={{ scale: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.4,
          }}
        >
          <span className="fs-38 fw-medium text-uppercase designation">
            Work
          </span>
        </motion.p>
        {workList && workList?.length > 0 && (
          <ul className="work-listing d-flex flex-wrap justify-content-between">
            {workList?.map((workItem, idx) => {
              return (
                <motion.li
                  className="work-card cursor-pointer"
                  key={idx}
                  initial={{ opacity: 0, translateY: 5 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8 + 0.4 * +idx,
                  }}
                >
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
                      <p className="fs-16 font-secondary summary mb-3">
                        {workItem?.summary}
                      </p>
                      <p className="fs-16 font-secondary summary mb-3">
                        <span className="text-gray-dark">Technologoies:</span>{" "}
                        {workItem?.techStack}
                      </p>
                      <Link
                        to={`${workItem?.url}`}
                        reloadDocument
                        target="_blank"
                        className="fs-14 font-secondary btn sm secondary-btn demo-link"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Work;
