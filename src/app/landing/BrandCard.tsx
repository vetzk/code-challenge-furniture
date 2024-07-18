import * as React from "react";
import Image from "next/image";

interface IBrandCardProps {
  name: string;
  imageUrl: string;
  pos: string;
}

const BrandCard: React.FunctionComponent<IBrandCardProps> = (props) => {
  return (
    <div className="w-full h-80 rounded-xl relative xs:h-60">
      <div className="absolute z-10 xs:z-[5] m-5 flex justify-center items-center right-0 w-1/5 bg-slate-700 text-white h-10 rounded-3xl xs:w-1/2 xs:text-xs xs:h-8 xs:m-3">
        <div className="text-xl xs:text-xs xs:text-center">
          Recommendation For You
        </div>
      </div>
      <div
        className={`z-20 top-[${props.pos}] left-1/4 w-32 bg-[rgba(0,0,0,0.4)] xs:hidden text-white p-2 rounded-lg shadow-lg flex items-center justify-center relative xs:w-24 xs:text-xs xs:top-[${props.pos}]`}
      >
        <div className="text-sm rounded-xl xs:text-xs xs:hidden">
          {props.name}
        </div>
        {/* Hide pointer and line for xs screens */}
        <div className="absolute top-1/2 right-full -translate-x-[-15px] -translate-y-1/2 xs:hidden">
          <svg
            className="pointer"
            width="100"
            height="50"
            viewBox="-10 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 25 C20 10, 80 40, 10 25"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="0" cy="25" r="10" fill="white" />
          </svg>
        </div>
      </div>
      <div className="text-center rounded-xl">
        <Image
          src={props.imageUrl}
          alt="image"
          objectFit="cover"
          fill
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default BrandCard;
