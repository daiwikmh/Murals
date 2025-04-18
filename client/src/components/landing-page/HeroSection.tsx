import React from "react";
import Header from "./Header";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col max-md:max-w-full pt-48">
      <Header />
      <div className="w-[517px] max-w-full px-8 mt-15">
        <div className="w-full max-md:max-w-full">
          <h1 className="text-white text-[64px] font-bold leading-[77px] tracking-[1.28px] uppercase max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
            Mural
            <br />
            <span className="text-[rgba(2,193,115,1)]">Intelligence</span>
            <br />
            Agency
          </h1>
          <p className="text-[rgba(193,204,199,1)] text-base font-normal leading-6 mt-5 max-md:max-w-full">
            A collection of 10,000 worldly Koalas each with their unique
            skillsets. Their mission is to protect the world from evil.
          </p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/13c94c38495fd3e377d315c6008581d2682b6f4d?placeholderIfAbsent=true"
          alt="Koala Intelligence Agency Logo"
          className="aspect-[1] object-contain w-[138px] max-w-full mt-10"
        />
      </div>
    </div>
  );
};

export default HeroSection;
