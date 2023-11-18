import React, { useEffect } from "react";
import Home from "../home";
import About from "../about";
import Skills from "../skills";
import Work from "../work";

const Landing = ({ wrapRef = null, setActiveIndex = () => {} }) => {
  let scrollDown = null,
    touchStartY,
    touchEndY;

  const slideToNext = () => {
    const activeDiv = document.querySelector(`.portfolio-section.active`),
      activeSection = activeDiv?.id,
      activeIdx = activeSection?.replace("section-", "");
    if (activeDiv?.nextSibling !== null) {
      activeDiv?.classList?.remove("active");
      activeDiv?.nextSibling?.classList?.add("active");
      if (wrapRef && wrapRef.current) {
        wrapRef.current.style.transform = `translateY(calc(-${
          +activeIdx + 1
        } * 100%))`;
      }
      setActiveIndex(+activeIdx + 1);
    }
  };

  const slideToPrev = () => {
    const activeDiv = document.querySelector(`.portfolio-section.active`),
      activeSection = activeDiv?.id,
      activeIdx = activeSection?.replace("section-", "");
    if (activeDiv?.previousSibling !== null) {
      activeDiv?.classList?.remove("active");
      activeDiv?.previousSibling?.classList?.add("active");
      if (wrapRef && wrapRef.current) {
        wrapRef.current.style.transform = `translateY(calc(-${
          +activeIdx - 1
        } * 100%))`;
      }
      setActiveIndex(+activeIdx - 1);
    }
  };

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  function createWheelStopListener(element, callback, timeout) {
    var handle = null;
    var onScroll = function () {
      if (handle) {
        clearTimeout(handle);
      }
      handle = setTimeout(callback, timeout || 200);
    };
    element.addEventListener("wheel", onScroll);
    return function () {
      element.removeEventListener("wheel", onScroll);
    };
  }

  useEffect(() => {
    window.addEventListener("wheel", function (event) {
      if (event.deltaY < 0) {
        scrollDown = true;
      } else if (event.deltaY > 0) {
        scrollDown = false;
      }
    });
    createWheelStopListener(window, function () {
      if (scrollDown) {
        slideToPrev();
      } else {
        slideToNext();
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.code === "ArrowDown") {
        slideToNext();
      }
      if (event.code === "ArrowUp") {
        slideToPrev();
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("touchstart", (event) => {
      touchStartY = event?.changedTouches?.[0]?.clientY;
    });
    window.addEventListener("touchend", (event) => {
      touchEndY = event?.changedTouches?.[0]?.clientY;
      if (touchEndY < touchStartY) {
        slideToNext();
      }
      if (touchEndY > touchStartY) {
        slideToPrev();
      }
    });
  }, []);

  return (
    <>
      <div className="sections-wrapper">
        <div className="sections-wrap" ref={wrapRef}>
          <section className="portfolio-section active" id={"section-0"}>
            <Home />
          </section>
          <section className="portfolio-section" id={"section-1"}>
            <About />
          </section>
          <section className="portfolio-section" id={"section-2"}>
            <Skills />
          </section>
          <section className="portfolio-section" id={"section-3"}>
            <Work />
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Landing;
