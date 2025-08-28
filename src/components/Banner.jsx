import React from "react";
import whatsapp from "../assets/whatsapp.png";
import TransparentButton from "./ui/TransparentButton";
import { Button } from "./ui/Button";

const Banner = () => {
  return (
    <div className="bg-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl text-white text-center font-bold">
        Ready to Start Your Manufacturing Project?
      </h1>

      <p className="text-white/75 text-center mt-4 max-w-3xl mx-auto text-sm sm:text-base">
        Connect with us today to discuss your requirements and how we can help
        bring your products to life.
      </p>

      <div className="flex justify-center mt-6">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919023659940&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TransparentButton
            bgColor="bg-green-600"
            hoverClass="hover:bg-green-700"
            className="flex items-center text-sm sm:text-base"
          >
            <img src={whatsapp} alt="whatsapp" className="h-6 sm:h-7 mr-2" />
            Contact on Whatsapp
          </TransparentButton>
        </a>
      </div>
    </div>
  );
};

export default Banner;
