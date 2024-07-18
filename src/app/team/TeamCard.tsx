import * as React from "react";
import Image from "next/image";

interface ITeamCardProps {
  imgUrl: string;
  name: string;
  role: string;
}

const TeamCard: React.FunctionComponent<ITeamCardProps> = ({
  imgUrl,
  name,
  role,
}) => {
  return (
    <div className="relative h-96 flex flex-col gap-2 mb-10 rounded-xl overflow-hidden">
      <div className="relative w-full h-3/4">
        <Image
          src={imgUrl}
          alt={`${name}'s picture`}
          width={1000}
          height={700}
          className="rounded-t-xl"
        />
      </div>
      <div className="w-full h-1/4 absolute flex flex-col justify-center items-center bottom-0 xs:bottom-12 rounded-b-xl">
        <p className="font-bold text-lg">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
