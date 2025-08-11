import React, { useContext } from 'react'
import { authOfpage } from './routes';
import { useNavigate } from "react-router";

const Wishlist = () => {
    const {isauth} = useContext(authOfpage);

const loginNavigate = useNavigate();

  const handleLoginNavigate = (e) => {
    e.preventDefault();
    loginNavigate("/login");
  };
  return (
    <center>
    {isauth ? (
      <h1>Wishlist</h1>
    ) : (
      <button className="btn btn-primary btn-lg" data-toggle="button" onClick={handleLoginNavigate}>
        Sign up/Log in
      </button>
    )}
  </center>
  )
}

export default Wishlist;