import React, { useState, useEffect } from "react";
import image1 from "../images/carousel/screen-1.png";
import image2 from "../images/carousel/screen-2.png";
import image3 from "../images/carousel/screen-3.png";
import image4 from "../images/carousel/screen-4.png";
import image5 from "../images/carousel/screen-5.png";

const Carousel: React.FC = () => {
  interface StateInterface {
    showImage: any;
    startSlide: number;
  }

  const [state, setState] = useState<StateInterface>({
    showImage: image1,
    startSlide: 0
  });

  useEffect(() => {
    const images = [image1, image2, image3, image4, image5];
    let currentIndex = state.startSlide;
    if (currentIndex < 4) currentIndex++;
    else currentIndex = 1;
    setTimeout(() => {
      setState({
        showImage: images[currentIndex],
        startSlide: currentIndex
      });
    }, 5000);
  }, [state, setState]);

  return (
    <div className="carousel">
      <img src={state.showImage} alt='Carousel'></img>
    </div>
  );
};

export { Carousel };
