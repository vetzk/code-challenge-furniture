import PageLayout from "@/components/layouts/PageLayout";
import * as React from "react";

interface IOverviewProps {}

const Overview: React.FunctionComponent<IOverviewProps> = (props) => {
  return (
    <PageLayout>
      <div className="w-full h-min-[50vh] flex justify-center items-center flex-col px-4 xs:px-2">
        <p className="text-4xl mb-5 xs:text-2xl">Overview</p>
        <div className="w-[75%] xs:w-full">
          <p className="text-center xs:text-sm">
            Vintage was founded by a team of passionate designers and craftsmen
            who believed that great furniture could transform a space. With
            backgrounds in interior design, woodworking, and engineering, our
            founders brought together their expertise to create a brand that
            values both aesthetics and practicality. Our commitment to
            excellence and innovation has made us a trusted partner for
            businesses around the world. We pride ourselves on our
            state-of-the-art facilities, skilled workforce, and dedication to
            sustainability. At Vintage, we believe in building strong
            relationships with our clients, providing reliable products that
            meet their specific needs.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Overview;
