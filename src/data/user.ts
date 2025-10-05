import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import { auth } from "@/lib/auth";

const signupSchema = z.object({
  name: z.string().min(4),
  username: z.string().min(4, 'Username must be at least 4 characters'),
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const signUp = createServerFn({ method: 'POST' })
  .inputValidator(signupSchema)
  .handler(async ({ data }) => {
    try {
      await auth.api.signUpEmail({
        body: {
          name: data.name,
          username: data.username,
          email: data.email,
          password: data.password,
        }
      })
      return {
        success: true,
        message: "Sign Up Sucessfully",
      }
    } catch (error) {
      const e = error as Error;
      return {
        success: false,
        message: e.message || "An Unknown Error has occurred",
      }
    }
  }
  )

