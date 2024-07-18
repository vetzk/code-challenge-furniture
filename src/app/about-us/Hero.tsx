import * as React from "react";

interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className="px-10 xs:px-4 xs:mt-24">
      <hr />
      <div className="relative w-full min-h-[80vh] my-10 bg-cover text-white bg-bottom rounded-3xl bg-[url(/vecteezy_empty-modern-interior-dark-office-wall-background-front-view_34438418.jpg)] xs:my-5 xs:min-h-[60vh]">
        <div className="flex flex-col items-center justify-center px-20 py-20 xs:px-4 xs:py-10">
          <div className="mb-5">
            <p className="text-3xl font-bold xs:text-2xl">About Our Brand</p>
          </div>
          <div className="text-center text-base xs:text-sm">
            <p>
              Vintage Industries has been a leader in the furniture sector since
              1998, producing high-quality components for a variety of
              industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
