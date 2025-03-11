import React, { useEffect, useState } from "react";
import "../assets/css/nutrition.css";
import Product from "./product";
import { useLocation } from "react-router-dom";

const MassGainerProtein = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const ProductSize = searchParams.get("size");
  const ProductFlavor = searchParams.get("flavor") || "Chocolate";

  const productImages = {
    "3kg-Chocolate": ["/images/product/mass-gainer-chocolate-3kg.webp"],
    "5kg-Chocolate": ["/images/product/mass-gainer-chocolate-5kg.webp"],
    "3kg-Mawa Kulfi": ["/images/product/mass-gainer-mawa-kulfi-3kg.webp"],
    "5kg-Mawa Kulfi": ["/images/product/mass-gainer-mawa-kulfi-5kg.webp"],
  };

  const products = [
    {
      key: "3kg-Chocolate",
      data: {
        name: "Mass Gainer Chocolate",
        price: "3999",
        discount: "2599",
      },
    },
    {
      key: "5kg-Chocolate",
      data: {
        name: "Mass Gainer Chocolate",
        price: "5999",
        discount: "3899",
      },
    },
    {
      key: "3kg-Mawa Kulfi",
      data: {
        name: "Mass Gainer Mawa Kulfi",
        price: "3999",
        discount: "2599",
      },
    },
    {
      key: "5kg-Mawa Kulfi",
      data: {
        name: "Mass Gainer Mawa Kulfi",
        price: "5999",
        discount: "3899",
      },
    },
  ];

  const sizeOptions = [
    { id: "3kg", label: "3kg" },
    { id: "5kg", label: "5kg" },
  ];

  const flavorOptions = [
    { id: "Chocolate", label: "Chocolate" },
    { id: "Mawa Kulfi", label: "Mawa Kulfi" },
  ];

  const [activeSize, setActiveSize] = useState(ProductSize || "3kg");
  const [activeFlavor, setActiveFlavor] = useState(ProductFlavor);
  const [currentProduct, setCurrentProduct] = useState(
    `${activeSize}-${activeFlavor}`
  );

  const rating = "4.4";

  useEffect(() => {
    if (ProductSize) {
      setActiveSize(ProductSize);
      setCurrentProduct(`${ProductSize}-${ProductFlavor}`);
    }
  }, [ProductSize, ProductFlavor]);

  return (
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
  );
};

export default MassGainerProtein;
