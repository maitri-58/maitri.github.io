import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* import scss */
import "../assets/scss/header.scss";

/* import images */
import logoImg from "../assets/images/logo-white.png";
import FadeIn from "./animations/FadeIn";
import { headerMenuList } from "../mock/mock";

const Header = ({ activeIndex, setActiveIndex = () => {}, wrapRef }) => {
  const toggleMenu = () => {
    document.body.classList.toggle("menu-open");
  };
  const handleClick = (idx) => {
    setActiveIndex(idx);
    document.body.classList.remove("menu-open");
    wrapRef.current.style.transform = `translateY(calc(-${idx} * 100%))`;
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
          <a href="mailTo:mait.ch1997@gmail.com" className="email-link fs-18">
            <FadeIn>mait.ch1997@gmail.com</FadeIn>
          </a>
        </div>
        <div className="right-block position-relative">
          <span className="humburg-menu" onClick={toggleMenu}>
            <span></span>
          </span>
          <ul className="d-flex flex-md-row flex-column align-items-md-start align-items-center justify-content-md-start justify-content-center header-menu">
            {headerMenuList?.map((menuItem, idx) => {
              return (
                <li
                  className={`${
                    idx !== headerMenuList?.length - 1 ? "me-md-4" : ""
                  } mb-4 mb-md-0 position-relative ${
                    activeIndex === idx ? "active" : ""
                  }`}
                  key={idx}
                  onClick={() => {
                    handleClick(idx);
                  }}
                >
                  <FadeIn>
                    <a
                      href={"javascript:void(0)"}
                      title={menuItem?.title}
                      className="d-flex align-items-center fs-16 position-relative"
                    >
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
