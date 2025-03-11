import React from "react";
import "../assets/css/nutrition.css";
import Product from "./product";

const WheyProteinIsolate = () => {
  const productImages = {
    "2kg-Chocolate": ["/images/product/isolate-chocolate.webp"],
    "2kg-Mawa Kulfi": ["/images/product/isolate-mawakulfi.webp"],
  };

  const products = [
    {
      key: "2kg-Chocolate",
      data: {
        name: "Whey Protein Isolate Chocolate",
        price: "7999",
        discount: "5439",
      },
    },
    {
      key: "2kg-Mawa Kulfi",
      data: {
        name: "Whey Protein Isolate Mawa Kulfi",
        price: "7999",
        discount: "5439",
      },
    },
    {
      key: "2kg-Mocha Coffee",
      data: {
        name: "Whey Protein Isolate Mocha Coffee",
        price: "7999",
        discount: "5439",
      },
    },
  ];

  const sizeOptions = [{ id: "2kg", label: "2kg" }];

  const flavorOptions = [
    { id: "Chocolate", label: "Chocolate" },
    { id: "Mawa Kulfi", label: "Mawa Kulfi" },
  ];

  const activeSize = "2kg";
  const activeFlavor = "Chocolate";
  const currentProduct = "2kg-Chocolate";
  const rating = "4.8";
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

export default WheyProteinIsolate;
