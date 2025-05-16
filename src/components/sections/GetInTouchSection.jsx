import React from "react";
import Banner from "../Banner";
import InformationAboutCompany from "../InformationAboutCompany";
import ContactUsForm from "../ContactUsForm";

const GetInTouchSection = () => {
  return (
    <div className="mx-0" id="contact">
      <Banner />
      <div className="flex mx-20  justify-between items-start">
        <div className="flex-1 m-5  max-w-md">
          <InformationAboutCompany />
        </div>
        <div className="flex-1 ml-40 m-5">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
