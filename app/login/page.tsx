'use client';

import { useSignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LoginPage = () => {
    const router = useRouter();
    const { isSignedIn } = useUser();
    const { signIn, isLoaded } = useSignIn();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        if (isSignedIn) {
            router.push("/quiz/topics");
        }
    }, [isSignedIn, router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoaded) return;

        try {
            const result = await signIn.create({
                identifier: email,
                password,
            });

            if (result.status === "complete") {
                router.push("/quiz/topics");
            } else {
                setErrorMsg("Login not completed. Try again.");
            }
        } catch (err: any) {
            console.error("Login error:", err);
            setErrorMsg(err.errors?.[0]?.message || "Login failed");
        }
    };

    const fillDemoCredentials = () => {
        setEmail("admin@admin.com");
        setPassword("$Islam1234");
      };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome Back</h2>
                <p className="text-gray-500 text-center mb-6">Sign in to your account</p>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458] transition"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458] transition"
                            placeholder="••••••••"
                        />
                    </div>

                    {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}

                    <button
                        type="submit"
                        className="w-full bg-[#F47458] text-white py-3 px-4 rounded-lg hover:bg-[#e06a50] transition shadow-md focus:outline-none focus:ring-2 focus:ring-[#F47458] focus:ring-offset-2"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        onClick={fillDemoCredentials}
                        className="w-full bg-[#F47458] text-white py-3 px-4 rounded-lg hover:bg-[#e06a50] transition shadow-md focus:outline-none focus:ring-2 focus:ring-[#F47458] focus:ring-offset-2"
                    >
                        Use Demo Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
