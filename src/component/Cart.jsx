import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <>
    <section className="ml-0 md:pt-24">
        <h1 className="md:text-center text-start text-3xl md:text-5xl font-extrabold text-zinc-800 p-3 md:p-5">
          Your Cart
        </h1>
        <p className="md:text-center text-start text-lg p-3 md:p-5 pt-0">
          In this page you will find eyour Add to Cart Items
        </p>
      </section>
    <div className="p-10">
      {/* <h1 className="text-4xl font-bold mb-5">Cart</h1> */}
      {cartItems.length === 0 ? (
        <p className="text-center shadow-md text-red-600 font-bold text-2xl animate-pulse p-3">Your cart is empty</p>
      ) : (
        <div className="flex flex-col space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-md"
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
                className="bg-red-600 p-2 text-white rounded-md hover:bg-red-700"
              >
                Remove <MdDelete className="inline text-xl" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default Cart;
