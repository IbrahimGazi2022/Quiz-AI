import jwt from "jsonwebtoken";
import { db } from "@/lib/prisma";
import { hash, compare } from "bcryptjs";
import { loginSchema } from "@/lib/validation/loginSchema";
import { registerSchema } from "@/lib/validation/registerSchema";

const JWT_SECRET = process.env.JWT_SECRET || "i_love_coding";;

// Register a new user
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
        throw new Error("This email already exists");
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


// Login a user
export const loginUser = async (userData: unknown) => {

    const parsed = loginSchema.safeParse(userData);
    if (!parsed.success) {
        const msg = parsed.error.issues.map((i) => i.message).join(". ");
        throw new Error(msg);
    }

    const { email, password } = parsed.data;
    const user = await db.user.findUnique({
        where: { email },
    });

    const INVALID_MSG = "Invalid email or password";
    if (!user) {
        throw new Error(INVALID_MSG);
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
        throw new Error(INVALID_MSG);
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: "1d" }
    );

    return {
        user: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        },
        token
    };
}
