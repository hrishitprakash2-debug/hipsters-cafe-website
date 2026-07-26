export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "interior" | "food" | "events" | "vibe";
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop", alt: "Retro cafe interior", caption: "Our cozy retro-inspired interiors", category: "interior" },
  { id: "g2", src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop", alt: "Delicious food", caption: "A spread of our signature dishes", category: "food" },
  { id: "g3", src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop", alt: "Open mic night", caption: "Vibrant open mic nights", category: "events" },
  { id: "g4", src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop", alt: "Coffee art", caption: "Where every cup is a work of art", category: "vibe" },
  { id: "g5", src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop", alt: "Pancakes", caption: "Our famous chocolate banana pancakes", category: "food" },
  { id: "g6", src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop", alt: "Reading corner", caption: "Bookshelves and board games", category: "interior" },
  { id: "g7", src: "https://images.unsplash.com/photo-1513267048331-5619c1ca3896?w=600&h=400&fit=crop", alt: "Momos", caption: "Steaming hot schezwan momos", category: "food" },
  { id: "g8", src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&h=400&fit=crop", alt: "Live music", caption: "Guitar nights and open mic sessions", category: "events" },
];
