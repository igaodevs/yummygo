export const FOOD_CATEGORIES = {
  burger: "burger",
  pizza: "pizza",
  pasta: "pasta",
  salad: "salad",
  dessert: "dessert",
  drink: "drink",
} as const;

type FoodCategory = keyof typeof FOOD_CATEGORIES;

export const getRandomFoodImage = (category: FoodCategory): string => {
  const imageMap = {
    burger: [
      "photo-1568901346375-23c9450c58cd",
      "photo-1586816001966-79b736744398",
      "photo-1571091718767-18b5b1457add",
    ],
    pizza: [
      "photo-1513104890138-7c749659a591",
      "photo-1604382355076-af4b0eb60143",
      "photo-1565299624946-b28f40a0ae38",
    ],
    pasta: [
      "photo-1563379926898-05f4575a45d8",
      "photo-1556761223-4c4282c73f77",
      "photo-1473093295043-cdd812d0e601",
    ],
    salad: [
      "photo-1512621776951-a57141f2eefd",
      "photo-1540420773420-3366772f4999",
      "photo-1546069901-ba9599a7e63c",
    ],
    dessert: [
      "photo-1563805042-7684c019e1cb",
      "photo-1551024601-bec78aea704b",
      "photo-1587314168485-3236d6710814",
    ],
    drink: [
      "photo-1544145945-f90425340c7e",
      "photo-1437418747212-8d9709afab22",
      "photo-1513558161293-cdaf765ed2fd",
    ],
  };

  const images = imageMap[category];
  const randomIndex = Math.floor(Math.random() * images.length);
  return `https://images.unsplash.com/${images[randomIndex]}?auto=format&fit=crop&w=500&q=80`;
};

export const getRandomAvatar = (seed: string): string => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
};
