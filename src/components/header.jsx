import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FgiitHeader() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  function openside() {
    document.getElementById("demo").style.width = "100%";
  }

  function sideclose() {
    console.log("Closing side");
    document.getElementById("demo").style.width = "0px";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById("demo").style.width = "0px";
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* <a className={`scroll_top ${showBackToTop ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
                <ArrowCircleUpIcon className="fs-50" />
            </a> */}
      <header className="main-header header-style-three border-bottom">
        <div className="header-top d-md-block d-none">
          <div className="auto-container">
            <div className="clearfix d-flex justify-content-center">
              {/* Top Left */}
              <div className="top-left pull-left">
                {/* Info List */}
                <ul className="info-list">
                  <li>
                    <span className="icon fa fa-location-arrow" /> Shop No 4,
                    gali No-4, HarijanBasti Mithapur Extn, New Delhi-110044
                  </li>
                  <li>
                    <span className="icon fa fa-phone" />{" "}
                    <a href="tel:+1-044-123-456-789"> +91 9990901150 </a>
                  </li>
                  <li>
                    <span className="icon fa fa-envelope-o" />{" "}
                    <a href="mailto:hittofitnutrition@gmail.com">
                      {" "}
                      hittofitnutrition@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`container-fluid main p-0 m-0 ${
            isScrolled ? "scrolled" : ""
          }`}
        >
          <div className="d-lg-block d-none log">
            <Link to="/">
              <div>
                <img src="images/logo-black.png" width="100%" alt="Fg Group" />
              </div>
            </Link>
          </div>
          <div className="d-lg-none d-sm-block t0 log1">
            <Link to="/">
              <div>
                <img src="images/logo-black.png" width="100%" alt="Fg Group" />
              </div>
            </Link>
          </div>
          <div className="lang">
            <ul>
              <li>
                <Link to="/">
                  <p
                    className="m-0 text-red"
                    onClick={() => scrollToSection("home")}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <p
                  className="m-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("product")}
                >
                  Product
                </p>
              </li>
              <li>
                <p
                  className="m-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("about")}
                >
                  About
                </p>
              </li>
              <li>
                <p
                  className="m-0"
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("contact")}
                >
                  Contact us
                </p>
              </li>
            </ul>
          </div>
          <div className="side" id="demo">
            <span className="closebtn" onClick={sideclose}>
              ×
            </span>
            <Link to="/" style={{ marginTop: 50 }}>
              <img
                className="lazy"
                src="images/logo-black.png"
                width="40%"
                alt="Fg Group"
              />
            </Link>
            <Link to="/">
              <p
                className="text-red m-0 p-0"
                onClick={() => scrollToSection("home")}
              >
                Home
              </p>
            </Link>
            <p
              className="m-0"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection("product")}
            >
              Product
            </p>
            <p
              className="m-0"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection("about")}
            >
              About
            </p>
            <p
              className="m-0"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection("contact")}
            >
              Contact us
            </p>
          </div>
          <span
            className="d-lg-none d-sm-block btnn"
            style={{ cursor: "pointer", fontSize: 20, color: "black" }}
            onClick={openside}
          >
            ☰
          </span>
        </div>
      </header>
    </>
  );
}

export default FgiitHeader;
