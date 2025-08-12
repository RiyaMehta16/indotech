export * from "./covers";
export * from "./fanblades";
export * from "./motorComponents";
export * from "./motorRings";
export * from "./coolers";
export * from "./coolersAccessories";
export * from "./pedestralFans";

// Combined collections for easy access
import { COVERS } from "./covers";
import { FANBLADES } from "./fanblades";
import { MOTOR_COMPONENTS } from "./motorComponents";
import { MOTOR_RINGS } from "./motorRings";
import { COOLERS } from "./coolers";
import { COOLER_ACCESSORIES } from "./coolersAccessories";
import { PEDESTAL_FANS } from "./pedestralFans";

// Legacy support for your existing parallax products
export const products = [
  ...COVERS.slice(0, 8), // First 8 covers
  ...FANBLADES.slice(0, 8), // First 8 fanblades
  ...MOTOR_COMPONENTS,
  ...MOTOR_RINGS.slice(0, 6),
  ...PEDESTAL_FANS,
];

// All products combined
export const ALL_PRODUCTS = [
  ...COVERS.slice(0, 3),
  ...FANBLADES.slice(0, 3),
  ...MOTOR_COMPONENTS.slice(0, 3),
  ...MOTOR_RINGS.slice(0, 3),
  ...COOLERS.slice(0, 3),
  ...COOLER_ACCESSORIES.slice(0, 3),
  ...PEDESTAL_FANS.slice(0, 3),
];

// Category mappings for navigation
export const PRODUCT_CATEGORIES = {
  "ac-motor-covers": { name: "Motor Covers", products: COVERS },
  "fan-blades": { name: "Fan Blades", products: FANBLADES },
  "motor-components": { name: "Motor Components", products: MOTOR_COMPONENTS },
  "metal-sheet-rings": { name: "Metal Sheet Rings", products: MOTOR_RINGS },
  coolers: { name: "Industrial Coolers", products: COOLERS },
  "cooler-accessories": {
    name: "Cooler Accessories",
    products: COOLER_ACCESSORIES,
  },
  "pedestral-fans": { name: "Pedestal Fans", products: PEDESTAL_FANS },
};
