"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GrNext, GrPrevious } from "react-icons/gr";

interface ICarouselProps {
  images: string[];
}

const Carousel: React.FunctionComponent<ICarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const handleNext = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src={images[currentIndex]}
        alt={`image ${currentIndex}`}
        objectFit="cover"
        fill
        className="rounded-3xl"
      />
      <Button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform bg-transparent -translate-y-1/2"
      >
        <GrPrevious size={"40"} />
      </Button>
      <Button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform bg-transparent -translate-y-1/2"
      >
        <GrNext size={"40"} />
      </Button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
