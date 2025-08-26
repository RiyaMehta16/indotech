// src/components/ui/LoadingSkeletons.jsx
import React from "react";

export const HeroSkeleton = () => (
  <div className="relative h-[40vh] md:h-[60vh] bg-gray-200 animate-pulse">
    <div className="absolute inset-0 bg-gray-300" />
    <div className="relative flex items-center justify-center h-full">
      <div className="text-center space-y-4">
        <div className="h-8 md:h-12 w-96 bg-gray-400 rounded animate-pulse" />
        <div className="h-4 md:h-6 w-80 bg-gray-400 rounded animate-pulse" />
      </div>
    </div>
  </div>
);

export const TextSkeleton = ({ lines = 3 }) => (
  <div className="space-y-3 animate-pulse">
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="h-4 bg-gray-200 rounded" />
    ))}
  </div>
);

export const CardsSkeleton = () => (
  <div className="grid md:grid-cols-2 gap-12">
    {[1, 2].map((i) => (
      <div key={i} className="bg-white p-8 rounded-lg shadow-lg animate-pulse">
        <div className="h-6 w-48 bg-gray-200 rounded mb-4" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
      </div>
    ))}
  </div>
);
