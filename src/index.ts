import { schema } from 'auth-schema';
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle({
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false, // Accept self-signed certificates
    },
  },
  schema: schema,
});
