import "../css/slider.css";
import { Carousel } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <div className="slider" id="newcar">
      <Carousel transition={{ duration: 1 }} className="rounded-xl">
        <img src="slider1.png" alt="image 1" className="img" />
        <img src="slider2.png" alt="image 2" className="img" />
        <img src="slider3.png" alt="image 3" className="img" />
      </Carousel>
    </div>
  );
}
