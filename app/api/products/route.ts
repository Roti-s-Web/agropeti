import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";
import { generateSlug } from "@/lib/utils/generateSlug";

// GET - Fetch all products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST - Create new product
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.isAdmin) {
      console.log(session);
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      description,
      price,
      images,
      category,
      subcategory,
      inStock,
      featured,
      discount,
      specifications,
    } = body;

    // Validation
    if (
      !name ||
      !description ||
      !price ||
      !images.length ||
      !category ||
      !subcategory
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: {
        name,
        slug: generateSlug(name),
        description,
        price: parseFloat(price),
        images,
        category,
        subcategory,
        inStock: Boolean(inStock),
        featured: Boolean(featured),
        discount: discount ? parseFloat(discount) : null,
        specifications: specifications || {},
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
