import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const { bike } = location.state;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{bike.title}</h1>
      <img src={bike.large_img} alt={bike.title} className="my-5 w-full max-w-md" />
      <p className="text-lg mt-2">Actual Price: <span className="line-through">₹{bike.actualPrice}</span></p>
      <p className="text-lg mt-2">Offer Price: ₹{bike.offerPrice}</p>
      <p className="text-lg mt-2">You Save: {bike.discountPercentage}%</p>
    </div>
  );
}

export default ProductDetails;
