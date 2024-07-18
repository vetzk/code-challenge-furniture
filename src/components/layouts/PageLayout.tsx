import * as React from "react";

interface IPageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FunctionComponent<IPageLayoutProps> = ({
  children,
}) => {
  return (
    <div className="w-full md:w-full md:m-auto py-20 xs:py-10 px-10">
      <div>{children}</div>
    </div>
  );
};

export default PageLayout;
