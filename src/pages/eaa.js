import React from "react";
import "../assets/css/nutrition.css";
import Product from "./product";

const EAAPowder = () => {
  const productImages = {
    "250g-Watermelon": ["/images/product/eaa-250.webp"],
  };

  const products = [
    {
      key: "250g-Watermelon",
      data: {
        name: "EAA Watermelon",
        price: "1999",
        discount: "1099",
      },
    },
  ];

  const sizeOptions = [{ id: "250g", label: "250g" }];

  const flavorOptions = [
    { id: "Watermelon", label: "Watermelon" },
  ];

  const activeSize = "250g";
  const activeFlavor = "Watermelon";
  const currentProduct = "250g-Watermelon";
  const rating = "4.3";
  return (
    <>
      <Product
        productImages={productImages}
        products={products}
        sizeOptions={sizeOptions}
        flavorOptions={flavorOptions}
        Size={activeSize}
        Flavor={activeFlavor}
        selectedCurrentProduct={currentProduct}
        rating={rating}
      />
    </>
  );
};

export default EAAPowder;
