import { z } from "zod";

export const registerSchema = z.object({
    firstName: z.string()
        .min(2, "First name must be at least 2 characters long")
        .transform(str => str.trim()),
    lastName: z.string()
        .min(2, "Last name must be at least 2 characters long")
        .transform(str => str.trim()),
    email: z.string()
        .email("Invalid email format")
        .transform(str => str.toLowerCase().trim()),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[A-Z]/, "Must contain at least one uppercase letter")
        .regex(/[a-z]/, "Must contain at least one lowercase letter")
        .regex(/[0-9]/, "Must contain at least one number")
});
    