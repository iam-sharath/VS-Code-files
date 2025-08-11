import React, { useState } from "react";
import "./e-nav.css";
import { FaSearch } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import logo from "./Image/logo.png";

const Ecomnav = ({ onSearchInputChange }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    onSearchInputChange(value);
  };

  return (
    <header className="header">
      <div className="top_nav_bar">
        <div className="logo">
          <img src={logo} title="SRBCART" alt="logo" />
          {/* <strong>SRB CART</strong>  */}
        </div>

        <Link to="/shop" className="link">
          <div className="search_bar">
            <input
              type="text"
              value={searchValue}
              placeholder="serach"
              onChange={handleInputChange}
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </Link>

        {isAuthenticated ? (
          //logout
          <div className="logout" title="Logout">
            <div className="logout_icon">
              <TbLogout2 />
            </div>

            <div className="logout_button">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="logout_button"
              >
                {" "}
                Logout
              </button>
            </div>
          </div>
        ) : (
          //login
          <div className="login" title="Login">
            <div className="login_icon">
              <TbLogin2 />
            </div>

            <div className="login_button">
              <button onClick={() => loginWithRedirect()} className="login_button">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="second_navbar">
        {/* user profile */}
        <div className="user" title="user">
          {isAuthenticated ? (
            <>
              <div className="icon">
                <FaRegUserCircle />
              </div>
              <div className="info">
                <strong>{user.name}</strong>
                <p>{user.email}</p>
              </div>
            </>
          ) : (
            <>
              <div className="user_before_login">
                <div className="icon_before_login">
                  <FaRegUserCircle />
                </div>
                <p title="Please Login">Please Login...</p>
              </div>
            </>
          )}
        </div>
        <div className="nav">
          <ul>
            <li title="Home">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" className="link">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/showitem" className="link">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                CART
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Ecomnav;
//   id: 1,

//   title: 'iPhone 9',

//   description: 'An apple mobile which is nothing like apple',

//   price: 549,

//   discountPercentage: 12.96,

//   rating: 4.69,

//   stock: 94,

//   brand: 'Apple',

//   category: 'smartphones',

//   thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',

//   images: [

//     'https://cdn.dummyjson.com/product-images/1/1.jpg', 'https://cdn.dummyjson.com/product-images/1/2.jpg',

//     'https://cdn.dummyjson.com/product-images/1/3.jpg', 'https://cdn.dummyjson.com/product-images/1/4.jpg',

//     'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'

//   ]
