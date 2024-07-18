import PageLayout from "@/components/layouts/PageLayout";
import { Button } from "@/components/ui/button";
import * as React from "react";

interface IBrandDetailsProps {}

const BrandDetails: React.FunctionComponent<IBrandDetailsProps> = (props) => {
  return (
    <PageLayout>
      <div className="w-[90%] min-h-max flex flex-col bg-slate-300 rounded-br-xl rounded-tr-xl shadow-xl xs:w-full">
        <div className="w-full h-[35%] flex relative justify-between items-center xs:flex-col xs:items-start xs:p-4">
          <div className=" p-7 w-3/4 xs:w-full xs:p-2">
            <p className="font-bold text-2xl mb-2 xs:text-xl">
              Carefully considered details & perfections
            </p>
            <p className="mb-2 xs:text-sm">
              Our Philosophy At Elegant Living, we believe that furniture should
              be a reflection of your persona
            </p>
            <Button className="bg-yellow-300 rounded-2xl text-black xs:text-sm xs:py-2">
              Learn More
            </Button>
          </div>
          <div className="bg-[url(/vecteezy_scandinavian-style-bedroom-mockup-with-natural-wood_19576597.jpg)] bg-cover bg-center absolute w-[50%] -right-[8.5rem] h-[300px] mb-[4.8rem] border border-solid border-white rounded-tl-xl rounded-bl-xl shadow-xl xs:relative xs:w-full xs:right-0 xs:mb-4"></div>
          <div className="w-full min-h-[50vh] xs:hidden"></div>
        </div>
        <div className="w-full h-[35%] flex relative justify-between items-center xs:flex-col-reverse xs:items-start xs:p-4">
          <div className="bg-[url(/vecteezy_scandinavian-style-bedroom-mockup-with-natural-wood_19576597.jpg)] bg-cover bg-center w-full h-[300px] mb-[1.5rem] border border-solid border-white rounded-tr-xl rounded-br-xl shadow-xl xs:relative xs:w-full xs:mb-4"></div>
          <div className="w-1/4 absolute right-[2rem] xs:relative xs:w-full xs:right-0 xs:p-2">
            <p className="font-bold text-2xl mb-2 xs:text-xl">
              Crafted in combination of beauty & perfection{" "}
            </p>
            <p className="mb-2 xs:text-sm">
              Our Philosophy At Elegant Living, we believe that furniture should
              be a reflection of your persona
            </p>
            <Button className="bg-yellow-300 rounded-2xl text-black xs:text-sm xs:py-2 ">
              Learn More
            </Button>
          </div>
          <div className="w-full min-h-[40vh] xs:hidden"></div>
        </div>
        <div className="w-[10%] min-h-[10vh] xs:w-full xs:min-h-[5vh]"></div>
      </div>
    </PageLayout>
  );
};

export default BrandDetails;
