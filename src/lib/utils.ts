export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function formatPrice(price: number): string {
  return `₹${price}`;
}
