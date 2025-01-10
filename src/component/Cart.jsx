import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const shippingPrice = 50; // Example shipping price

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const applyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(10); // 10% discount
      alert("Coupon applied! You got a 10% discount.");
    } else {
      alert("Invalid coupon code.");
    }
  };

  const calculateTotal = () => {
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.offerPrice * (1 - discount / 100),
      0
    );
    return totalPrice + shippingPrice;
  };

  return (
    <>
      <section className="ml-0 md:pt-24">
        <h1 className="md:text-center text-start text-3xl md:text-5xl font-extrabold text-zinc-800 p-3 md:p-5">
          Your Cart
        </h1>
        <p className="md:text-center text-start text-lg p-3 md:p-5 pt-0">
          Here are your selected items.
        </p>
      </section>
      <div className="p-10">
        {cartItems.length === 0 ? (
          <p className="text-center shadow-md text-red-600 font-bold text-2xl animate-pulse p-3">
            Your cart is empty
          </p>
        ) : (
          <div className="flex flex-col space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="relative flex items-center justify-between p-4 border border-gray-200 rounded-md"
              >
                <div className="flex items-center space-x-4">
                  {item.large_img && (
                    <img
                      src={item.large_img}
                      alt={item.title}
                      className="h-20 w-20 object-cover"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <p className="text-sm text-gray-600">₹{item.offerPrice}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-600 border border-red-600 rounded-full p-1"
                >
                  <ImCross className="text-xl" />
                </button>
              </div>
            ))}
            {/* Bill Details */}
            <div className="mt-5 p-4 border rounded-md shadow-md">
              <h3 className="text-lg font-bold">Bill Details</h3>
              <p>Shipping Price: ₹{shippingPrice}</p>
              <p>Discount: {discount}%</p>
              <p>Total Items: {cartItems.length}</p>
              <p className="text-xl font-bold">
                Total Price: ₹{calculateTotal().toFixed(2)}
              </p>
            </div>
            {/* Coupon Code */}
            <span>If there is any coupon code is available then enter the code:</span>
            <div className="mt-5 flex space-x-4">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="p-2 border outline-none w-full"
              />
              <button
                onClick={applyCoupon}
                className="bg-zinc-600 text-white px-4 py-2 hover:bg-zinc-700"
              >
                Apply
              </button>
            </div>
            {/* Buy Now Button */}
            <div className="flex justify-center items-center p-3 mt-5">
              <button className="w-full bg-zinc-600 text-white px-6 py-2 hover:bg-zinc-700">
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
