import { sql } from "@vercel/postgres";

export async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      org TEXT,
      inquiry_type TEXT NOT NULL,
      message TEXT NOT NULL,
      ip TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;
}

export async function insertSubmission(data: {
  name: string;
  email: string;
  org: string;
  inquiryType: string;
  message: string;
  ip: string;
}) {
  await ensureTable();
  await sql`
    INSERT INTO submissions (name, email, org, inquiry_type, message, ip)
    VALUES (${data.name}, ${data.email}, ${data.org}, ${data.inquiryType}, ${data.message}, ${data.ip})
  `;
}

export async function getSubmissions(limit = 100, offset = 0) {
  await ensureTable();
  const result = await sql`
    SELECT id, name, email, org, inquiry_type, message, created_at
    FROM submissions
    ORDER BY created_at DESC
    LIMIT ${limit} OFFSET ${offset}
  `;
  return result.rows;
}

export async function getSubmissionCount() {
  await ensureTable();
  const result = await sql`SELECT COUNT(*) as count FROM submissions`;
  return Number(result.rows[0].count);
}
