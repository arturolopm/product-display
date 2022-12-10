import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IndexHeader from "@/components/header/IndexHeader";
import IndexProducts from "@/components/product/IndexProducts";
import Contact from "@/components/contact/Contact";

import CartDetailsProvider from "@/context/useCartDetails";
import Home from "@/components/home/Home";
import Footer from "@/components/footer/Footer";

const App = () => {
  return (
    <>
      <CartDetailsProvider>
        <Router>
          <Routes>
            <Route path="/" element={[<IndexHeader />, <Home />]} />
            <Route
              path="/products"
              element={[<IndexHeader />, <IndexProducts />]}
            />
            <Route path="/contact" element={[<IndexHeader />, <Contact />]} />
          </Routes>
        </Router>
      </CartDetailsProvider>
      <Footer />
    </>
  );
};

export default App;
