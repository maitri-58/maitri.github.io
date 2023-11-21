import React, { useState } from "react";
import { motion } from "framer-motion";

/* import css */
import "../../assets/scss/skills.scss";
import { skillSet } from "../../mock/mock";

const Skills = () => {
  const [currentSkillIcon, setCurrentSkillIcon] = useState("reactjs.jpg");
  const [currentSkillIdx, setCurrentSkillIdx] = useState(0);

  const handleMosueEnter = (iconName, index) => {
    setCurrentSkillIcon(iconName);
    setCurrentSkillIdx(index);
  };

  const handleReadMore = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="skills-section h-100 py-4 d-flex align-content-center align-items-center">
        <div className="container-lg">
          <div className="row flex-row">
            <div className="skills-wrapper position-relative d-flex flex-wrap">
              <motion.h2
                className="fs-22 mb-xxl-0 pb-xxl-0 mb-md-5 mb-3 pb-3 w-100"
                initial={{ opacity: 0, translateX: 0.7 }}
                whileInView={{ opacity: 1, translateX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                }}
              >
                <span className="d-inline-block fw-bold section-title">
                  Skills
                </span>
              </motion.h2>
              <motion.div
                className="d-flex align-items-start w-100"
                initial={{ opacity: 0, translateY: "30px" }}
                whileInView={{ opacity: 1, translateY: "0" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.7,
                }}
              >
                <ul className="skills-list">
                  {skillSet?.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        onMouseEnter={(e) =>
                          handleMosueEnter(skill?.icon, index)
                        }
                        className={`${skill?.class} ${
                          currentSkillIdx === index ? "active" : ""
                        }`}
                      >
                        <span>{skill?.name}</span>
                        {currentSkillIdx === index && (
                          <button
                            className="btn"
                            onClick={() => handleReadMore(skill?.url)}
                          >
                            Read More
                          </button>
                        )}
                      </li>
                    );
                  })}
                  {/* <li>Email Template design</li>
                <li>UI development</li> */}
                </ul>
                <div className="skill-img px-4 d-none d-md-flex align-items-center justify-content-center h-100">
                  <img
                    src={require(`../../assets/images/${currentSkillIcon}`)}
                    alt={""}
                    className="mw-100 h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
