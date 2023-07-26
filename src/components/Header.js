import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* import scss */
import "../assets/scss/header.scss";

/* import images */
import logoImg from "../assets/images/logo-white.png";
import FadeIn from "./animations/FadeIn";
import { headerMenuList } from "../mock/mock";

const Header = () => {
  const toggleMenu = () => {
    document.body.classList.toggle("menu-open");
  };
  return (
    <div className="site-header">
      <div className="d-flex align-items-center justify-content-between container-lg py-md-3 py-2">
        <div className="d-flex flex-row align-items-center justify-content-between left-block">
          <Link to={"/"} className="d-inline-block me-md-5 me-3 site-logo">
            <motion.img
              src={logoImg}
              alt="logo"
              className="w-100 h-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 1,
              }}
            />
          </Link>
          <a
            href="mailTo:mait.ch1997@gmail.com"
            className="email-link fw-normal fs-18"
          >
            <FadeIn>mait.ch1997@gmail.com</FadeIn>
          </a>
        </div>
        <div className="right-block position-relative">
          <span className="humburg-menu" onClick={toggleMenu}>
            <span></span>
          </span>
          <ul className="d-flex flex-md-row flex-column header-menu mt-4 mt-md-0">
            {headerMenuList?.map((menuItem, idx) => {
              return (
                <li
                  className={`${
                    idx !== headerMenuList?.length - 1 ? "me-md-3 me-md-2" : ""
                  } mb-2 mb-md-0`}
                  key={idx}
                >
                  <FadeIn>
                    <a
                      href="javascript:void(0)"
                      // to={`${menuItem?.url}`}
                      title={menuItem?.title}
                      className="d-flex align-items-center fs-16 fw-normal"
                    >
                      <i className="d-inline-block me-2 icon-wrap">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `/images/svg/${menuItem?.icon}`
                          }
                          alt=""
                          className="w-100 h-100"
                        />
                      </i>
                      {menuItem?.title}
                    </a>
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
