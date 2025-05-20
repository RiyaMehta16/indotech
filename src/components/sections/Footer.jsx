import React from "react";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
const footerData = {
  Links: [
    { title: "About", url: "#about" },
    { title: "Products", url: "#products" },
    { title: "Features", url: "#features" },
  ],
  //   About: ["Company", "Team", "Legacy"],
  //   Careers: ["Job openings", "Employee success", "Benefits"],
};

const socialLinks = [
  {
    icon: facebook,
    url: "#https://www.facebook.com/people/Indotech-Engineering-Products/100083873817754/#",
  },
  {
    icon: linkedin,
    url: "#https://www.facebook.com/people/Indotech-Engineering-Products/100083873817754/#",
  },

  {
    icon: instagram,
    url: "#https://www.facebook.com/people/Indotech-Engineering-Products/100083873817754/#",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between gap-8">
          {Object.entries(footerData).map(([section, links], idx) => (
            <div key={idx} className="w-40 text-center md:text-left">
              <h3 className="mb-3 font-bold text-lg">{section}</h3>
              <ul className="space-y-2 flex space-x-20 text-sm">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      className="text-gray-600 hover:text-gray-900 transition-opacity duration-200 opacity-80 hover:opacity-100"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-40 text-center md:text-right">
            <div className="">
              <h3 className="mb-3 font-bold text-lg">Our Socials</h3>
              <p className="text-gray-600 hover:text-gray-900 transition-opacity duration-200 opacity-80 hover:opacity-100">
                We ensure we are available everywhere for your support
              </p>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 mt-6 md:mt-10">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 opacity-75 hover:opacity-100 transition-opacity duration-200"
                >
                  <img
                    src={social.icon}
                    alt="icon"
                    className="size-5 opacity-50"
                  />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-400 opacity-70">
              IndoTech © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
