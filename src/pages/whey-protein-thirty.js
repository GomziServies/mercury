import React from "react";
import "../assets/css/nutrition.css";
import Product from "./product";

const WheyProteinThirty = () => {
  const productImages = {
    "2kg-Chocolate": ["/images/product/whey-protein-35-chocolate.webp"],
    "2kg-Mawa Kulfi": ["/images/product/whey-protein-35-mawa-kulfi.webp"],
    "2kg-Mocha Coffee": ["/images/product/whey-protein-35-mocha-coffee.webp"],
  };

  const products = [
    {
      key: "2kg-Chocolate",
      data: {
        name: "Whey Protein 35% Chocolate",
        price: "4999",
        discount: "3499",
      },
    },
    {
      key: "2kg-Mawa Kulfi",
      data: {
        name: "Whey Protein 35% Mawa Kulfi",
        price: "4999",
        discount: "3499",
      },
    },
    {
      key: "2kg-Mocha Coffee",
      data: {
        name: "Whey Protein 35% Mocha Coffee",
        price: "4999",
        discount: "3499",
      },
    },
  ];

  const sizeOptions = [{ id: "2kg", label: "2kg" }];

  const flavorOptions = [
    { id: "Chocolate", label: "Chocolate" },
    { id: "Mawa Kulfi", label: "Mawa Kulfi" },
    { id: "Mocha Coffee", label: "Mocha Coffee" },
  ];

  const activeSize = "2kg";
  const activeFlavor = "Chocolate";
  const currentProduct = "2kg-Chocolate";
  const rating = "4.5";
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

export default WheyProteinThirty;
