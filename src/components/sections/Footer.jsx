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
};

const socialLinks = [
  {
    icon: facebook,
    url: "https://www.facebook.com/people/Indotech-Engineering-Products/100083873817754/",
  },
  {
    icon: linkedin,
    url: "https://www.linkedin.com/company/indotechengineering/",
  },
  {
    icon: instagram,
    url: "https://www.instagram.com/indotechengineering/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center md:items-start">
          {/* Navigation Links */}
          {Object.entries(footerData).map(([section, links], idx) => (
            <div key={idx} className="text-center md:text-left">
              <h3 className="mb-3 font-bold text-lg">{section}</h3>
              <ul className="space-y-2">
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

          {/* Social Section */}
          <div className="text-center md:text-right max-w-sm">
            <h3 className="mb-3 font-bold text-lg">Our Socials</h3>
            <p className="text-gray-600 text-sm opacity-80 max-sm:mx-10">
              We ensure we are available everywhere for your support
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 opacity-75 hover:opacity-100 transition-opacity duration-200"
                >
                  <img
                    src={social.icon}
                    alt="social-icon"
                    className="w-5 h-5 opacity-70"
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
