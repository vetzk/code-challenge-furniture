import * as React from "react";
import Hero from "./Hero";
import Category from "./Category";
import Product from "./Product";
import CategoryBrand from "./CategoryBrand";
import Testimonial from "./Testimonial";

interface ILandingProps {}

const Landing: React.FunctionComponent<ILandingProps> = (props) => {
  return (
    <>
      <Hero />
      <Category />
      <Product />
      <CategoryBrand />
      <Testimonial />
    </>
  );
};

export default Landing;
