import React from "react";
import hero from "../images/Hero/hero.jpg";
import hero2x from "../images/Hero/hero2x.jpg";
import heroMob from "../images/Hero/heroMob.jpg";
import heroMob2x from "../images/Hero/heroMob2x.jpg";

const Hero: React.FC = () => {
  return (
        <picture>
            <source
            srcSet={`${hero} 1x, ${hero2x} 2x`}
            media="(min-width: 768px)"
            />
            <source
            srcSet={`${heroMob} 1x, ${heroMob2x} 2x`}
            media="(max-width: 767px)"
            />
            <img  src={heroMob} alt="" className="hero" />
        </picture>
  );
};

export default Hero;
