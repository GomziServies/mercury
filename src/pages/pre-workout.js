import React from "react";
import "../assets/css/nutrition.css";
import Product from "./product";

const PreWorkoutPowder = () => {
  const productImages = {
    "250g-Fruit Punch": ["/images/product/fruit-punch-250.webp"],
    "250g-Green Apple": ["/images/product/green-apple-250.webp"],
  };

  const products = [
    {
      key: "250g-Fruit Punch",
      data: {
        name: "Pre-Workout Fruit Punch",
        price: "1799",
        discount: "1169",
      },
    },
    {
      key: "250g-Green Apple",
      data: {
        name: "Pre-Workout Green Apple",
        price: "1799",
        discount: "1169",
      },
    },
  ];

  const sizeOptions = [{ id: "250g", label: "250g" }];

  const flavorOptions = [
    { id: "Fruit Punch", label: "Fruit Punch" },
    { id: "Green Apple", label: "Green Apple" },
  ];

  const activeSize = "250g";
  const activeFlavor = "Fruit Punch";
  const currentProduct = "250g-Fruit Punch";
  const rating = "4.7";
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

export default PreWorkoutPowder;
