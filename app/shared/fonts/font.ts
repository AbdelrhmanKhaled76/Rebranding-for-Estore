import { Spirax, Zen_Loop } from "next/font/google";

export const spirax = Spirax({
  subsets: ["latin"],
  weight: ["400"],
});

export const zenLoop = Zen_Loop({
  subsets: ["latin"],
  weight: ["400"],
  fallback: ["sans-serif"],
});
