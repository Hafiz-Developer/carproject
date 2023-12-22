import "../css/MidData.css";
import { AiOutlineCar  } from "react-icons/ai";
import { GiAutoRepair } from "react-icons/gi";
import { FaRegAddressCard } from "react-icons/fa";
import { CarouselTransition } from "./slider";
import Model from "./model";
import Fotter from "./fotter";
import ScrollToTopButton from "./ScrollToTopButton";
export default function MidData() {

  return (
    <>
      <div className="midData">
        <h2>GET YOUR DESIRED CAR IN RESONABLE PRICE</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua .
        </p>
        <button type="button">contact us</button>
      </div>
      <div className="inputbox">
        {/* <div className="row"> */}

        <div className="single-model-search">
          <h2>select year</h2>
          <div className="model-select-icon">
            <select className="form-control">
              <option value="default">year</option>

              <option value="2018">2018</option>

              <option value="2017">2017</option>
              <option value="2016">2016</option>
            </select>
          </div>
        </div>
        <div className="single-model-search">
          <h2>Select Make</h2>
          <div className="model-select-icon">
            <select className="form-control">
              <option value="default">make</option>

              <option value="2018">toyota</option>

              <option value="2017">audi</option>
              <option value="2016">parado</option>
            </select>
          </div>
        </div>
        <div className="single-model-search">
          <h2>Select Model</h2>
          <div className="model-select-icon">
            <select className="form-control">
              <option value="default">model</option>

              <option value="2018">2024</option>

              <option value="2017">2023</option>
              <option value="2016">2022</option>
            </select>
          </div>
        </div>
        <div className="single-model-search">
          <h2>body style</h2>
          <div className="model-select-icon">
            <select className="form-control">
              <option value="default">style</option>

              <option value="2018">dean</option>

              <option value="2017">van</option>
              <option value="2016">roaster</option>
            </select>
          </div>
        </div>
        <div className="single-model-search">
          <h2>Car Condition</h2>
          <div className="model-select-icon">
            <select className="form-control">
              <option value="default">condition</option>

              <option value="2018">new</option>

              <option value="2017">old</option>
              <option value="2016">dull</option>
            </select>
          </div>
        </div>
        <div className="single-model-search">
          <h2>select price</h2>
          <div className="model-select-icon">
            <select className="form-control">
              <option value="default">price</option>

              <option value="2018">$10000</option>

              <option value="2017">$125400</option>
              <option value="2016">$23505</option>
            </select>
          </div>
        </div>
        <div className="search">
          <button type="button">search</button>
        </div>
        {/* </div> */}
      </div>

      <div className="carRepiar" id="services">
        <div className="box">
          <AiOutlineCar className="icon" />
          <h2>largest dealership of car</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            den fugit sed quia.
          </p>
          <div className="line"></div>
        </div>
        <div className="box">
          <GiAutoRepair className="icon" />
          <h2>unlimited repeair warrenty</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            den fugit sed quia.
          </p>
          <div className="line"></div>
        </div>
        <div className="box">
          <FaRegAddressCard className="icon" />
          <h2>insurance support</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            den fugit sed quia.
          </p>
          <div className="line"></div>
        </div>
      </div>

      <div className="latesCar">
        <h3>Checkout the Latest Cars</h3>
        <h2>Newest Cars</h2>
        <div className="line2"></div>
      </div>

      <CarouselTransition />

      <div className="latesCar">
        <h3>Checkout the feature Cars</h3>
        <h2>feature Cars</h2>
        <div className="line2"></div>
      </div>

      <Model />
      <div className="clientSay">
        <div className="latesCar">
          <h2>What Our Clients Say</h2>
          <div className="line2"></div>
        </div>
        <div className="clientAllbox">
          <div className="clientBox">
            <div className="img">
              <img src="men1.png" alt="" />
            </div>
            <p>
              Sed ut pers unde omnis iste natus error sit voluptatem accusantium
              dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
            </p>
            <h2>
              john doe <br /> new york
            </h2>
          </div>
          <div className="clientBox">
            <div className="img">
              <img src="girl1.png" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              nesciunt non repellendus voluptates at a dolores dolore maiores
              sunt facilis.
            </p>
            <h2>
              shumila bahji <br /> new york
            </h2>
          </div>
          <div className="clientBox">
            <div className="img">
              <img src="men2.png" alt="" />
            </div>
            <p>
              Sed ut pers unde omnis iste natus error sit voluptatem accusantium
              dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.
            </p>
            <h2>
              kemey demy <br /> new york
            </h2>
          </div>
        </div>
      </div>

      <div className="slider2" id="brands">
        <div className="sliderTrack">
          <div className="slide">
            <img src="carlogo1.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo2.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo3.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo4.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo5.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo6.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo7.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo8.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo9.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo10.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo11.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo12.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo6.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo4.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo2.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo8.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo10.png" alt="" />
          </div>
          <div className="slide">
            <img src="carlogo12.png" alt="" />
          </div>
        </div>
      </div>
   <ScrollToTopButton/>
      <Fotter />
    </>
  );
}
