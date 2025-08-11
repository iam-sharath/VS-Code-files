import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { IoMdStar } from "react-icons/io";
import Data from "./data";
import "./item_full_details.css";

const Productdetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((d) => setData(d));
  }, [id]);

  const roundedRating = (rate) => Math.floor(rate * 10) / 10;
  const discountedPrice = (price, discount) =>
    Math.floor(price - price * (discount / 100));

  return (
    <div className="final_data">
      {data ? (
        <>
          <div className="final_item_display">
            <div className="final_image">
              <p className="item_category">{data.category}</p>
              <p className="brand_name">Brand : {data.brand}</p>
              <div className="carousel">
                <Carousel fade>
                  {data.images.map((link, index) => (
                    <Carousel.Item key={index} className="carousel-img">
                      <img
                        src={link}
                        style={{ width: "600px", height: "220px" }}
                        alt={{ index }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className="final_details">
              <h1 className="item_name">{data.title}</h1>
              <p className="item_description">{data.description}</p>

              <div className="item_rating">
                <p className="rating_value">
                  {roundedRating(data.rating)}
                  <p className="star">
                    <IoMdStar />
                  </p>
                </p>
              </div>

              <p className="old_price">
                M.R.P : $ <p>{data.price}</p>
              </p>
              <div className="price_style">
                <p className="discountPercentage">
                  {data.discountPercentage}% off
                </p>
                <p className="final_price">
                  {" "}
                  ${discountedPrice(
                    data.price,
                    roundedRating(data.rating)
                  )}{" "}
                </p>
              </div>

              <p className="stock_info">{data.stock} units available</p>
            </div>
          </div>
          <div>
            <Link to={`/cart`} className="link">
              <button>AddToCart</button>
            </Link>
          </div>
          <div>
            <Data />
          </div>
        </>
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
};

export default Productdetails;

// {

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

// }
