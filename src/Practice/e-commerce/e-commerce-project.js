import React, { useEffect, useState } from "react";
import "./e-comm.css";
import { Link } from "react-router-dom";
import Ecomnav from './e-nav'

const ProjectEcomm = () => {
  const [data, setData] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((d) => setData(d.products));
  }, []);

  const handleFilterByCategory = (category) => {
    setCategoryFilter(category);
  };

  const handleSearchInputChange = (query) => {
    setSearchQuery(query);
  };

  const filteredData = data.filter(item => {
    if (categoryFilter && item.category !== categoryFilter) {
      return false;
    }
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="shop">
       <Ecomnav onSearchInputChange={handleSearchInputChange} /> {/* Pass the search input change handler */}
       <div className="filter">
        <button onClick={() => handleFilterByCategory(null)}>All</button>
        <button onClick={() => handleFilterByCategory("smartphones")}>Mobils</button>
        <button onClick={() => handleFilterByCategory("laptops")}>laptops</button>
        <button onClick={() => handleFilterByCategory("fragrances")}>Fragrances</button>
        <button onClick={() => handleFilterByCategory("skincare")}>Skincare</button>
        <button onClick={() => handleFilterByCategory("groceries")}>Groceries</button>
        <button onClick={() => handleFilterByCategory("home-decoration")}>Home-decoration</button>
       </div>
       
    <div className="product">
      {filteredData.length === 0 ? (
        <p className="noproduct">No products found</p>
      ) : (
        filteredData.map((item) => (
          <ul className="product_list" key={item.id}>

            <Link to={`/productdetails/${item.id}`} className="link">

              <li className="product_sub_list">

                <li className="thumbnail_image" key={`image-${item.id}`}>
                  <img src={item.thumbnail} alt="thumbanil_image"/>
                </li>

                <li className="brand" key={`brand-${item.id}`}>
                  <p>Brand</p>{item.brand}
                </li>

                <li className="title" key={`title-${item.id}`}>
                  {item.title}
                </li>

                <li className="price" key={`price-${item.id}`}>
                  ₹{item.price}
                 </li>

              </li>
            </Link>
          </ul>
        ))
      )}
    </div>
  </div>
  );
};

export default ProjectEcomm;
