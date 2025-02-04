import React from "react";
import "../styles/CarouselElement.css";
import { Link } from "react-router-dom";

function CarouselElement(props) {
  const isInternalLink = props.link === "/";

  return (
    <>
      {isInternalLink ? (
        <Link to={props.link} className="externalLink">
          <div className="elementContainer">
            {/* <picture>
              <source srcset="img.webp" type="image/webp"/>
              <source srcset="img.jpg" type="image/jpeg"/> 
              <img src="img.jpg"/>
            </picture> */}
            {/* aspect-ratio: 16 / 9; */}
            <img src={props.img} alt={`Slide ${props.index + 1}`} className="carousel-img" loading="lazy"/>
            <div className="carouselElementText">
              <p className="carouselTextTitle">{props.title}</p>
              <p>{props.text}</p>
            </div>
          </div>
        </Link>
      ) : (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="externalLink">
          <div className="elementContainer">
            <img src={props.img} alt={`Slide ${props.index + 1}`} className="carousel-img" loading="lazy"/>
            <div className="carouselElementText">
              <p className="carouselTextTitle">{props.title}</p>
              <p>{props.text}</p>
            </div>
          </div>
        </a>
      )}
    </>
  );
}

export default CarouselElement;