import { prisma } from "./prisma";
import { unstable_cache } from "next/cache";

export const getFeaturedProducts = unstable_cache(
  async () => {
    return await prisma.product.findMany({
      where: { featured: true, inStock: true },
      orderBy: { createdAt: "desc" },
      take: 12,
    });
  },
  ["featured-products"],
  { revalidate: 60 }
);
