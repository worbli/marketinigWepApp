import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import image1 from "../images/carousel/screen-1.webp";
import image2 from "../images/carousel/screen-2.webp";
import image3 from "../images/carousel/screen-3.webp";
import image4 from "../images/carousel/screen-4.webp";
import image5 from "../images/carousel/screen-5.webp";

const Carousel: React.FC = () => {
  interface StateInterface {
    showImage: any;
    startSlide: number;
    index: number;
  }

  const [state, setState] = useState<StateInterface>({
    showImage: image1,
    startSlide: 0,
    index: 0
  });

  const images = [image1, image2, image3, image4, image5];
  images.forEach((image) => {
      new Image().src = image
  });

  const sliderStyle = {
    backgroundImage: "url(" + state.showImage + ")"
  };
  const getText = (index: number) => {
    if (index === 0) {
      return (
        <div className="carousel--text-container carousel--dark">
          <h2>Enterprise Grade</h2>
          <h3>financially compliant blockchain</h3>
        </div>
      );
    }
    if (index === 1) {
      return (
        <div className="carousel--text-container">
          <h2>A new dawn</h2>
          <h3>where traditional finance and emerging fintech collaborate</h3>
        </div>
      );
    }
    if (index === 2) {
      return (
        <div className="carousel--text-container carousel--dark">
          <h2>Everyone is welcome</h2>
          <h3>making financial inclusion a reality</h3>
        </div>
      );
    }
    if (index === 3) {
      return (
        <div className="carousel--text-container">
          <h2>Always on</h2>
          <h3>finance never sleep in a global economy</h3>
        </div>
      );
    }
    if (index === 4) {
      return (
        <div className="carousel--text-container carousel--dark">
          <h2>We got you</h2>
          <h3>
            our complience infrastructure covers you everywhere you do business
          </h3>
        </div>
      );
    }
  };

  const chipStyle = (index: number, position: number) => {
    const chipOn = {
      backgroundColor: "rgba(255,255,255, 1)"
    };
    const chipOff = {
      backgroundColor: "rgba(255,255,255, 0.5)"
    };
    if (index === position) return chipOn;
    else return chipOff;
  };


  useEffect(() => {
    const images = [image1, image2, image3, image4, image5];
    let currentIndex = state.startSlide;
    if (currentIndex < 4) currentIndex++;
    else currentIndex = 0;
    setTimeout(() => {
      setState({
        showImage: images[currentIndex],
        startSlide: currentIndex,
        index: currentIndex
      });
    }, 7000);
  }, [state, setState]);

  return (
    <div className="carousel">
      <div className="carousel--location">
        <div className="carousel--container">
          <div
            className="carousel--location-chip"
            style={chipStyle(state.index, 0)}
          ></div>
          <div
            className="carousel--location-chip"
            style={chipStyle(state.index, 1)}
          ></div>
          <div
            className="carousel--location-chip"
            style={chipStyle(state.index, 2)}
          ></div>
          <div
            className="carousel--location-chip"
            style={chipStyle(state.index, 3)}
          ></div>
          <div
            className="carousel--location-chip"
            style={chipStyle(state.index, 4)}
          ></div>
        </div>
      </div>
      <TransitionGroup>
        <CSSTransition
          key={state.index || ''}
          timeout={600}
          classNames='carousel--slider'
        >
      <div className="carousel--slider" style={sliderStyle}>
        {getText(state.index)}
      </div>
      </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export { Carousel };
