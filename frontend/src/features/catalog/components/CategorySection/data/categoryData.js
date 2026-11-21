
import { categoryImg } from "@/assets/Images/image";

export const categories = [
  {
    id: 1,
    name: "Men's Collection",
    subtitle: "Everyday essentials, elevated.",
    image: categoryImg.Men,
    link: "/products?category=men",
    featured: true,
  },
  {
    id: 2,
    name: "Women's Collection",
    subtitle: "Discover your signature style.",
    image: categoryImg.Women,
    link: "/products?category=women",
    featured: true,
  },
  {
    id: 3,
    name: "Winter Collection",
    image: categoryImg.Menwinter,
    link: "/products?category=modest-wear",
  },
  {
    id: 4,
    name: "Hijab",
    image: categoryImg.Womenwinter,
    link: "/products?category=traditional",
  },
  {
    id: 5,
    name: "Accessories",
    image: categoryImg.Accessories,
    link: "/products?category=accessories",
  },
  {
    id: 6,
    name: "Footwear",
    image: categoryImg.Shoe,
    link: "/products?category=footwear",
  },
];
