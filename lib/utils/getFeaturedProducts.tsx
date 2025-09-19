import { prisma } from "../prisma";
import { unstable_cache } from "next/cache";
import { Product } from "@/types/types";

export const getFeaturedProducts = unstable_cache(
  async (): Promise<Product[]> => {
    const products = await prisma.product.findMany({
      where: { featured: true, inStock: true },
      orderBy: { createdAt: "desc" },
      take: 12,
    });

    return products.map((p) => ({
      ...p,
      specifications: p.specifications
        ? Object.fromEntries(
            Object.entries(p.specifications as Record<string, unknown>).map(
              ([k, v]) => [k, String(v)]
            )
          )
        : null,
    }));
  },
  ["featured-products"],
  { revalidate: 60 }
);
