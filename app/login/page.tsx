'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSignIn, useUser } from "@clerk/nextjs";

const LoginPage = () => {
    const router = useRouter();
    const { isSignedIn } = useUser();
    const { signIn, isLoaded, setActive } = useSignIn();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (isSignedIn) {
            router.push("/quiz/topics");
        }
    }, [isSignedIn, router]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoaded || isLoading) return;
        setIsLoading(true);
        setErrorMsg("");
        try {
            const result = await signIn.create({
                identifier: email,
                password,
            });

            if (result.status === "complete") {
                await setActive({ session: result.createdSessionId });
                router.push("/quiz/topics");
            } else {
                setErrorMsg("Please complete additional authentication steps");
            }
        } catch (err: any) {
            console.error("Login error:", err);
            if (err.errors?.[0]?.code === "form_identifier_exists") {
                router.push("/quiz/topics");
                return;
            } else if (err.errors?.[0]?.code === "form_password_incorrect") {
                setErrorMsg("Incorrect password. Please try again.");
            } else if (err.errors?.[0]?.code === "form_identifier_not_found") {
                setErrorMsg("Account not found. Please check your email.");
            } else {
                setErrorMsg(err.errors?.[0]?.message || "Login failed. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const fillDemoCredentials = () => {
        setEmail("admin@admin.com");
        setPassword("$Islam1234");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                    <p className="text-gray-500">Sign in to continue to QuizApp</p>
                </div>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458] transition"
                            placeholder="your@email.com"
                            autoComplete="username"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458] transition"
                            placeholder="••••••••"
                            autoComplete="current-password"
                        />
                    </div>

                    {errorMsg && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                            {errorMsg}
                        </div>
                    )}

                    <div className="space-y-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center items-center gap-2 bg-[#F47458] text-white py-3 px-4 rounded-lg transition shadow-md focus:outline-none focus:ring-2 focus:ring-[#F47458] focus:ring-offset-2 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#e06a50]"
                                }`}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </>
                            ) : "Sign In"}
                        </button>

                        <button
                            type="button"
                            onClick={fillDemoCredentials}
                            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                        >
                            Use Demo Account
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <button
                        className="font-medium text-[#F47458] hover:text-[#e06a50]"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;