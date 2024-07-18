import * as React from "react";
import Image from "next/image";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className="w-full lg:w-[95%] md:left-[0.5rem] relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] mx-auto">
      <div className="relative w-full min-h-screen">
        <Image
          src="/vecteezy_empty-modern-interior-dark-wall-background-front-view-ai_34433900.jpg"
          alt="image"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
        <p className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center mb-4">
          Our Team
        </p>
      </div>
    </div>
  );
};

export default Hero;
