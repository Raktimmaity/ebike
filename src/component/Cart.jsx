import React from "react";

function Cart({ cart }) {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Cart Items</h1>
      {cart.length === 0 ? (
        <p className="mt-5">Your cart is empty!</p>
      ) : (
        <div className="mt-5">
          {cart.map((item, index) => (
            <div key={index} className="mb-5 border-b pb-5">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p>Offer Price: ₹{item.offerPrice}</p>
              <p>Actual Price: ₹{item.actualPrice}</p>
              <p>Discount: {item.discountPercentage}% OFF</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
