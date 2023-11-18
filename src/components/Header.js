import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

/* import scss */
import "../assets/scss/header.scss";

/* import images */
import logoImg from "../assets/images/logo.png";
import { headerMenuList } from "../mock/mock";

const Header = ({ activeIndex, setActiveIndex = () => {}, wrapRef }) => {
  const location = useLocation();
  console.log(location,"is location")
  const toggleMenu = () => {
    document.body.classList.toggle("menu-open");
  };
  const handleClick = (idx) => {
    document.body.classList.remove("menu-open");
    if (wrapRef && wrapRef.current) {
      wrapRef.current.style.transform = `translateY(calc(-${idx} * 100%))`;
    }
  };
  return (
    <div className="site-header">
      <div className="d-flex align-items-center justify-content-between container-lg py-md-3 py-2">
        <Link
          to={"portfolio"}
          className="d-inline-block me-md-5 me-3 site-logo"
        >
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
        <div className="position-relative header-menu-wrap">
          <span className="humburg-menu" onClick={toggleMenu}>
            <span></span>
          </span>
          <ul className="d-flex flex-md-row flex-column align-items-md-start align-items-center justify-content-md-start justify-content-center header-menu">
            {headerMenuList?.map((menuItem, idx) => {
              return (
                <motion.li
                  className={`${
                    idx !== headerMenuList?.length - 1 ? "me-md-4" : ""
                  } mb-4 mb-md-0 position-relative ${
                    activeIndex === idx ? "active" : ""
                  }`}
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    !menuItem.url && handleClick(idx);
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 1,
                  }}
                >
                  {!menuItem.url ? (
                    <a
                      href={"javascript:void(0)"}
                      title={menuItem?.title}
                      className="d-flex align-items-center fs-18 position-relative"
                    >
                      {menuItem?.title}
                    </a>
                  ) : (
                    <Link
                      to={menuItem?.url}
                      className="d-flex align-items-center fs-18 position-relative"
                    >
                      {menuItem?.title}
                    </Link>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
        <div className="right-block d-none d-md-block">
          <div className="d-block">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 1,
              }}
              href="https://api.whatsapp.com/send?phone=07587537470"
              target="_blank"
              className="email-link fs-18"
            >
              07587537470
            </motion.a>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 1,
            }}
            href="mailTo:mait.ch1997@gmail.com"
            className="email-link fs-18"
          >
            mait.ch1997@gmail.com
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
