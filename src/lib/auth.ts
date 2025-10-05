import { betterAuth } from "better-auth";
import { username } from "better-auth/plugins"
import { reactStartCookies } from "better-auth/react-start";
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { schema } from "auth-schema";
import { db } from "..";

console.log("Schema keys:", Object.keys(schema)); // Should show: user, account, session, verification
console.log("User table columns:", Object.keys(schema.user)); // Should show all columns

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.user,
      session: schema.session,
      account: schema.account,
      verification: schema.verification,
    }
  }),

  emailAndPassword: {
    enabled: true
  },
  plugins: [
    username(),
    reactStartCookies(),
  ]
});
