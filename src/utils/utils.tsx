/**
 * Utility function to merge tailwind classes
 * Reference:
 *  clsx - https://github.com/lukeed/clsx
 *  twMerge - https://github.com/dcastil/tailwind-merge
 */
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
