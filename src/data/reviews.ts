export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  source: string;
}

export const reviews: Review[] = [
  { id: "r1", name: "Shaini Tyagi", text: "Nice cafe with good atmosphere. Ordered hot chocolate and schezwan momos. Tasty food and great ambiance.", rating: 5, source: "Google" },
  { id: "r2", name: "Gauric Saxena", text: "Delicious food, grt ambience, lovely decore and definitely soothing music. This place is a must visit for youngsters and families alike.", rating: 5, source: "Google" },
  { id: "r3", name: "Akash Makkar", text: "Amazing vibe and cozy ambience with great food.. What else do you need! Highly recommend 👌", rating: 5, source: "Google" },
  { id: "r4", name: "Mayank Goyal", text: "One of the best places in Ghaziabad. Its our always go to place/adda. Love their open mic sessions. Kudos", rating: 5, source: "Google" },
  { id: "r5", name: "Harsh Kumar", text: "Chill, quirky, and creative — a hipster-style coffee spot with travel-inspired decor, bookshelves for reading, board games, and a relaxed setting.", rating: 4, source: "Google" },
  { id: "r6", name: "Sparsh Yadav", text: "The best thing I liked about this cafe is that it is spacious and you can have fun with your gang for hours.", rating: 5, source: "Google" },
];
