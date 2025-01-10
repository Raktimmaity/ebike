import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Products() {
  const [ebikes, setEbikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEbikes = async () => {
      try {
        const response = await axios.get('https://bikeindex.org/api/v3/search', {
          params: {
            query: 'e-bike',
            per_page: 24,
            page: 1,
            access_token: 'YOUR_ACCESS_TOKEN',
          },
        });

        const bikesWithPrices = response.data.bikes.map((bike) => {
          const offerPrice = generateRandomPrice();
          const actualPrice = generateRandomActualPrice(offerPrice);
          const discountPercentage = calculateDiscountPercentage(actualPrice, offerPrice);

          return {
            ...bike,
            offerPrice,
            actualPrice,
            discountPercentage,
          };
        });

        setEbikes(bikesWithPrices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching e-bikes:', error);
        setLoading(false);
      }
    };

    fetchEbikes();
  }, []);

  const generateRandomPrice = () => Math.floor(Math.random() * (70000 - 30000 + 1)) + 30000;
  const generateRandomActualPrice = (offerPrice) => offerPrice + Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000;
  const calculateDiscountPercentage = (actualPrice, offerPrice) => Math.round(((actualPrice - offerPrice) / actualPrice) * 100);

  const addToCart = (bike) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(bike);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert(`${bike.title} added to cart!`);
  };

  return (
    <>
      <section className="ml-0 md:pt-24">
        <h1 className="md:text-center text-start text-3xl md:text-5xl font-extrabold text-zinc-800 p-3 md:p-5">
          Products Page
        </h1>
        <p className="md:text-center text-start text-lg p-3 md:p-5 pt-0">
          In this page you will find electric bikes based on your requirements
        </p>
      </section>
      <div className="flex flex-wrap justify-center items-center">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-gray-200 shadow-md animate-pulse"
            >
              <div className="h-60 bg-gray-300"></div>
              <div className="mt-4 px-5 pb-5">
                <div className="h-6 bg-gray-300 mb-3"></div>
                <div className="h-6 bg-gray-300 w-1/2"></div>
              </div>
            </div>
          ))
        ) : (
          ebikes.map((bike) => (
            <div
              key={bike.id}
              className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg"
            >
              <Link to={`/product/${bike.id}`} state={{ bike }}>
                <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                  {bike.large_img && <img
                    className="object-cover"
                    src={bike.large_img}
                    alt={bike.title}
                  />}
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {bike.discountPercentage}% OFF
                  </span>
                </div>
              </Link>
              <div className="mt-4 px-5 pb-5">
              <Link to={`/product/${bike.id}`} state={{ bike }}>
                <h5 className="font-bold text-xl tracking-tight text-slate-900">{bike.title}</h5>
                </Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">₹{bike.offerPrice}</span>
                    <span className="text-sm text-slate-900 line-through ml-2">₹{bike.actualPrice}</span>
                  </p>
                </div>
                <button
                  onClick={() => addToCart(bike)}
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Products;
