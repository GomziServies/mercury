import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="main-header header-style-three border-bottom">
        {/* Header Top */}
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
        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container clearfix d-md-block d-flex align-items-center">
            <div className="pull-left logo-box">
              <div className="logo mt-md-2 mb-md-0 mb-2 mt-2">
                <a href="/">
                  <img
                    src="images/logo-black.png"
                    alt=""
                    title=""
                    className="logo-image-size"
                  />
                </a>
              </div>
            </div>
            <div className="nav-outer clearfix">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <FontAwesomeIcon icon={faBars} className="fs-6" />
              </div>
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md">
                <div className="navbar-header">
                  {/* Toggle Button */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div
                  className="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className="current">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#product">Product</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#contact">Contact us</a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End*/}
              <div className="outer-box clearfix">
                {/* Quote Btn */}
                <div className="btn-box">
                  <a href="contact.html" className="pass-btn theme-btn">
                    Get A Free Pass
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="auto-container clearfix">
            {/*Logo*/}
            <div className="logo pull-left">
              <a href="index.html" title="">
                <img src="images/logo-small.png" alt="" title="" />
              </a>
            </div>
            {/*Right Col*/}
            <div className="pull-right">
              {/* Main Menu */}
              <nav className="main-menu">
                {/*Keep This Empty / Menu will come through Javascript*/}
              </nav>
              {/* Main Menu End*/}
              {/* Main Menu End*/}
              <div className="outer-box clearfix">
                {/* Cart Box */}
                <div className="cart-box">
                  <div className="dropdown">
                    <button
                      className="cart-box-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenu"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="flaticon-shopping-cart-3" />
                      <span className="total-cart">2</span>
                    </button>
                    <div
                      className="dropdown-menu pull-right cart-panel"
                      aria-labelledby="dropdownMenu3"
                    >
                      <div className="cart-product">
                        <div className="inner">
                          <div className="cross-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                          </div>
                          <div className="image">
                            <img src="images/post-thumb-1.jpg" alt="" />
                          </div>
                          <h3>
                            <a href="shop-single.html">Flying Ninja</a>
                          </h3>
                          <div className="quantity-text">Quantity 1</div>
                          <div className="price">$99.00</div>
                        </div>
                      </div>
                      <div className="cart-product">
                        <div className="inner">
                          <div className="cross-icon">
                            <span className="icon fa fa-remove" />
                          </div>
                          <div className="image">
                            <img src="images/post-thumb-2.jpg" alt="" />
                          </div>
                          <h3>
                            <a href="shop-single.html">Patient Ninja</a>
                          </h3>
                          <div className="quantity-text">Quantity 1</div>
                          <div className="price">$99.00</div>
                        </div>
                      </div>
                      <div className="cart-total">
                        Sub Total: <span>$198</span>
                      </div>
                      <ul className="btns-boxed">
                        <li>
                          <a href="shoping-cart.html">View Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">CheckOut</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Search Btn */}
                <div className="search-box-btn search-box-outer">
                  <span className="icon fa fa-search" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn">
            <span className="icon flaticon-multiply" />
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="images/logo-2.png" alt="" title="" width="70%" />
              </a>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
    </>
  );
};

export default Header;
