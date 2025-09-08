export * from "./fanblades";
export * from "./stands";
export * from "./motorComponents";
export * from "./coolers";
export * from "./coolersAccessories";
export * from "./pedestralFans";
export * from "./motors";
// Combined collections for easy access

import { FANBLADES } from "./fanblades";
import { MOTORS } from "./motors";
import { STANDS } from "./stands";
import { MOTOR_COMPONENTS } from "./motorComponents";
import { COOLERS } from "./coolers";
import { COOLER_ACCESSORIES } from "./coolersAccessories";
import { PEDESTAL_FANS } from "./pedestralFans";

// Legacy support for your existing parallax products
export const products = [
  // First 8 covers
  ...FANBLADES.slice(0, 8),
  ...MOTOR_COMPONENTS.slice(0, 6),
  ...MOTORS,
  ...MOTOR_COMPONENTS.slice(8, 12),
  ...STANDS.slice(0, 8), // First 8 stands
  ...COOLER_ACCESSORIES.slice(0, 6),
  ...PEDESTAL_FANS,
];

// All products combined
export const ALL_PRODUCTS = [
  ...FANBLADES.slice(0, 3),
  ...STANDS.slice(0, 3),
  ...MOTOR_COMPONENTS.slice(0, 3),
  ...COOLERS.slice(0, 3),
  ...COOLER_ACCESSORIES.slice(0, 3),
  ...PEDESTAL_FANS.slice(0, 3),
  ...MOTORS.slice(0, 3),
];

// Category mappings for navigation
export const PRODUCT_CATEGORIES = {
  "fan-blades": { name: "Fan Blades", products: FANBLADES },
  stands: { name: "Stands", products: STANDS },
  "motor-components": { name: "Motor Components", products: MOTOR_COMPONENTS },
  coolers: { name: "Industrial Coolers", products: COOLERS },
  "cooler-accessories": {
    name: "Cooler Accessories",
    products: COOLER_ACCESSORIES,
  },
  motors: { name: "Cooler Motors", products: MOTORS },
  "pedestral-fans": { name: "Pedestal Fans", products: PEDESTAL_FANS },
};
