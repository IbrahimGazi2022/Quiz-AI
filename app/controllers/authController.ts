import { db } from "@/lib/prisma";
import bcrypt, { hash } from "bcryptjs";
import { registerSchema } from "@/lib/validation/registerSchema";


export const registerUser = async (userData: unknown) => {
    const validationResult = registerSchema.safeParse(userData);

    if (!validationResult.success) {
        const errorMessages = validationResult.error.issues
            .map(issue => issue.message)
            .join(". ");
        throw new Error(errorMessages);
    }
    const validatedData = validationResult.data;

    const existingUser = await db.user.findUnique({
        where: { email: validatedData.email }
    });

    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    try {
        const hashedPassword = await hash(validatedData.password, 10);

        const newUser = await db.user.create({
            data: {
                firstName: validatedData.firstName,
                lastName: validatedData.lastName,
                email: validatedData.email,
                password: hashedPassword
            }, select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true
            }
        })

        return newUser
    } catch (error) {
        console.error("Registration error:", error);
        throw new Error("Failed to create user. Please try again.");
    }
}