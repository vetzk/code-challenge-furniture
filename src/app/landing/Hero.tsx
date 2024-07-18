import PageLayout from "@/components/layouts/PageLayout";
import Image from "next/image";
import * as React from "react";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = () => {
  return (
    <div className="px-10 xs:px-4 xs:mt-24">
      <hr />
      <div className="flex flex-col rounded-3xl mt-10 relative w-full justify-between h-[600px] xs:h-auto xs:rounded-2xl xs:mt-5">
        <Image
          src="/vecteezy_home-minimal-interior-design-living-room-with-beige-cozy_27955799.webp"
          alt="image"
          objectFit="cover"
          layout="fill"
          priority
        />
        <div className="rounded-2xl relative w-full h-[250px] bg-transparent xs:h-auto">
          <div className="flex justify-center flex-col items-center mt-10 xs:mt-5">
            <p className="text-7xl text-center text-white xs:text-3xl">
              Built to Last,
              <br className="xs:hidden" /> Designed to Love
            </p>
            <p className="text-white text-center mt-6 xs:text-sm xs:mt-3">
              Elevate your living space with our carefully curated selection of
              premium furniture,
              <br className="xs:hidden" /> designed to blend seamlessly with
              your unique taste.
            </p>
          </div>
          <div className="rounded-2xl absolute w-[21%] h-[60px] left-[-3rem] top-[12.48rem] bg-white xs:bg-transparent xs:static xs:w-full xs:h-auto xs:mt-4 xs:flex xs:justify-center xs:items-center xs:py-3">
            <div className="w-[75%] mt-1 ml-11 py-3 flex justify-center items-center h-[50px] border border-solid border-black xs:border-white rounded-2xl xs:w-auto xs:ml-0 xs:py-2 xs:h-auto xs:text-sm">
              <p className="text-start xs:text-center xs:text-white">
                100% FREE <br className="xs:hidden" />
                Design Consultations
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl relative w-full h-[250px] bg-transparent xs:h-auto xs:mt-4">
          <div className="rounded-tl-lg rounded-l-none rounded-r-sm absolute w-3 h-3 right-[-1.2rem] rounded-[50%] top-[13.05rem] shadow-[-10px_-10px_0_white] bg-white xs:hidden"></div>
          <div className="justify-center flex rounded-tl-lg rounded-l-none rounded-r-sm rounded-md absolute w-[18%] h-[50px] right-[-0.2rem] top-[12.6rem] bg-white xs:bg-transparent xs:static xs:w-full xs:h-auto xs:flex xs:justify-center xs:items-center xs:py-3">
            <div className="w-[80%] mt-2 flex justify-center items-center h-[40px] border border-solid border-black xs:border-white rounded-2xl xs:w-auto xs:mt-0 xs:py-2 xs:h-auto xs:text-sm">
              <p className="text-center ali xs:text-white">
                Price Match Guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
