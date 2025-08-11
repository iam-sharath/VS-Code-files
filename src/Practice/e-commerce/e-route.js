import React from 'react';
import{Routes,Route} from "react-router-dom"
import ProjectEcomm from './e-commerce-project';
import Productdetails from './e-productdetails';
import Ecomnav from './e-nav';
import Home from './home';
import './e-nav.css'
import Cart from './cart';

const RouteEcom = () => {
  return (
    <>
    <Ecomnav/>
    <div className='content'>
    <Routes>
     
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/shop" element={<ProjectEcomm/>} />
        <Route path="/productdetails/:id" element={<Productdetails/>}/>
        <Route path="/cart" element={<Cart/>}/>


    </Routes>
    </div>
    </>
  );
};

export default RouteEcom;
