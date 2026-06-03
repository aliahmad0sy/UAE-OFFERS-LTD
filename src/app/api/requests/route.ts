import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const requestSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(9),
  city: z.string().min(1),
  serviceType: z.string().min(1),
  nationality: z.string().optional(),
  notes: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = requestSchema.parse(body);

    // In production, save to database using Prisma
    // const request = await prisma.request.create({ data });

    // For now, log the request (database not configured yet)
    console.log("New recruitment request:", data);

    return NextResponse.json(
      { success: true, message: "Request submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation error", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // In production: const requests = await prisma.request.findMany({ orderBy: { createdAt: 'desc' } });
    const requests: {
      id: string;
      name: string;
      phone: string;
      city: string;
      serviceType: string;
      nationality: string | null;
      notes: string | null;
      status: string;
      createdAt: string;
    }[] = [];

    return NextResponse.json({ requests });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
