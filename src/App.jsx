import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Components/layout/Layout";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import ReturnsPage from "./pages/ReturnsPage";
import FaqPage from "./pages/FaqPage";
import ShippingPage from "./pages/ShippingPage";
import CartPage from "./pages/CartPage";


function App() {

  return (

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;