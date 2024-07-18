import PageLayout from "@/components/layouts/PageLayout";
import * as React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import BrandCard from "./BrandCard";

interface ICategoryBrandProps {}

const CategoryBrand: React.FunctionComponent<ICategoryBrandProps> = (props) => {
  return (
    <PageLayout>
      <SectionTitle title="Category Brand" subtitle="See All Brand" />
      <div className="flex flex-col gap-4 mt-5 w-full h-auto">
        <BrandCard
          imageUrl="/vecteezy_inside-the-apartment-there-s-a-bathroom-with-a-shower-and-bidet_28217061.jpg"
          name="Sink"
          pos="60%"
        />
        <BrandCard
          imageUrl="/vecteezy_corporate-office-interior-design_28701214.jpg"
          name="Chair"
          pos="60%"
        />
        <BrandCard
          imageUrl="/vecteezy_modern-office-design-with-bright-window-view-generative-ai_25043641.jpg"
          name="Table"
          pos="60%"
        />
      </div>
    </PageLayout>
  );
};

export default CategoryBrand;
