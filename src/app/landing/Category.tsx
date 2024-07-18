import PageLayout from "@/components/layouts/PageLayout";
import * as React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

interface ICategoryProps {}

const Category: React.FunctionComponent<ICategoryProps> = (props) => {
  return (
    <PageLayout>
      <SectionTitle title="Room Category" subtitle="See All Category" />
      <div className="grid grid-cols-3 grid-rows-2 w-full h-72 gap-x-2 gap-y-2 mt-5 xs:grid-cols-2 xs:grid-rows-3 xs:h-72 xs:gap-2">
        <div className="relative bg-cover bg-center text-center rounded-xl bg-[rgb(0,0,0,0.8)]">
          <Image
            src="/vecteezy_scandinavian-style-bedroom-mockup-with-natural-wood_19576597.jpg"
            alt="image"
            objectFit="cover"
            layout="fill"
            className="rounded-xl opacity-45"
          />
          <div className="mt-11 xs:mt-5">
            <p className="text-white text-4xl font-bold xs:text-xl">Bedroom</p>
          </div>
        </div>
        <div className="border border-solid rounded-xl border-slate-300 text-center">
          <div className="mt-11 xs:mt-5">
            <p className="text-black text-4xl font-bold xs:text-xl">
              Guest Room
            </p>
          </div>
        </div>
        <div className="relative text-center rounded-xl bg-[rgb(0,0,0,0.8)] bg-cover bg-center">
          <Image
            src="/vecteezy_inside-the-apartment-there-s-a-bathroom-with-a-shower-and-bidet_28217061.jpg"
            alt="image"
            objectFit="cover"
            layout="fill"
            className="rounded-xl opacity-45"
          />
          <div className="mt-11 xs:mt-5">
            <p className="text-white text-4xl font-bold xs:text-xl">Bathroom</p>
          </div>
        </div>
        <div className="border border-solid rounded-xl border-slate-300 text-center">
          <div className="mt-11 xs:mt-5">
            <p className="text-black text-4xl font-bold xs:text-xl">
              Dining Room
            </p>
          </div>
        </div>
        <div className="relative text-center rounded-xl bg-cover bg-[rgb(0,0,0,0.8)] bg-center">
          <Image
            src="/vecteezy_corporate-office-interior-design_28701214.jpg"
            alt="image"
            objectFit="cover"
            layout="fill"
            className="rounded-xl opacity-45"
          />
          <div className="mt-11 xs:mt-5">
            <p className="text-white text-4xl font-bold xs:text-xl">Office</p>
          </div>
        </div>
        <div className="border border-solid rounded-xl border-slate-300 text-center">
          <div className="mt-11 xs:mt-5">
            <p className="text-black text-4xl font-bold xs:text-xl">
              Living Room
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Category;
