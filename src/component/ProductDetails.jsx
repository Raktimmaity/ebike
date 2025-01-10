import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify components
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bike } = location.state;

  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    bike.quantity = quantity;
    cartItems.push(bike);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Show toast notification
    toast.success(`${bike.title} added to cart!`, {
      position: "top-right", // Position of the toast
      autoClose: 3000, // Duration in ms
      hideProgressBar: false, // Show progress bar
      closeOnClick: true, // Close on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Make draggable
      theme: "dark",
    });
  };

  const buyNow = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    bike.quantity = quantity;
    cartItems.push(bike);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    toast.success(`${bike.title} added to cart! Now redirecting to checkout.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    navigate("/checkout");
  };

  const dateStolen = new Date(bike.date_stolen * 1000).toLocaleString();

  return (
    <>
      <section className="ml-0 md:pt-24">
        <h1 className="md:text-center text-start text-3xl md:text-5xl font-extrabold text-zinc-800 p-3 md:p-5">
          Product Details
        </h1>
        <p className="md:text-center text-start text-lg p-3 md:p-5 pt-0">
          See the details of the product
        </p>
      </section>
      <div className="p-10 pb-20">
        <div className="max-w-4xl mx-auto shadow-2xl p-3">
          <div className="flex flex-col md:flex-row space-y-6 md:space-x-6">
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap">
                <img
                  src={bike.large_img || "default-image.jpg"} // fallback image if null
                  alt={bike.title}
                  className="object-cover w-full h-80 rounded-xl"
                />
                <div className="w-full flex flex-wrap justify-center items-center">
                  <div className="space-x-4 mt-6">
                    <button
                      onClick={addToCart}
                      className="px-6 py-2.5 bg-slate-900 text-white rounded-md hover:bg-slate-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add to Cart
                    </button>
                    <button
                      onClick={buyNow}
                      className="px-6 py-2.5 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">{bike.title}</h2>
              <div className="flex flex-wrap justify-start items-center">
                <p className="text-gray-600 font-bold text-2xl">
                  ₹{bike.offerPrice}
                </p>
                <p className="text-sm text-gray-400 line-through">
                  ₹{bike.actualPrice}
                </p>
              </div>
              <p className="text-lg text-white p-1 mt-3 rounded-full bg-zinc-700 inline">
                {bike.discountPercentage}% OFF
              </p>

              {/* Product Description */}
              <div className="mt-4">
                <h3 className="text-xl font-bold">Description</h3>
                <p>{bike.description}</p>
              </div>

              {/* Stolen Information */}
              <div className="mt-4 bg-gray-200 p-4 rounded-lg">
                <p>
                  Manufacturer Name:{" "}
                  <span className=" font-bold">{bike.manufacturer_name}</span>
                </p>
                <p>
                  Frame Model:{" "}
                  <span className=" font-bold">{bike.frame_model}</span>
                </p>
                <p>
                  Serial No.: <span className=" font-bold">{bike.serial}</span>
                </p>
                <p>
                  Year of Manufacture:{" "}
                  <span className=" font-bold">{bike.year}</span>
                </p>
              </div>

              {/* Frame Colors */}
              <div className="mt-4">
                <h3 className="text-xl font-bold">Colors Available</h3>
                <div className="flex space-x-4 mt-2">
                  {bike.frame_colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full border border-1 border-black"
                      style={{
                        backgroundColor: color.toLowerCase(), // Apply the color dynamically
                      }}
                      title={color} // Display the color name as a tooltip on hover
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ToastContainer for rendering the toast notifications */}
      <ToastContainer />
    </>
  );
}

export default ProductDetails;
