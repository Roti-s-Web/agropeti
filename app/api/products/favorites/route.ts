import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { ids } = body as { ids: string[] };

    if (!ids || !Array.isArray(ids)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const products = await prisma.product.findMany({
      where: {
        id: { in: ids },
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching favorite products:", error);
    return NextResponse.json(
      { error: "Failed to fetch favorite products" },
      { status: 500 }
    );
  }
}
