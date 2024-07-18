import * as React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="w-full min-h-[60vh] bg-slate-800">
      <div className="px-4 sm:px-20 py-10 gap-8 flex flex-col sm:flex-row text-lg justify-between">
        <div className="flex flex-col items-center sm:items-start sm:w-1/3">
          <Image
            src={"/logo-no-background.png"}
            alt={"logo"}
            width={100}
            height={100}
            className="mb-5"
          />
          <div className="text-white mb-5">Get in touch with us</div>
          <div className="w-full bg-slate-500 rounded-3xl flex justify-between items-center">
            <div className="p-4 text-white">Enter your email</div>
            <Button className="w-[30%] h-12 mr-1 flex items-center justify-center text-black bg-white hover:bg-white rounded-3xl">
              Let&apos;s talk
            </Button>
          </div>
        </div>
        <div className="w-1/2 flex justify-between xs:flex-col xs:gap-8 xs:items-center xs:justify-center xs:w-full">
          <div className="flex flex-col xs:items-center">
            <p className="text-white text-2xl mb-4">Quick Menu</p>
            <p className="text-white text-sm mb-2">Home</p>
            <p className="text-white text-sm mb-2">About Us</p>
            <p className="text-white text-sm mb-2">Product</p>
            <p className="text-white text-sm">Our Team</p>
          </div>
          <div className="flex flex-col xs:items-center">
            <p className="text-white text-2xl mb-4">Licence</p>
            <p className="text-white text-sm mb-2">Privacy Policy</p>
            <p className="text-white text-sm mb-2">Copyright</p>
            <p className="text-white text-sm">Terms & Conditions</p>
          </div>
          <div className="flex flex-col xs:items-center">
            <p className="text-white text-2xl mb-4">Company</p>
            <p className="text-white text-sm mb-2">Privacy Policy</p>
            <p className="text-white text-sm mb-2">Copyright</p>
            <p className="text-white text-sm">Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-20 py-4 flex flex-col sm:flex-row items-center justify-between text-white">
        <div className="mb-2 sm:mb-0">Copyright &#169; 2024 Vintage</div>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <FaInstagram className="w-6 h-6" />
          <FaTwitter className="w-6 h-6" />
          <FaLinkedin className="w-6 h-6" />
          <FaFacebookF className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
