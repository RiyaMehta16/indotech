import React from "react";

const footerData = {
  Links: ["About", "Products", "Features"],
  //   About: ["Company", "Team", "Legacy"],
  //   Careers: ["Job openings", "Employee success", "Benefits"],
};

const socialLinks = [
  { icon: "ion-social-facebook", url: "#" },
  { icon: "ion-social-twitter", url: "#" },
  { icon: "ion-social-snapchat", url: "#" },
  { icon: "ion-social-instagram", url: "#" },
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
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-opacity duration-200 opacity-80 hover:opacity-100"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-40 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4 mt-6 md:mt-0">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 opacity-75 hover:opacity-100 transition-opacity duration-200"
                >
                  <i className={`icon ${social.icon} text-xl`}></i>
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
