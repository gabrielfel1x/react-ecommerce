import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Product from "./components/Product";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <>
      <Navbar setOpenCart={setOpenCart} />
      {openCart && <Cart setOpenCart={setOpenCart} />}
      <Home />
      <Services />
      <Product />
      <Banner />
    </>
  );
}

export default App;
