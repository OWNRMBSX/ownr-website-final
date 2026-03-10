import { NextRequest, NextResponse } from "next/server";

function timingSafeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    // Compare against b anyway to avoid length-based timing leak
    let result = a.length ^ b.length;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ (b.charCodeAt(i % b.length) || 0);
    }
    return result === 0;
  }
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export function middleware(req: NextRequest) {
  const expectedUser = process.env.SITE_USER;
  const expectedPass = process.env.SITE_PASS;

  if (!expectedUser || !expectedPass) {
    return NextResponse.next();
  }

  const auth = req.headers.get("authorization");

  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const decoded = atob(encoded);
      const [user, ...passParts] = decoded.split(":");
      const pass = passParts.join(":");
      if (
        timingSafeCompare(user, expectedUser) &&
        timingSafeCompare(pass, expectedPass)
      ) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="OWNR"',
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
