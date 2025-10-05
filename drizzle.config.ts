import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "auth-schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
});

