import { NextRequest, NextResponse } from "next/server";
import { getSubmissions, getSubmissionCount } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const limit = 50;
    const offset = (page - 1) * limit;

    const [submissions, total] = await Promise.all([
      getSubmissions(limit, offset),
      getSubmissionCount(),
    ]);

    return NextResponse.json({
      submissions,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Failed to fetch submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch submissions" },
      { status: 500 }
    );
  }
}
