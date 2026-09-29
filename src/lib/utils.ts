import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPriceLabel(
  price: string | number | null | undefined,
  currency = "USD",
): string {
  if (price === null || price === undefined || price === "" || price === "[PRICE]") {
    return "Starting From [PRICE]";
  }
  if (typeof price === "string") {
    if (price.toLowerCase().includes("discuss")) return "Let's Discuss";
    if (price.trim().startsWith("$")) return price.trim();
  }
  return `Starting From ${currency} ${price}`;
}
