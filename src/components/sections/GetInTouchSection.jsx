import React from "react";
import Banner from "../Banner";
import InformationAboutCompany from "../InformationAboutCompany";
import ContactUsForm from "../ContactUsForm";

const GetInTouchSection = () => {
  return (
    <div id="contact">
      <Banner />
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 px-4 sm:px-6 lg:px-20 py-10">
        <div className="w-full lg:w-1/2">
          <InformationAboutCompany />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
