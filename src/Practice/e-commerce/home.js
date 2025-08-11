// import { Carousel } from "react-bootstrap";
// import nike from "./Image/aa-Nike-Adidasorigina.jpeg";
// import dnmx from "./Image/aa-DNMX-MAX.jpeg";
// import five from "./Image/aa-five.jpeg";
import ele from "./Image/ele.jpeg";
import "./e-nav.css";
import Secondlineimages from "./home-images/secondlineimages";

const Home = () => {
  return (
    <div className="home_page">
      <div className="down_navbar">
        <div className="offer_loop">
          <p>Up To 60% off on Men's Casual Wear</p>
        </div>
      </div>

      <div className="headphones">
        <img src={ele} alt="headphones+link" className="img-fluid" />
      </div>
      <div>
        {/* <div>
          <Carousel indicators={false} className="caro">

            <Carousel.Item interval={1500} className="carousel_img">
              <img src={nike} alt="nike" className="d-block w-100 img-fluid" />
            </Carousel.Item>
            <Carousel.Item interval={1500} className="carousel_img">
              <img src={dnmx} alt="dnmx" className="d-block w-100 img-fluid" />
            </Carousel.Item>
            <Carousel.Item interval={1500} className="carousel_img">
              <img src={five} alt="five" className="d-block w-100 img-fluid" />
            </Carousel.Item>
          </Carousel>
        </div> */}
        <Secondlineimages />
      </div>
    </div>
  );
};

export default Home;
