import { Pool } from "@neondatabase/serverless";

/**
 * Single shared Pool for the Node runtime (recommended for Neon interactive transactions).
 * Do not use this from Edge middleware — checkout runs on Node.
 */
let pool: Pool | undefined;

export function getPool(): Pool {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }
  if (!pool) {
    pool = new Pool({ connectionString: url });
  }
  return pool;
}
