"use client";
import * as React from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

interface INavbarProps {}
const navTitle = [
  {
    title: "HOME",
    link: "/",
  },
  {
    title: "ABOUT US",
    link: "/about-us",
  },
  {
    title: "PRODUCT",
    link: "/product",
  },
  {
    title: "OUR TEAM",
    link: "/team",
  },
  {
    title: "BLOG",
    link: "/blog",
  },
];

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [scrollPos, setScrollPos] = React.useState<number>(0);
  const [isScrolling, setIsScrolling] = React.useState<boolean>(true);
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  const pathname = usePathname(); // utk mendapatkan pathname

  const handleScroll = () => {
    const currentPos = window.scrollY;
    if (currentPos > scrollPos) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
    setScrollPos(currentPos);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex justify-between transition- items-center px-10 transition-all duration-300 ${
        isMobile
          ? "fixed top-0 w-full bg-white border-b-black border border-solid z-50"
          : "relative"
      } xs:z-10 xs:px-6 sm:px-10`}
    >
      <div>
        <Image
          src={"/logo-color.png"}
          alt={"logo"}
          width={"100"}
          height={"100"}
        />
      </div>
      <div>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-5">
            {navTitle.map((e, i) => {
              const isActive = pathname === e.link;
              //cek apakah pathname sama dengan e.link
              return (
                <div key={i}>
                  <NavigationMenuItem>
                    <Link href={e.link}>
                      <span
                        className={isActive ? "text-yellow-400" : "text-black"}
                      >
                        {e.title}
                      </span>
                    </Link>
                  </NavigationMenuItem>
                </div>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden md:flex gap-5">
        <Image
          src={"/search_24dp_FILL0_wght400_GRAD0_opsz24.png"}
          alt={"search"}
          width={"20"}
          height={"20"}
        />
        <Image
          src={"/person_24dp_FILL0_wght400_GRAD0_opsz24.png"}
          alt={"person"}
          width={"20"}
          height={"20"}
        />
        <Image
          src={"/shopping_basket_24dp_FILL0_wght400_GRAD0_opsz24.png"}
          alt={"cart"}
          width={"20"}
          height={"20"}
        />
      </div>
      <div className=" flex items-center md:hidden">
        <Button onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </Button>
      </div>
      {isOpen && (
        <div className=" w-full flex flex-col justify-center items-center absolute top-20 left-0 right-0 shadow-md bg-black z-10 text-white py-4 md:hidden">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col items-center gap-5">
              {navTitle.map((e, i) => {
                const isActive = pathname === e.link;
                return (
                  <div key={i}>
                    <NavigationMenuItem>
                      <Link href={e.link}>
                        <span
                          className={
                            isActive ? "text-yellow-400" : "text-white"
                          }
                        >
                          {e.title}
                        </span>
                      </Link>
                    </NavigationMenuItem>
                  </div>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <hr className="border-gray-300 w-full my-4" />
          <div className="flex gap-5 justify-center mt-4">
            <Image
              src={"/search_24dp_FILL0_wght400_GRAD0_opsz24.png"}
              alt={"search"}
              width={"20"}
              height={"20"}
            />
            <Image
              src={"/person_24dp_FILL0_wght400_GRAD0_opsz24.png"}
              alt={"person"}
              width={"20"}
              height={"20"}
            />
            <Image
              src={"/shopping_basket_24dp_FILL0_wght400_GRAD0_opsz24.png"}
              alt={"cart"}
              width={"20"}
              height={"20"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
