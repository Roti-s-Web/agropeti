import { prisma } from "../lib/prisma";
import { generateSlug } from "../lib/utils/generateSlug";

async function main() {
  const products = await prisma.product.findMany();

  for (const product of products) {
    const slug = generateSlug(product.name);

    // Check if slug is already set or duplicate
    if (!product.slug || product.slug !== slug) {
      try {
        await prisma.product.update({
          where: { id: product.id },
          data: { slug },
        });
        console.log(`Updated slug for product: ${product.name} -> ${slug}`);
      } catch (error) {
        console.error(`Failed to update product ${product.name}:`, error);
      }
    }
  }

  console.log("All slugs generated/updated successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
