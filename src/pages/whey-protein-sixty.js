import React from "react";
import "../assets/css/nutrition.css";
import Product from "./product";

const WheyProteinSixty = () => {
  const productImages = {
    "2kg-Chocolate": ["/images/product/whey-protein-60-chocolate.webp"],
    "2kg-Mawa Kulfi": ["/images/product/whey-protein-60-mawa-kulfi.webp"],
    "2kg-Mocha Coffee": ["/images/product/whey-protein-60-mocha-coffee.webp"],
  };

  const products = [
    {
      key: "2kg-Chocolate",
      data: {
        name: "Whey Protein 60% Chocolate",
        price: "5999",
        discount: "3899",
      },
    },
    {
      key: "2kg-Mawa Kulfi",
      data: {
        name: "Whey Protein 60% Mawa Kulfi",
        price: "5999",
        discount: "3899",
      },
    },
    {
      key: "2kg-Mocha Coffee",
      data: {
        name: "Whey Protein 60% Mocha Coffee",
        price: "5999",
        discount: "3899",
      },
    },
  ];

  const sizeOptions = [
    { id: "2kg", label: "2kg" },
  ];

  const flavorOptions = [
    { id: "Chocolate", label: "Chocolate" },
    { id: "Mawa Kulfi", label: "Mawa Kulfi" },
    { id: "Mocha Coffee", label: "Mocha Coffee" },
  ];

  const activeSize = "2kg";
  const activeFlavor = "Chocolate";
  const currentProduct = "2kg-Chocolate";
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

export default WheyProteinSixty;
