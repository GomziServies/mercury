import React from "react";
import "../assets/css/nutrition.css";
import Product from "./product";

const CreatinePowder = () => {
  const productImages = {
    "250g-Orange": ["/images/product/creatine-250.webp"],
  };

  const products = [
    {
      key: "250g-Orange",
      data: {
        name: "Creatine Orange",
        price: "1699",
        discount: "934",
      },
    },
  ];

  const sizeOptions = [{ id: "250g", label: "250g" }];

  const flavorOptions = [
    { id: "Orange", label: "Orange" },
  ];

  const activeSize = "250g";
  const activeFlavor = "Orange";
  const currentProduct = "250g-Orange";
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

export default CreatinePowder;
