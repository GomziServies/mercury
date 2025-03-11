import React from "react";
import "../assets/css/nutrition.css";
import Product from "./product";

const PeanutButter = () => {
  const productImages = {
    "1kg-mango": ["/images/product/peanut-butter.webp"],
  };

  const products = [
    {
      key: "1kg-mango",
      data: {
        name: "Peanut Butter mango",
        price: "1499",
        discount: "899",
      },
    },
  ];

  const sizeOptions = [{ id: "1kg", label: "1kg" }];

  const flavorOptions = [
    { id: "mango", label: "mango" },
  ];

  const activeSize = "1kg";
  const activeFlavor = "mango";
  const currentProduct = "1kg-mango";
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

export default PeanutButter;
