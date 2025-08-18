import { NextResponse } from "next/server"
import { loginUser } from "@/app/controllers/authController";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const user = await loginUser(body);

        return NextResponse.json(
            { success: true, data: user },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            {
                success: false,
                message: error?.message || "Login failed",
            },
            { status: 400 }
        );
    }
}