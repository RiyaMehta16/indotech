// src/pages/AboutPage.jsx
import React, { Suspense, lazy } from "react";
import ErrorBoundary from "../components/ui/ErrorBoundary";
import {
  HeroSkeleton,
  TextSkeleton,
  CardsSkeleton,
} from "../components/ui/LoadingSkeletons";
import Footer from "../components/sections/Footer";

// Lazy-loaded sections
const AboutHero = lazy(() => import("../components/sections/AboutHero"));
const AboutIntroduction = lazy(() =>
  import("../components/sections/AboutIntroduction")
);
const OurCompanySection = lazy(() =>
  import("../components/sections/OurCompanySection")
);
const AboutCompanyInfo = lazy(() =>
  import("../components/sections/AboutCompanyInfo")
);
const AboutCommitment = lazy(() =>
  import("../components/sections/AboutCommitment")
);

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <ErrorBoundary>
        <Suspense fallback={<HeroSkeleton />}>
          <AboutHero />
        </Suspense>
      </ErrorBoundary>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <ErrorBoundary>
          <Suspense fallback={<TextSkeleton lines={4} />}>
            <AboutIntroduction />
          </Suspense>
        </ErrorBoundary>

        <hr className="my-16 border-t-2 border-gray-200" />

        {/* Existing OurCompanySection */}
        <ErrorBoundary>
          <Suspense fallback={<TextSkeleton lines={6} />}>
            <OurCompanySection />
          </Suspense>
        </ErrorBoundary>

        {/* Company Info Section */}
        <ErrorBoundary>
          <Suspense fallback={<TextSkeleton lines={5} />}>
            <AboutCompanyInfo />
          </Suspense>
        </ErrorBoundary>

        <hr className="my-16 border-t-2 border-gray-200" />

        {/* Commitment Section */}
        <ErrorBoundary>
          <Suspense fallback={<CardsSkeleton />}>
            <AboutCommitment />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<CardsSkeleton />}>
            <Footer className="-mb-20" />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default AboutPage;
