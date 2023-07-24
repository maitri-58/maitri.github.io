import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* import scss */
import "../assets/scss/header.scss";

/* import images */
import logoImg from "../assets/images/logo-white.png";
import workIcon from "../assets/images/svg/work.svg";
import resumeIcon from "../assets/images/svg/resume.svg";
import shelfIcon from "../assets/images/svg/shelf.svg";
import FadeIn from "./animations/FadeIn";
import { headerMenuList } from "../mock/mock";

const Header = () => {
  return (
    <div className="site-header">
      <div className="d-flex align-items-center justify-content-between container py-md-3 py-2">
        <div className="d-flex flex-row align-items-center justify-content-between left-block">
          <Link to={"/"} className="d-inline-block me-5 site-logo">
            <motion.img
              src={logoImg}
              alt="logo"
              className="w-full h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 1,
              }}
            />
          </Link>
          <Link to={"/"} className="email-link fw-normal fs-18">
            <FadeIn>mait.ch1997@gmail.com</FadeIn>
          </Link>
        </div>
        <div className="right-block">
          <ul className="d-flex flex-row header-menu">
            {headerMenuList?.map((menuItem, idx) => {
              return (
                <li className="me-md-3 me-2" key={idx}>
                  <FadeIn>
                    <Link
                      to={menuItem?.url}
                      title={menuItem?.title}
                      className="d-flex align-items-center fs-16 fw-normal"
                    >
                      <i className="d-inline-block me-2 icon-wrap">
                        <img src={`../assets/images/svg/${menuItem?.icon}`} alt="" />
                      </i>
                      {menuItem?.title}
                    </Link>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
