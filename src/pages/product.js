import React, { useRef, useState } from "react";
import SelectableList from "../components/product/SelectableList";
import ProductPhotoSection1 from "../components/product/ProductPhotoSection1";
import "../assets/css/nutrition.css";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = ({
  productImages,
  products,
  sizeOptions,
  flavorOptions,
  Size,
  Flavor,
  selectedCurrentProduct,
  rating,
}) => {
  const [currentProduct, setCurrentProduct] = useState(selectedCurrentProduct);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeSize, setActiveSize] = useState(Size);
  const [activeFlavor, setActiveFlavor] = useState(Flavor);
  const [opacity, setOpacity] = useState(1);
  const imageRef = useRef(null);

  const handleSelectSize = (id) => {
    setOpacity(0.3);
    setTimeout(() => {
      setActiveSize(id);
      setCurrentProduct(`${id}-${activeFlavor}`);
      setActiveImageIndex(0);
      setOpacity(1);
    }, 500);
  };

  const handleSelectFlavor = (id) => {
    setOpacity(0.3);
    setTimeout(() => {
      setActiveFlavor(id);
      setCurrentProduct(`${activeSize}-${id}`);
      setActiveImageIndex(0);
      setOpacity(1);
    }, 500);
  };

  const currentProductData =
    products.find((product) => product.key === currentProduct)?.data || {};

  const sendToWhatsApp = (text, option) => {
    if (!text) {
      text = `Hi, I have come across ${window.location.href}. Can you provide more information about this?`;
    }

    if (option) {
      if (option.pageRef) {
        text += `\n\nI found your contact details from ${
          window.location.origin + window.location.pathname
        }`;
      }
    }

    let url = `https://api.whatsapp.com/send?phone=+919990901150&text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };
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

      {/* Header */}
      <Header />
      <section className="product-detail-main bg-white mt-5 pt-5">
        <div className="container-fluid w-80 mb-4">
          <div className="row justify-content-center w-100 mx-auto">
            <div className="col-12 p-0 px-md-3 d-md-flex d-block px-xl-4 py-3 py-md-3 h-100 mt-5">
              <div className="col-12 p-0 col-lg-7 h-100 mb-lg-0 px-0 px-md-3 product-detail-left">
                <div
                  className="product-image-container"
                  ref={imageRef}
                  style={{
                    opacity: opacity,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <ProductPhotoSection1
                    images={productImages[currentProduct]}
                    activeImageIndex={activeImageIndex}
                    setActiveImageIndex={setActiveImageIndex}
                  />
                </div>
              </div>
              <div className="col-12 p-0 col-lg-5 mb-3 mt-3 mb-lg-0 product-detail-right">
                <div className="row">
                  <div className="col-12">
                    <h1 className="f-rob-bol f-22 text-bold">
                      {currentProductData.name}
                    </h1>
                  </div>
                  <div className="col-md-9 pt-2">
                    <div className="d-inline-block">
                      <span className="d-md-inline-block d-none mr-2 f-rob-bol f-20 text-red old-price">
                        ₹{currentProductData.price}
                      </span>
                      <span className="d-inline-block mr-2 f-rob-bol f-22">
                        <span className="d-md-none d-inline-block mr-2 f-rob-bol f-20 text-red old-price">
                          ₹{currentProductData.price}
                        </span>
                        ₹{currentProductData.discount} /- GST included
                      </span>
                      {/* <p>
                          MRP:-&nbsp;
                          <span className="price--line-through">
                            ₹ {currentProductData.price}
                          </span>
                        </p> */}
                    </div>
                  </div>
                  <div className="col-4 text-left text-md-right">
                    <div className="row">
                      <div className="d-flex align-items-center justify-content-center my-2">
                        <span className="d-flex align-items-center product-rating f-14 text-secondary">
                          {/* <i className="fas fa-star mr-2 rating-star"></i> */}
                          <FontAwesomeIcon
                            className="mr-2 rating-star"
                            icon={faStar}
                          />
                          {rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <SelectableList
                      items={sizeOptions}
                      activeItem={activeSize}
                      onItemClick={handleSelectSize}
                      title="Size"
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <SelectableList
                      items={flavorOptions}
                      activeItem={activeFlavor}
                      onItemClick={handleSelectFlavor}
                      title="Flavor"
                    />
                  </div>
                  <div className="col-12 p-0">
                    <div className="m-0 w-100 py-4 px-0 px-md-3">
                      <div className="common-button mx-2">
                        <div className="col-12 p-0">
                          <div className="m-0 w-100 px-md-3">
                            <div className="common-button-amazon mx-2">
                              <button
                                className="bg-yellow text-uppercase px-3 px-lg-5 text-white f-16 f-rob-bol rate-btn"
                                onClick={() =>
                                  sendToWhatsApp(
                                    `Hello, I wanted to inquire about this ${activeSize} ${currentProductData.name}.`,
                                    { pageRef: true }
                                  )
                                }
                              >
                                Inquiry
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
