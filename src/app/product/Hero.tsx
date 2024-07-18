import * as React from "react";
import Carousel from "./Carousel";

interface IProductHeroProps {}

const img = [
  "/cozy-lively-home-interior-design (1).jpg",
  "/cozy-lively-home-interior-design.jpg",
  "/vecteezy_scandinavian-style-bedroom-mockup-with-natural-wood_19576597.jpg",
];

const ProductHero: React.FunctionComponent<IProductHeroProps> = (props) => {
  return (
    <div className="w-[95%] left-[3rem] relative min-h-screen mb-20 xs:left-2.5 xs:mb-16 xs:min-h-[80vh] sm:mb-16 sm:min-h-[80vh] xs:mt-32">
      {img && <Carousel images={img} />}
      <div className="absolute top-40 left-0 right-0 xs:top-24 sm:top-24">
        <p className="font-bold text-7xl xs:text-4xl sm:text-5xl text-white text-center mb-4">
          Passion of Beauty
        </p>
        <p className="font-normal text-md xs:text-xs sm:text-sm text-center text-white">
          Sleek and modern aesthetics that complement any environment.
          <br />
          Ergonomically designed for maximum comfort and usability.
        </p>
      </div>
    </div>
  );
};

export default ProductHero;
