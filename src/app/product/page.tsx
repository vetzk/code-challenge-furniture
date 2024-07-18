import * as React from "react";
import Hero from "./Hero";
import ProductList from "./ProductList";

interface IProductProps {}

const Product: React.FunctionComponent<IProductProps> = (props) => {
  return (
    <>
      <Hero />
      <ProductList />
    </>
  );
};

export default Product;
