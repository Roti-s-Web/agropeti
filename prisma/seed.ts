import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || "admin@agropeti.ro";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const adminUser = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: hashedPassword,
      isAdmin: true,
      name: "Administrator",
    },
  });

  console.log("✅ Admin user created:", adminUser.email);

  // Sample products data
  const sampleProducts = [
    {
      name: "Îngrășământ NPK 15-15-15",
      description:
        "Îngrășământ complex NPK pentru toate culturile, cu conținut echilibrat de azot, fosfor și potasiu.",
      price: 45.99,
      images: [
        "https://example.com/fertilizer1.jpg",
        "https://example.com/fertilizer1_detail.jpg",
      ],
      category: "fertilizers",
      subcategory: "npk",
      inStock: true,
      featured: true,
      specifications: {
        Tip: "Granulat",
        "Conținut azot": "15%",
        "Conținut fosfor": "15%",
        "Conținut potasiu": "15%",
        Greutate: "25 kg",
      },
    },
    {
      name: "Semințe de porumb hibrid",
      description:
        "Semințe de porumb hibrid de înaltă productivitate, rezistente la secetă.",
      price: 125.5,
      images: ["https://example.com/corn_seeds.jpg"],
      category: "seeds",
      subcategory: "corn",
      inStock: true,
      featured: false,
      discount: 10,
      specifications: {
        Varietate: "Hibrid",
        Rezistență: "Secetă, boli",
        "Perioada vegetativă": "110-120 zile",
        Greutate: "1 kg",
      },
    },
    {
      name: "Herbicid pentru cereale",
      description:
        "Herbicid selectiv pentru controlul buruienilor dicotiledonate în cereale.",
      price: 89.99,
      images: ["https://example.com/herbicide.jpg"],
      category: "pesticides",
      subcategory: "herbicides",
      inStock: true,
      featured: false,
      specifications: {
        Tip: "Lichid",
        Concentrația: "480 g/l",
        Volum: "1 litru",
        Aplicare: "Foliară",
      },
    },
  ];

  // Create sample products
  for (const productData of sampleProducts) {
    const product = await prisma.product.upsert({
      where: {
        name: productData.name,
      },
      update: {},
      create: productData,
    });
    console.log("✅ Product created:", product.name);
  }

  console.log("🎉 Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
