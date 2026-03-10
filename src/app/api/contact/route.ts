import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function sanitize(value: unknown, maxLength = 1000): string {
  if (typeof value !== "string") return "";
  return value.slice(0, maxLength).trim();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const name = sanitize(body.name, 200);
    const email = sanitize(body.email, 320);
    const org = sanitize(body.org, 200);
    const inquiryType = sanitize(body.inquiryType, 100);
    const message = sanitize(body.message, 5000);

    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("Contact form submission:", {
      name,
      email,
      org: org || "N/A",
      inquiryType,
      message: message.slice(0, 500),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
