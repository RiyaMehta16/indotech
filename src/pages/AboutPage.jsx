import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import company from "../../src/assets/company.png";
import aboutHeroImage2 from "../../src/assets/hero3.png";
import OurCompanySection from "../components/sections/OurCompanySection";

const AboutPage = () => {
  // Animation variant for fading in elements
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // Wrapper component to handle scroll-triggered animations
  // This replaces the dependency on a separate ScrollReveal component
  const MotionScrollReveal = ({ children }) => (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center text-white py-32 md:py-48 px-4"
        style={{ backgroundImage: `url(${aboutHeroImage2})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/60 "></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            About Indotech Engineering
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Engineering world-class components with precision that speaks for
            itself.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <MotionScrollReveal>
          <div className="text-center mb-16">
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Indotech Engineering Products was established in 2009 with a clear
              vision: to engineer world-class fan blades and sheet metal
              components. Managed by a team of engineers with a hardcore
              engineering mindset, our company has grown to become the{" "}
              <strong className="text-blue-600">
                No. 1 manufacturer of metal fan blades in India
              </strong>
              .
            </p>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              At Indotech, precision isn’t just a buzzword —{" "}
              <strong className="text-blue-600">we deal in microns</strong>.
              Every blade we produce is a result of in-depth research, advanced
              design, and rigorous testing. With innovation, precision, and
              engineering at our core, we continue to set benchmarks in the
              industry.
            </p>
          </div>
        </MotionScrollReveal>

        <hr className="my-16 border-t-2 border-gray-200" />
        <OurCompanySection />

        {/* Our Company Section */}
        <MotionScrollReveal>
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Our Company
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-lg leading-relaxed max-md:mx-16 max-md:text-center max-sm:mx-12 ">
                <p>
                  Indotech Engineering Products is a trusted name in precision
                  sheet metal manufacturing, specializing in high-performance
                  fan blades for cooling and ventilation applications. Our
                  commitment to precision, innovation, and customer satisfaction
                  enables us to serve both domestic and global markets with
                  reliability and confidence.
                </p>
                <p>
                  Over the years, we have consistently invested in technology,
                  automation, and design capabilities to stay ahead of industry
                  needs. From conceptual design to production, every stage is
                  backed by engineering discipline and attention to detail.
                </p>
                <p>
                  This ability to integrate customer needs with in-house
                  innovation has positioned Indotech as a preferred partner for
                  companies seeking dependable, high-precision engineered
                  products.
                </p>
              </div>
              <div className="p-4">
                {/* You can place an image of your facility or team here */}
                <img
                  src={company}
                  alt="Indotech Facility"
                  className="rounded-lg shadow-xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/e2e8f0/334155?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>
          </section>
        </MotionScrollReveal>

        <hr className="my-16 border-t-2 border-gray-200" />

        {/* Commitment to Excellence Section */}
        <MotionScrollReveal>
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Commitment to Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Precision Engineering */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                  Precision Engineering
                </h3>
                <p className="mb-4 text-base leading-relaxed">
                  At Indotech, precision is at the heart of everything we do. We
                  manufacture within tolerances as fine as{" "}
                  <strong className="font-bold">20 to 100 microns</strong>.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      <strong className="font-semibold">
                        Advanced Facilities:
                      </strong>{" "}
                      80 power presses, specialized hydraulic presses, and CNC
                      machining.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      <strong className="font-semibold">
                        In-House Capabilities:
                      </strong>{" "}
                      Complete tool room, fabrication, stamping, welding, and
                      powder coating.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      <strong className="font-semibold">
                        Optimized Performance:
                      </strong>{" "}
                      Ensuring every component enhances efficiency and product
                      life for our customers.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Quality Assurance */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                  Quality Assurance
                </h3>
                <p className="mb-4 text-base leading-relaxed">
                  Quality is not just a process at Indotech — it is a
                  commitment. We stand by our promise of delivering products
                  that meet international benchmarks.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      <strong className="font-semibold">
                        Equipped Inspection Lab:
                      </strong>{" "}
                      Featuring modern instruments like Air Gauges, Height
                      Gauges, and Surface Plates.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      <strong className="font-semibold">
                        In-House Powder Coating:
                      </strong>{" "}
                      Fuel-efficient ovens and eco-friendly guns for
                      long-lasting finishes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>
                      <strong className="font-semibold">
                        Proven Track Record:
                      </strong>{" "}
                      Over{" "}
                      <strong className="font-bold">
                        200 satisfied customers globally
                      </strong>{" "}
                      vouch for our quality and service.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </MotionScrollReveal>
      </div>
    </div>
  );
};

export default AboutPage;
