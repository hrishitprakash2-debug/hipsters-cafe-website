export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  emoji: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters", name: "Starters & Snacks", emoji: "🍟",
    items: [
      { id: "spring-roll", name: "Spring Roll (5Pc)", price: 85, emoji: "🥟", description: "Crispy golden rolls with spicy filling", popular: true },
      { id: "schezwan-momos", name: "Schezwan Momos (6Pc)", price: 95, emoji: "🥟", description: "Steamed momos with fiery schezwan sauce", popular: true },
      { id: "veg-momos", name: "Veg Steam Momos (6Pc)", price: 70, emoji: "🥟", description: "Classic steamed vegetable momos" },
      { id: "peri-fries", name: "Peri Fries", price: 120, emoji: "🍟", description: "Crispy fries tossed in peri peri seasoning", popular: true },
      { id: "cheese-corn", name: "Cheese Corn Balls (8Pc)", price: 130, emoji: "🧀", description: "Golden corn balls with molten cheese center" },
      { id: "vada-pav", name: "Vada Pav", price: 50, emoji: "🧆", description: "Mumbai-style spiced potato vada in a bun" },
    ],
  },
  {
    id: "mains", name: "Mains", emoji: "🍝",
    items: [
      { id: "pasta-white", name: "Penne White Sauce Pasta", price: 150, emoji: "🍝", description: "Creamy Alfredo-style white sauce pasta", popular: true },
      { id: "pasta-red", name: "Penne Red Sauce Pasta", price: 150, emoji: "🍝", description: "Tangy tomato-based red sauce pasta" },
      { id: "chilly-paneer-rice", name: "Chilly Paneer Fried Rice", price: 160, emoji: "🍚", description: "Wok-tossed rice with spicy paneer", popular: true },
      { id: "chowmein", name: "Veg Chowmein", price: 120, emoji: "🍜", description: "Classic Indo-Chinese stir-fried noodles" },
      { id: "burger", name: "Classic Aloo Patty Burger", price: 80, emoji: "🍔", description: "Crispy aloo patty with fresh toppings" },
      { id: "paneer-sandwich", name: "Grilled Paneer Sandwich", price: 120, emoji: "🥪", description: "Grilled with spiced paneer and veggies" },
      { id: "cheese-sandwich", name: "Cheese Sandwich", price: 90, emoji: "🥪", description: "Classic toasted cheese sandwich" },
    ],
  },
  {
    id: "pancakes", name: "Pancakes & Sweet", emoji: "🥞",
    items: [
      { id: "choco-banana-pancake", name: "Chocolate Banana Pancake", price: 140, emoji: "🥞", description: "Fluffy pancakes with chocolate and banana", popular: true },
      { id: "honey-banana-pancake", name: "Honey Banana Pancake", price: 140, emoji: "🍯", description: "Drizzled with honey and fresh banana slices" },
      { id: "chocolate-pancake", name: "Chocolate Pancake", price: 110, emoji: "🍫", description: "Rich chocolate pancakes — pure indulgence" },
    ],
  },
  {
    id: "beverages", name: "Beverages", emoji: "☕",
    items: [
      { id: "cold-coffee", name: "Cold Coffee Shake", price: 120, emoji: "🧊", description: "Thick, creamy, and ice-cold coffee shake", popular: true },
      { id: "cappuccino", name: "Cappuccino", price: 100, emoji: "☕", description: "Classic espresso with velvety milk foam" },
      { id: "ginger-tea", name: "Ginger Tea / Chai", price: 40, emoji: "🍵", description: "Aromatic ginger-infused masala chai" },
      { id: "hot-chocolate", name: "Hot Chocolate", price: 90, emoji: "🍫", description: "Rich and warming chocolate drink" },
      { id: "mango-mojito", name: "Mango Mojito", price: 120, emoji: "🥭", description: "Refreshing mango mint mocktail" },
      { id: "virgin-mojito", name: "Virgin Mojito", price: 120, emoji: "🍹", description: "Classic lime and mint refreshment" },
    ],
  },
];
