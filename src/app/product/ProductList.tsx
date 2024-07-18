import PageLayout from "@/components/layouts/PageLayout";
import * as React from "react";
import { CiHeart } from "react-icons/ci";

interface IProductListProps {}

type Product = {
  title: string;
  price: string;
  imageUrl: string;
};

const prodHome = [
  {
    title: "Wood Furniture",
    price: "240.00",
    imgUrl:
      "/vecteezy_luxury-office-wall-background-for-logo-mockup-ai-generated_34433415.jpg",
  },
  {
    title: "Office Furniture",
    price: "594.00",
    imgUrl:
      "/vecteezy_mockup-poster-frame-on-the-wall-of-living-room-luxurious_22874698.jpg",
  },
  {
    title: "Living Furniture",
    price: "120.00",
    imgUrl: "/cozy-lively-home-interior-design.jpg",
  },
  {
    title: "Plant Furniture",
    price: "920.00",
    imgUrl: "/cozy-lively-home-interior-design.jpg",
  },
  {
    title: "Steel Furniture",
    price: "875.00",
    imgUrl: "/view-futuristic-light-lamp-design.jpg",
  },
  {
    title: "Classic Furniture",
    price: "264.00",
    imgUrl: "/view-contemporary-photorealistic-lamp.jpg",
  },
];

const showProduct = (): any => {
  const print = prodHome.map((e) => {
    return (
      <div key={e.title}>
        <div
          className="bg-cover relative w-full h-[30rem] bg-center rounded-xl"
          style={{ backgroundImage: `url(${e.imgUrl})` }}
        >
          <div className="flex gap-2 mx-3">
            <div className="rounded-2xl my-3 w-[25%] xs:w-[35%] h-10 justify-center bg-[rgb(0,0,0,0.5)] text-white flex items-center ">
              New Arrival
            </div>
            <div className="rounded-2xl my-3 w-[25%] xs:w-[35%] h-10 text-center bg-[rgb(0,0,0,0.5)] text-white flex items-center justify-center ">
              Top Sale
            </div>
          </div>

          <div className="w-full absolute bottom-10">
            <div className="w-full flex justify-between gap-20 xs:justify-start xs:flex-col xs:gap-0 xs:items-start items-center mx-3">
              <div className="flex flex-col items-start">
                <p className="text-xl text-white">{e.title}</p>
                <p className="text-white">Start From</p>
                <p className="text-3xl text-white">${e.price}</p>
              </div>
              <div className="flex mt-12 xs:mt-0 mx-5 xs:mx-0 gap-2">
                <div className="border-solid bg-gray-400 border xs:mt-6 mt-3 flex justify-center items-center border-white rounded-full w-[50px] h-[50px] xs:w-[40px] xs:h-[40px]">
                  <CiHeart size="40" color="white" />
                </div>
                <div className="w-[150px] xs:w-[80px] border-solid bg-gray-400 border xs:mt-6 mt-3 rounded-3xl flex justify-center items-center border-white h-[50px] xs:h-[40px]">
                  <p className="text-white">Buy Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return print;
};

const ProductList: React.FunctionComponent<IProductListProps> = (props) => {
  return (
    <PageLayout>
      <div className="grid grid-cols-3 grid-rows-2 w-full h-[60rem] gap-5 mt-5 ml-2 xs:grid-cols-1 xs:grid-rows-auto xs:h-auto xs:gap-2 xs:mt-2 xs:ml-1">
        {showProduct()}
      </div>
    </PageLayout>
  );
};

export default ProductList;
