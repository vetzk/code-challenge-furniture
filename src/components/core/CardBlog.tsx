"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface ICardBlogProps {
  id: string;
  image: string;
  author: string;
  title: string;
}

const CardBlog: React.FunctionComponent<ICardBlogProps> = ({
  title,
  image,
  author,
  id,
}) => {
  const router = useRouter();
  return (
    <div key={id} className="min-h-[80vh] flex flex-col p-4 mb-20">
      <div className="flex-1">
        <div className="relative w-full h-1/2">
          <Image
            src={`https:${image}`}
            alt={"image"}
            objectFit="cover"
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div className="flex justify-between my-5 rounded-xl p-2 bg-amber-100">
          <p>Marketing</p>
          <p>5 min read</p>
        </div>
        <h3 className="font-bold text-xl mb-5">{title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          officia sunt soluta, dolorem facere excepturi maiores! Illum quam
          similique deserunt
        </p>
        <Button
          className="bg-yellow-100 text-black mt-5 hover:bg-yellow-100"
          onClick={() => router.push(`/blog/${id}`)}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default CardBlog;
