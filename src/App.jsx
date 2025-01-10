import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Gallery from './component/Gallery';
import Contacts from './component/Contacts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Information from './component/Information';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import Cart from "./component/Cart";
import ProductDetails from './component/ProductDetails'; // Import the new ProductDetails component
import FormatPassword from './component/FormatPassword';
import PrivacyPolicy from './component/PrivacyPolicy';
import PolicyDisclaimer from './component/PolicyDisclaimer';
import TeamPage from './component/TeamPage';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to the cart!`);
  };

  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Information />
          {/* <Products addToCart={addToCart} /> */}
          <Gallery />
          <Testimonial />
          <Contacts />
          <Footer />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <Navbar />
          <Products addToCart={addToCart} />
          <Footer />
        </>
      ),
    },
    {
      path: "/product/:id", // New route for the product details page
      element: (
        <>
          <Navbar />
          <ProductDetails /> {/* Show the ProductDetails component */}
          <Footer />
        </>
      ),
    },
    {
      path: "/gallery",
      element: (
        <>
          <Navbar />
          <Gallery />
          <Footer />
        </>
      ),
    },
    {
      path: "/contacts",
      element: (
        <>
          <Navbar />
          <Contacts />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />
          <Signup />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar />
          <Cart cart={cart} />
          <Footer />
        </>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <>
          <Navbar />
          <FormatPassword />
          <Footer />
        </>
      ),
    },
    {
      path: "/privacy-policy",
      element: (
        <>
          <Navbar />
          <PrivacyPolicy />
          <Footer />
        </>
      ),
    },
    {
      path: "/disclaimer",
      element: (
        <>
          <Navbar />
          <PolicyDisclaimer />
          <Footer />
        </>
      ),
    },
    {
      path: "/team",
      element: (
        <>
          <Navbar />
          <TeamPage />
          <Footer />
        </>
      ),
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
