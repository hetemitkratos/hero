import React from "react";
import Image from "next/image";
import background from "../../public/background.jpeg";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={background}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-blue-500 mb-4">
          Welcome to the International Relations Department
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-yellow-400 mb-8">
          Where Global Perspectives Meet Local Insights
        </p>
        <div className="flex space-x-4">
          <button className="btn btn-primary bg-blue-500">Sign In</button>
          <button className="btn btn-primary  bg-blue-500">Sign In</button>
          <button className="btn btn-primary  bg-blue-500">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;