"use client";
import * as React from "react";
import TeamCard from "./TeamCard";
import apiCall from "../helper/axiosInstance";
import { TeamMate, TeamMember } from "./type";
import Image from "next/image";

interface IOverviewProps {}

const Overview: React.FunctionComponent<IOverviewProps> = () => {
  const [teamName, setTeamName] = React.useState<TeamMember[]>([]);
  const handleData = async () => {
    try {
      const response = await apiCall.get("/?results=6");
      console.log(response.data);
      setTeamName(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleData();
  }, []);
  return (
    <div className="w-full md:w-full md:m-auto py-5 px-10">
      <div className="w-full min-h-[50vh] flex justify-center items-center flex-col">
        <p className="text-4xl mb-5 text-center">
          Meet the People Behind Our Success
        </p>
        <div className="w-[75%] sm:w-3/4">
          <p className="text-center">
            Welcome to our team page! At Vintage, we believe that our success is
            driven by the passion, creativity, and expertise of our amazing
            team. Get to know the individuals who bring their unique skills and
            dedication to make our company thrive.
          </p>
        </div>
      </div>
      <div className="w-full min-h-[50vh] relative flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xs:gap-10 xs:my-10">
          {teamName.map((member, i) => (
            <div key={i}>
              <div>
                <Image
                  src={member.picture.large}
                  alt="image"
                  width={1000}
                  height={700}
                  className="rounded-2xl"
                />
              </div>
              <div>
                <p className="font-bold text-center">
                  {member.name.title +
                    " " +
                    member.name.first +
                    " " +
                    member.name.last}
                </p>
              </div>
              <div className="text-center">{member.email}</div>
              <div className="text-center">
                {member.location.street.name +
                  " " +
                  member.location.street.number}
              </div>
              <div className="text-center">
                {member.location.country +
                  " " +
                  member.location.state +
                  " " +
                  member.location.city}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
