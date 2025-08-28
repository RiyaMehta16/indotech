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
    description: "Short description",
    price: "$450",
    sizes: ['15"', '16"', '17"', '18"'],
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
    description: "Short description",
    price: "$450",
    sizes: ['15"', '16"', '17"', '18"'],
  },
  {
    image: exhaustblade1a,
    images: [exhaustblade1a, exhaustblade1b],

    title: "Exhaust Blade Dual Ribbed",
    description: "Short description",
    price: "$450",
    sizes: ['15"', '16"', '17"', '18"'],
  },

  {
    image: sixleafblade1a,
    images: [sixleafblade1a, sixleafblade1b],

    title: "Six Leaf Blade",
    description: "Short description",
    price: "$450",
    sizes: ['15"', '16"', '17"', '18"'],
  },

  {
    image: fiveleafblade1a,
    images: [fiveleafblade1a, fiveleafblade1b],

    title: "Five Leaf Blade",
    description: "Short description",
    price: "$450",
    sizes: ['15"', '16"', '17"', '18"'],
  },
];
