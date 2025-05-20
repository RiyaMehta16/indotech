import React from "react";
import { Mail, Phone, MapPin, MessageSquareText } from "lucide-react";

const InformationAboutCompany = () => {
  const infoItems = [
    {
      icon: <MapPin className="text-blue-600" />,
      label: "Address",
      value: "E36 Growth Centre, Mansa Road Bathinda, India",
    },
    {
      icon: <Phone className="text-blue-600" />,
      label: "Phone",
      value: "+91 9023659940",
    },
    {
      icon: <Mail className="text-blue-600" />,
      label: "Email",
      value: "sales@indotechengineering.in",
    },
    {
      icon: <MessageSquareText className="text-blue-600" />,
      label: "WhatsApp",
      value: "+91 8196800108",
    },
  ];

  return (
    <div className="w-full p-6 bg-white rounded-2xl shadow-md dark:bg-zinc-900">
      <h2 className="text-2xl font-bold text-slate-700 mb-4 dark:text-white">
        Get in Touch
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-6">
        We're here to help and answer any questions you might have.
      </p>
      <div className="grid gap-6 sm:grid-cols-1">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-full">{item.icon}</div>
            <div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                {item.label}
              </p>
              <p className="text-neutral-700 dark:text-neutral-400">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationAboutCompany;
