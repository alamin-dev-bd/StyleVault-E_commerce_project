
import { categoryImg } from "@/assets/Images/image";
import {
  Sparkles,
  TrendingUp,
  Tag,
} from "lucide-react";

// Campaign slider images
export const campaignImages = [
  categoryImg.Mensummer,
  categoryImg.Accessories,
  categoryImg.Menwinter,
];

// Quick shopping shortcuts
export const quickPicks = [
  {
    title: "New Arrivals",
    subtitle: "Fresh styles",
    icon: Sparkles,
    link: "/new-arrivals",
  },
  {
    title: "Trending",
    subtitle: "Popular now",
    icon: TrendingUp,
    link: "/products?sort=popular",
  },
  {
    title: "Special Offers",
    subtitle: "Great deals",
    icon: Tag,
    link: "/sale",
  },
];
