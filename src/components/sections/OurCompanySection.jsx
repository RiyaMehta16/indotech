import { Microscope, NotebookPen } from "lucide-react";
import research from "../../assets/research.jpg";
import precision from "../../assets/precision.jpg";
import ScrollReveal from "../ui/ScrollReveal";
import BorderHighlightEffect from "../ui/BorderHighlightEffect";
import HeadingForSections from "../ui/HeadingForSections";

const aboutInfo = [
  {
    title: "Precision Sheet Metal Manufacturing",
    description:
      "Indotech Engineering Products is a trusted name in precision sheet metal manufacturing, specializing in high-performance fan blades for cooling and ventilation applications. Our commitment to precision, innovation, and customer satisfaction enables us to serve both domestic and global markets with reliability and confidence.",
    image: precision,
    icon: <Microscope className="w-6 h-6 mr-5" />,
    reverse: false,
  },
  {
    title: "Research and Innovation",
    description:
      "We place strong emphasis on research and testing. Our teams work closely with clients to meet unique design requirements while adhering to international quality benchmarks. This ability to integrate customer needs with in-house innovation has positioned Indotech as a preferred partner for companies seeking dependable, high-precision engineered products. ",
    image: research,
    icon: <NotebookPen className="w-6 h-6 mr-2" />,
    reverse: true,
  },
];
const OurCompanySection = () => {
  return (
    <div className="my-10  text-slate-800">
      <ScrollReveal>
        <HeadingForSections title="Our Company Vision" text="" />

        <div className="flex flex-col  gap-8 mt-10 mx-automax-xl:mx-60 max-lg:mx-40 max-md:mx-20 max-sm:mx-2">
          {aboutInfo.map((tool, index) => (
            <BorderHighlightEffect key={index}>
              <div
                className={`flex flex-col md:flex-row ${
                  tool.reverse ? "md:flex-row-reverse" : ""
                } items-center  gap-6 p-6 rounded-lg shadow-lg border border-white/20 bg-gradient-to-br from-blue-100/20 via-red-300/10 to-blue-100/20 hover:cursor-pointer transition-colors duration-300 hover:bg-white/10`}
              >
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full md:w-1/2 h-48 object-cover rounded-md"
                />
                <div className="md:w-1/2 text-left">
                  <h3 className="text-xl font-bold flex items-center mb-2">
                    {tool.icon}
                    {tool.title}
                  </h3>
                  <p className="text-sm">{tool.description}</p>
                </div>
              </div>
            </BorderHighlightEffect>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default OurCompanySection;
