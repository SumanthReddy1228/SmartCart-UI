import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Login from "./Components/Login.jsx";
import Cart from "./Components/Cart.jsx";
import Home from "./Components/Home.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import { productsLoader } from "./Components/Home.jsx";
import { contactAction } from "./Components/Contact.jsx";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./Components/ProductDetail.jsx";
import { CartContext, CartProvider } from "./store/cart-context.jsx";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} loader={productsLoader} />
    <Route path="/home" element={<Home />} loader={productsLoader} />
    <Route path="/contact" element={<Contact />} action={contactAction} />
    <Route path="/login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<About />} />
    <Route path="/products/:productId" element={<ProductDetail />} />
  </Route>,
);

const appRouter = createBrowserRouter(routeDefinitions);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={appRouter} />
    </CartProvider>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
      transition={Bounce}
    />
  </StrictMode>,
);
