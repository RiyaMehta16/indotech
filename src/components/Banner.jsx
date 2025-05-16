import React from "react";
import whatsapp from "../assets/whatsapp.png";
import TransparentButton from "./ui/TransparentButton";

const Banner = () => {
  return (
    <div className="bg-blue-900 py-20 ">
      <h1 className="text-3xl text-white text-center font-bold">
        Ready to Start Your Manufacturing Project?
      </h1>
      <p className="text-white/75 text-center mt-6 mx-80 ">
        Connect with us today to discuss your requirements and how we can help
        bring your products to life.
      </p>
      <a
        className="flex justify-center mt-5"
        href="https://api.whatsapp.com/send/?phone=%2B918196800108&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <TransparentButton
          bgColor="bg-green-600"
          hoverClass="hover:bg-green-700"
          className="flex  items-center"
        >
          <img src={whatsapp} alt="whatsapp" className="h-7 mr-3" />
          Contact on Whatsapp
        </TransparentButton>
      </a>
    </div>
  );
};

export default Banner;
