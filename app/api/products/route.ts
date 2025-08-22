import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../../../lib/auth";
import { generateSlug } from "@/lib/utils/generateSlug";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    const searchConditions = search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
            {
              description: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
            {
              category: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
            {
              subcategory: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
          ],
        }
      : {};

    // Get total count for pagination
    const totalCount = await prisma.product.count({
      where: searchConditions,
    });

    const recommendedCount = await prisma.product.count({
      where: { featured: true },
    });

    const inStockCount = await prisma.product.count({
      where: { inStock: true },
    });

    const products = await prisma.product.findMany({
      where: searchConditions,
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    });

    const hasMore = skip + products.length < totalCount;

    return NextResponse.json({
      products,
      total: totalCount,
      recommended: recommendedCount,
      inStock: inStockCount,
      page,
      limit,
      hasMore,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

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
