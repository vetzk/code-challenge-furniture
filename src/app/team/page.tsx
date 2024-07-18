import * as React from "react";
import Hero from "./Hero";
import Overview from "./Overview";

interface IOurTeamProps {}

const OurTeam: React.FunctionComponent<IOurTeamProps> = (props) => {
  return (
    <>
      <Hero />
      <Overview />
    </>
  );
};

export default OurTeam;
