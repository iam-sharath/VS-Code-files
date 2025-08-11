import { Routes, Route } from "react-router-dom";
import Topwear from "./NavBar/topwear";
import Bottomwear from "./NavBar/bottomwar";
import Footwear from "./NavBar/footwear";
import Accessories from "./NavBar/accessories";
import Navbar from "./NavBar/navbar";
import Mainhome from "./NavBar/home";
import Nopage from "./NavBar/nopage";
import Login from "../login";
import Cart from "./cart";
import { createContext, useState } from "react";
import Wishlist from "./wishlist";

export const authOfpage = createContext();

const Mayroutes = () => {
  const [isauth, setIsauth] = useState(false);
  return (
    <>
      <authOfpage.Provider value={{ isauth, setIsauth }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/topwear" element={<Topwear />} />
          <Route path="/bottomwear" element={<Bottomwear />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </authOfpage.Provider>
    </>
  );
};

export default Mayroutes;
