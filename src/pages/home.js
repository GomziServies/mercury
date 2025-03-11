import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header";
import { Link } from "react-router-dom";

const Home = () => {
  //   images/product/whey-protein-blend.webp

  const wheyProteinProducts = [
    {
      id: 1,
      name: "Whey Protein 60%",
      image: "images/product/whey-protein-60-chocolate.webp",
      oldPrice: "₹5999",
      newPrice: "₹3899",
      rating: 4.3,
      link: "/whey-protein-sixty",
    },
    {
      id: 2,
      name: "Whey Protein 35%",
      image: "images/product/whey-protein-35-chocolate.webp",
      oldPrice: "₹4999",
      newPrice: "₹3499",
      rating: 4.5,
      link: "/whey-protein-thirty",
    },
    {
      id: 3,
      name: "Whey Protein Isolate",
      image: "images/product/isolate-chocolate.webp",
      oldPrice: "₹7999",
      newPrice: "₹5439",
      rating: 4.8,
      link: "/whey-protein-isolate",
    },
    {
      id: 4,
      name: "Mass Gainer 3kg",
      image: "images/product/mass-gainer-chocolate-3kg.webp",
      oldPrice: "₹3999",
      newPrice: "₹2599",
      rating: 4.3,
      link: "/mass-gainer?size=3kg&flavor=Chocolate",
    },
    {
      id: 5,
      name: "Mass Gainer 5kg",
      image: "images/product/mass-gainer-mawa-kulfi-5kg.webp",
      oldPrice: "₹5999",
      newPrice: "₹3899",
      rating: 4.4,
      link: "/mass-gainer?size=5kg&flavor=Chocolate",
    },
  ];

  const performanceDrinkProducts = [
    {
      id: 6,
      name: "Pre Workout Powder",
      image: "images/product/green-apple-250.webp",
      oldPrice: "₹1799",
      newPrice: "₹1169",
      rating: 4.7,
      link: "/pre-workout",
    },
    {
      id: 7,
      name: "Creatine Powder",
      image: "images/product/creatine-250.webp",
      oldPrice: "₹1699",
      newPrice: "₹934",
      rating: 4.8,
      link: "/creatine",
    },
    {
      id: 8,
      name: "EAA Powder",
      image: "images/product/eaa-250.webp",
      oldPrice: "₹1999",
      newPrice: "₹1099",
      rating: 4.3,
      link: "/eaa",
    },
  ];

  const peanutButterProducts = [
    {
      id: 9,
      name: "Peanut Butter",
      image: "images/peanut-butter.png",
      oldPrice: "₹1499",
      newPrice: "₹899",
      rating: 4.3,
      link: "/peanut-butter",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Default open accordion

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "Can those who are lactose intolerant eat whey protein?",
      answer:
        "Whey protein isolate is virtually free of lactose, but may contain trace amounts (0.5g per serving). Most people who are lactose intolerant are able to safely consume whey without any negative side effects however a medical practitioner should always be consulted before taking if there are any doubts.",
    },
    {
      question:
        "If whey protein concentrate is 80% protein, what is the other 20%?",
      answer:
        "Every protein powder, whether it's whey, soy, casein, etc., has moisture. In fact, 5% of the total formula is water. Another 3-5% is made up of naturally occurring minerals in whey. The remaining 10-12% is a combination of carbs and fat.",
    },
    {
      question: "Will More Protein Help Me Build Muscle Faster?",
      answer:
        "Yes, but only to some degree. Not all dietary protein you eat goes toward protein synthesis. Once you eat enough protein to drive protein synthesis, your body will oxidize protein for energy. Driving your protein intake far beyond the realm of 30-35 percent of your daily calories probably won't provide additional muscle-building benefits, but it will cut into your fat and carbohydrate intake, which may actually hinder your goals. This isn't exact, but eating at least 1 gram of protein per pound per day should cover your bases.",
    },
    {
      question: "Is It True The Body Can Only Use 30 Grams Of Protein At Once?",
      answer:
        "You're going to digest all the protein you eat, but more isn't always better. Once you turn on protein synthesis and initiate the muscle-building process, you can't turn it on 'more' in one meal.\n Roughly 30 grams of protein per meal across multiple meals will actually help you boost protein synthesis many times over the course of a day. It will probably be easier on your digestive system, too.",
    },
    {
      question: "When am I charged for the service?",
      answer:
        "Now were up in the big leagues getting' our turn at bat. And when the odds are against him and their dangers work to do. Duis aute irure dolor.",
    },
  ];

  return (
    <>
      <meta charSet="utf-8" />
      <title>Gym HTML-5 Template | Homepage 03</title>
      {/* Stylesheets */}
      <link href="css/bootstrap.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/responsive.css" rel="stylesheet" />
      {/* Color Switcher Mockup */}
      <link href="css/color-switcher-design.css" rel="stylesheet" />
      {/* Color Themes */}
      <link
        id="theme-color-file"
        href="css/default-theme.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
      <link rel="icon" href="images/favicon.png" type="image/x-icon" />
      {/* Responsive */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {/*[if lt IE 9]><![endif]*/}
      {/*[if lt IE 9]><![endif]*/}
      <div className="page-wrapper">
        {/* Preloader */}
        {/* <div className="preloader" /> */}
        {/* Main Header*/}
        <Header />
        {/* End Main Header */}
        {/* Main Slider Three */}
        <section className="main-slider-three" id="home">
          <div className="main-slider-carousel">
            {/* <Slider {...settings}> */}
            <div className="slide slide-img-1">
              <div className="auto-container">
                {/* Content boxed */}
                <div className="content-boxed">
                  <div className="title">Grow Your Strengtn</div>
                  <h1>In Body Building</h1>
                  <div className="text">
                    Unleash your fears, free your mind, feel your body
                  </div>
                  <div className="link-box clearfix">
                    <div className="btn-one-outer">
                      <a href="#" className="theme-btn btn-style-one">
                        <span className="txt">Join Us Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </Slider> */}
          </div>
        </section>
        {/* End Main Slider */}
        {/* bg-service-img */}
        <section
          className="services-section-two"
          style={{ backgroundColor: "black" }}
        >
          <div
            className="image-layer bg-service-img"
            // style={{ backgroundImage: "url(images/8.jpg)" }}
          />
          <div className="auto-container">
            <div className="row clearfix">
              {/* Service Block */}
              <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon-box">
                    <img src="images/protien-jar (1).png" alt="" width="20%" />
                  </div>
                  <span className="number">01</span>
                  <div className="title">Performance Boost</div>
                  <h4 className="text-white">Whey Protein | BCAAs</h4>
                  <div className="text">
                    Our science-backed formulas enhance muscle growth,
                    endurance, and recovery, helping you train harder and
                    recover faster.
                  </div>
                </div>
              </div>
              {/* Service Block */}
              <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInUp"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon-box">
                    <img src="images/protien-jar (1).png" alt="" width="20%" />
                  </div>
                  <span className="number">02</span>
                  <div className="title">Pure & Safe</div>
                  <h4 className="text-white">
                    GMP Certified | Third-Party Tested
                  </h4>
                  <div className="text">
                    We ensure top-tier quality with GMP-certified,
                    additive-free, and lab-tested supplements for safe and
                    effective results.
                  </div>
                </div>
              </div>
              {/* Service Block */}
              <div className="service-block-two col-lg-4 col-md-6 col-sm-12">
                <div
                  className="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="icon-box">
                    <img src="images/protien-jar (1).png" alt="" width="20%" />
                  </div>
                  <span className="number">03</span>
                  <div className="title">Fuel Your Goals</div>
                  <h4 className="text-white">
                    Strength | Fat Loss | Endurance
                  </h4>
                  <div className="text">
                    No matter your fitness goal, Hit to Fit has the right
                    supplements to keep you performing at your peak.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="product-section bg-light" id="product">
          <div className="container">
            <div className="sec-title mb-0">
              <h2 className="text-center">Products</h2>
            </div>
            <div className="row">
              <div className="col-12 mt-4">
                <h3>Whey Protein</h3>
              </div>
              <div className="col-12">
                <div className="row">
                  {wheyProteinProducts.map((product) => (
                    <div key={product.id} className="col-md-3 col-6 my-2 px-2">
                      <div className="product-card py-2 px-2 text-center">
                        <Link to={product.link}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid"
                          />
                        </Link>
                        <div className="product-card-desc d-flex flex-column justify-content-between">
                          <Link to={product.link}>
                            <h5 className="mt-3 product-card-title">
                              {product.name}
                            </h5>
                          </Link>
                          <div className="d-flex justify-content-center">
                            <div className="stars">{"★ "}</div>
                            {product.rating}
                          </div>
                          <p className="price mb-1">
                            <span className="old-price">
                              {product.oldPrice}
                            </span>{" "}
                            <span className="new-price">
                              {product.newPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-4">
                <h3>Performance Drinks</h3>
              </div>
              <div className="col-12">
                <div className="row">
                  {performanceDrinkProducts.map((product) => (
                    <div key={product.id} className="col-md-3 col-6 my-2 px-2">
                      <div className="product-card py-2 px-2 text-center">
                        <Link to={product.link}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid"
                          />
                        </Link>
                        <div className="product-card-desc d-flex flex-column justify-content-between">
                          <Link to={product.link}>
                            <h5 className="mt-3 product-card-title">
                              {product.name}
                            </h5>
                          </Link>
                          <div className="d-flex justify-content-center">
                            <div className="stars">{"★ "}</div>
                            {product.rating}
                          </div>
                          <p className="price mb-1">
                            <span className="old-price">
                              {product.oldPrice}
                            </span>{" "}
                            <span className="new-price">
                              {product.newPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-4">
                <h3>Peanut Butter</h3>
              </div>
              <div className="col-12">
                <div className="row">
                  {peanutButterProducts.map((product) => (
                    <div key={product.id} className="col-md-3 col-6 my-2 px-2">
                      <div className="product-card py-2 px-2 text-center">
                        <Link to={product.link}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid"
                          />
                        </Link>
                        <div className="product-card-desc d-flex flex-column justify-content-between">
                          <Link to={product.link}>
                            <h5 className="mt-3 product-card-title">
                              {product.name}
                            </h5>
                          </Link>
                          <div className="d-flex justify-content-center">
                            <div className="stars">{"★ "}</div>
                            {product.rating}
                          </div>
                          <p className="price mb-1">
                            <span className="old-price">
                              {product.oldPrice}
                            </span>{" "}
                            <span className="new-price">
                              {product.newPrice}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Subscribe Section */}
        {/* About Section */}
        <section className="about-section style-two" id="about">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <div className="title">About Us</div>
                    <h2>Hit to Fit Nutrition</h2>
                  </div>
                  <div className="red-text mb-1">Founder and Owner</div>
                  <div className="red-text">Mr. Jitender Singh</div>
                  <div className="image d-md-none d-block">
                    <img src="images/hit-to-fit.png" alt="" width="80%" />
                  </div>
                  <div className="text mb-4">
                    Located in the heart of Mithapur Extension, Badarpur., New
                    Delhi, Hit to Fit Nutrition is your one-stop destination for
                    high-quality health and fitness products. Whether you're a
                    bodybuilder, athlete, or just someone looking to maintain a
                    healthy lifestyle, we offer a wide range of premium
                    supplements to help you achieve your fitness goals.
                  </div>
                  <div className="text mb-4">
                    Our store carries a variety of products from the leading
                    global brands, but what truly sets us apart is our very own
                    Hit to Fit label. Our exclusive range includes: Whey
                    Protein, Isolate Protein, Gainer, Fat cutter, BCAA etc.
                  </div>
                  <div className="text mb-4">
                    Every product in our store is carefully chosen to ensure it
                    meets the highest standards, so you can train, recover, and
                    perform at your best. Whether you're a fitness enthusiast or
                    a professional athlete, come visit us and elevate your
                    fitness game with products that work as hard as you do!
                  </div>
                  <div className="text mb-2">Contact No: 9990901150</div>
                  <div className="main-header d-flex justify-content-start">
                    <div className="outer-box clearfix m-0 p-0">
                      <div className="btn-box m-0">
                        <a href="contact.html" className="pass-btn theme-btn">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12 d-md-flex justify-content-center align-items-end d-none">
                <div
                  className="inner-column wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  {/* <div className="award">
                    <img src="images/award.png" alt="" />
                  </div> */}
                  <div className="image d-flex justify-content-center">
                    <img src="images/hit-to-fit.png" alt="hit-to-fit" width="80%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section style-two bg-light">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12 d-md-block d-none">
                <div
                  className="inner-column wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  {/* <div className="award">
                    <img src="images/award.png" alt="" />
                  </div> */}
                  <div className="image">
                    <img src="images/jitendra.jpg" alt="" width="100%" />
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <div className="title">About Owner</div>
                    <h2>Mr. Jitender Singh</h2>
                  </div>
                  <div className="red-text">
                    Meet Jitender Singh, a certified gym trainer and
                    nutritionist with over 10 years of experience in helping
                    people achieve their fitness goals.
                  </div>
                  <div className="image d-md-none d-block">
                    <img src="images/jitendra.jpg" alt="" width="100%" />
                  </div>
                  <div className="text mb-4">
                    Whether it's losing weight, gaining weight, or improving
                    overall fitness, Jitender has successfully guided many
                    individuals on their journey to a healthier lifestyle.
                  </div>
                  <div className="text mb-4">
                    He completed a year of fitness training Course from " Ufit
                    Academy" ( Govt Certified Personal Trainer Course at Dwarka
                    New Delhi ) where he learned the best techniques and
                    knowledge to support his clients. With a strong belief in
                    providing the best quality, Jitender took his passion
                    further by launching Hit to Fit Nutrition—a unique store
                    offering a wide range of protein supplements all in one
                    place. This ensures that everyone has access to the right
                    products to meet their fitness needs, whether it's building
                    muscle, boosting recovery, or simply staying healthy.
                  </div>
                  <div className="text mb-4">
                    Jitender's approach is all about making fitness easy to
                    understand and sustainable for everyone, combining expert
                    advice with top-quality nutrition. His goal is to help you
                    achieve real, lasting results and make fitness a part of
                    your everyday life.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* Faq Section */}
        <section className="faq-section">
          <div className="side-text">faq's</div>
          <div className="auto-container">
            <div className="row clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12 d-md-flex align-items-end d-none">
                <div
                  className="inner-column wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="image">
                    <img src="images/faq111.png" alt="FAQ" width="100%" />
                  </div>
                </div>
              </div>

              {/* Accordion Column */}
              <div className="accordian-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <div className="title">Some FAQ's</div>
                    <h2>
                      FREQUENTLY ASKED <br /> QUESTIONS
                    </h2>
                  </div>

                  {/* Accordion Box */}
                  <ul className="accordion-box">
                    {faqs.map((faq, index) => (
                      <li
                        key={index}
                        className={`accordion block ${
                          activeIndex === index ? "active-block" : ""
                        }`}
                      >
                        <div
                          className={`acc-btn ${
                            activeIndex === index ? "active" : ""
                          }`}
                          onClick={() => toggleAccordion(index)}
                        >
                          <div className="icon-outer">
                            <span className="icon icon-plus fa fa-plus" />
                            <span className="icon icon-minus fa fa-minus" />
                          </div>
                          {faq.question}
                        </div>
                        <div
                          className={`acc-content ${
                            activeIndex === index ? "current" : ""
                          }`}
                        >
                          <div className="content">
                            <div className="text">{faq.answer}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Faq Section */}
        {/* Main Footer */}
        <footer className="main-footer style-three">
          <div
            className="boxed-pattern-layer"
            style={{ backgroundImage: "url(images/pattern-10.png)" }}
          />
          <div className="auto-container">
            {/* Widgets Section */}
            <div className="widgets-section">
              <div className="row clearfix">
                {/* Big Column */}
                <div className="big-column col-12">
                  <div className="row clearfix justify-content-between">
                    {/*Footer Column*/}
                    <div className="footer-column col-lg-4 col-sm-12">
                      <div className="footer-widget logo-widget">
                        <div className="logo">
                          <a href="/">
                            <img
                              src="images/logo-2-1.png"
                              alt=""
                              className="footer-logo-size"
                            />
                          </a>
                        </div>
                        <ul className="footer-info-list">
                          <li>
                            <span className="icon fa fa-location-arrow" />
                            Shop No 4, gali No-4, HarijanBasti Mithapur Extn,
                            New Delhi-110044
                          </li>
                          <li>
                            <span className="icon fa fa-phone" />
                            <a href="tel:+91-9990901150">+91 9990901150</a>
                          </li>
                          <li>
                            <span className="icon fa fa-envelope-o" />
                            <a href="mailto:hittofitnutrition@gmail.com">
                              hittofitnutrition@gmail.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Footer Column */}
                    <div className="footer-column col-lg-3 col-sm-12">
                      <div className="footer-widget links-widget">
                        <h4>Useful Links</h4>
                        <ul className="list-link">
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Product</a>
                          </li>
                          <li>
                            <a href="#">About</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Big Column */}
                    <div className="big-column col-lg-4 col-sm-12">
                      <div className="row clearfix">
                        {/* Footer Column */}
                        <div className="footer-column col-12">
                          <div className="footer-widget consult-widget">
                            <h4>Free Consultation</h4>
                            <div className="phone">
                              <span className="icon fa fa-phone" />{" "}
                              +919990901150
                            </div>
                            <div className="text">
                              Hit to Fit Nutrition is your one-stop destination
                              for high-quality health and fitness products.
                            </div>
                            {/* <div className="social-links">
                          <a href="#" className="fa fa-facebook" />
                          <a href="#" className="fa fa-twitter" />
                          <a href="#" className="fa fa-instagram" />
                          <a href="#" className="fa fa-linkedin" />
                        </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="copyright">
                Copyright 2023 Theme by expertthemes
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/*End pagewrapper*/}
      {/* Search Popup */}
      {/* <div className="search-popup">
        <button className="close-search style-two">
          <span className="flaticon-multiply" />
        </button>
        <button className="close-search">
          <span className="flaticon-up-arrow-1" />
        </button>
        <form method="post" action="blog.html">
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              defaultValue=""
              placeholder="Search Here"
              required=""
            />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
      </div> */}
      {/* End Header Search */}
      {/*Scroll to top*/}
      {/* <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-arrow-up" />
      </div> */}
      {/*Google Map APi Key*/}
      {/*End Google Map APi*/}
    </>
  );
};

export default Home;
