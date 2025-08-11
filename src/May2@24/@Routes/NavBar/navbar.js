import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { authOfpage } from "../routes";

const Navbar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const { isauth } = useContext(authOfpage);
  return (
    <nav>
      <li className="nav-main-links">
        <Link to="/">HOME</Link>
        <Link to="/topwear">TOPWEAR</Link>
        <Link to="/bottomwear">BOTTOMWEAR</Link>
        <Link to="/footwear">FOOTWEAR</Link>
        <Link to="/accessories">ACCESSORIES</Link>
      </li>

      <li className="nav-search">
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="search" name="search" />
          <button className="search-button">
            <IoSearchSharp className="search" />
          </button>
        </form>
      </li>

      <li className="nav-sub-links">
        <Link to="/login">
          <FaRegUser />
        </Link>
        <Link to="/wishlist">
          <FaRegHeart />
        </Link>
        <Link to="/cart">
          <RiShoppingCartLine />
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
