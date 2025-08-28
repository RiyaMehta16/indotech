import {
  clamisterblade1,
  exhaustblade1a,
  sixleafblade1a,
  clamisterblade2,
  exhaustblade1b,
  exhaustblade2b,
  sixleafblade1b,
  fiveleafblade1a,
  exhaustblade2c,
  exhaustblade2a,
  exhaustblade2d,
  exhaustblade2e,
  clamisterblade3,
  clamisterblade4,
  exhaustblade2f,
  fiveleafblade1b,
  farattafanblade1,
  farattafanblade2,
} from "../../assets";

export const FANBLADES = [
  {
    images: [
      clamisterblade1,
      clamisterblade2,
      clamisterblade3,
      clamisterblade4,
    ],
    image: clamisterblade1,
    title: "Clamister Blade",
    description:
      "Precision-engineered aluminum construction delivering 1220 Ft³/Min airflow at 1400 RPM. Perfect for HVAC and industrial cooling with customizable hub configurations and CW/CCW rotation options.",
    specifications: {
      material: "Aluminum",
      hubMaterial: "Plain Steel",
      rpm: "1400",
      airSpeed: "22.3 Km/H",
      airFlow: "1220 Ft³/Min",
      rotation: "CW/CCW",
    },
    sizes: ['14"', '16"', '18"', '20"', '24"'],
  },
  {
    title: "Exhaust Blade Single Ribbed",
    image: exhaustblade2a,
    images: [
      exhaustblade2a,
      exhaustblade2b,
      exhaustblade2c,
      exhaustblade2d,
      exhaustblade2e,
      exhaustblade2f,
    ],

    description:
      "Corrosion-resistant galvanized steel blades engineered for long-lasting performance in harsh environments. Features 1180 Ft³/Min airflow with customizable mounting options.",
    sizes: ['9"', '12"', '15"', '18"', '24"'],
    specifications: {
      material: "Galvanized Steel",
      hubMaterial: "Aluminum",
      rpm: "1400",
      airSpeed: "21.6 Km/H",
      airFlow: "1180 Ft³/Min",
      rotation: "CW/CCW",
    },
  },
  {
    images: [farattafanblade1],
    image: farattafanblade1,
    title: "Farrata Fan Blade",
    description: "Short description",
  },

  {
    image: exhaustblade1a,
    images: [exhaustblade1a, exhaustblade1b],

    title: "Exhaust Blade Dual Ribbed",
    description: "Short description",

    sizes: ['15"', '16"', '17"', '18"'],
  },

  {
    image: sixleafblade1a,
    images: [sixleafblade1a, sixleafblade1b],

    title: "Six Leaf Blade",
    description:
      "Space-optimized design delivering 944 Ft³/Min airflow in compact installations. Ideal for data center cooling and confined space applications requiring maximum efficiency.",

    sizes: ['15"', '16"', '18"'],
    specifications: {
      material: "Aluminum/Plain Steel",
      hubMaterial: "Plain Steel",
      rpm: "1400",
      airSpeed: "17.2 Km/H",
      airFlow: "944 Ft³/Min",
      rotation: "CW/CCW",
    },
  },
  {
    images: [farattafanblade2],
    image: farattafanblade1,
    title: "Farrata Fan Blade",
    description: "Short description",
  },

  {
    image: fiveleafblade1a,
    images: [fiveleafblade1a, fiveleafblade1b],

    title: "Five Leaf Blade",
    description:
      "Robust plain steel construction for demanding industrial environments. Delivers 1030 Ft³/Min airflow with exceptional durability and reliable performance under extreme conditions.",
    specifications: {
      material: "Plain Steel",
      hubMaterial: "Plain Steel",
      rpm: "1400",
      airSpeed: "18.1 Km/H",
      airFlow: "1030 Ft³/Min",
      rotation: "CW/CCW",
    },
    sizes: ['14"', '16"', '18"'],
  },
];
