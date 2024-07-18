import PageLayout from "@/components/layouts/PageLayout";
import * as React from "react";
import Hero from "./Hero";
import Overview from "./Overview";
import BrandDetails from "./BrandDetails";

interface IAboutUsProps {}

const AboutUs: React.FunctionComponent<IAboutUsProps> = (props) => {
  return (
    <>
      <Hero />
      <Overview />
      <BrandDetails />
    </>
  );
};

export default AboutUs;
