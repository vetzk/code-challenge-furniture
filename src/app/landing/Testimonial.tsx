import * as React from "react";
import Image from "next/image";

interface ITestimonialProps {}

const Testimonial: React.FunctionComponent<ITestimonialProps> = (props) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <p className="text-3xl xs:text-xl xs:text-center font-bold p-5">
          This is why our customers love our products
        </p>
        <div className="w-3/4 min-h-[50vh] my-32 xs:mt-12 xs:mb-20 flex gap-10 mx-32 xs:flex-col">
          <div className="bg-white shadow-xl inset-5 border border-solid border-white w-1/3 xs:w-full h-[20rem] rounded-lg">
            <div className="w-full flex flex-col items-center gap-10 p-5">
              <Image
                src="/pexels-simon-robben-55958-614810.jpg"
                alt="image"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div>
                <p className="text-center leading-5">
                  I recently purchased a dining set from Vintage, and I
                  couldn&apos;t be happier with my decision.
                </p>
              </div>
              <div>
                <p className="text-center leading-5">James Arthur</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl inset-5 border border-solid border-white w-1/3 xs:w-full h-[20rem] rounded-lg">
            <div className="w-full flex flex-col items-center gap-10 p-5">
              <Image
                src="/pexels-simon-robben-55958-614810.jpg"
                alt="image"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div>
                <p className="text-center leading-5">
                  The customer service was outstanding, with the team ensuring
                  timely delivery and seamless assembly.
                </p>
              </div>
              <div>
                <p className="text-center leading-5">Jared Bowen</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl inset-5 border border-solid border-white w-1/3 xs:w-full h-[20rem] rounded-lg">
            <div className="w-full flex flex-col items-center gap-10 p-5">
              <Image
                src="/pexels-simon-robben-55958-614810.jpg"
                alt="image"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div>
                <p className="text-center leading-5">
                  The craftsmanship is exceptional, and the design perfectly
                  complements my home&apos;s modern aesthetic.
                </p>
              </div>
              <div>
                <p className="text-center leading-5">Eze Williams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
