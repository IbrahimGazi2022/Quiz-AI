'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSignUp, useUser } from "@clerk/nextjs";
import Link from "next/link";

const RegisterPage = () => {
    const router = useRouter();
    const { isSignedIn } = useUser();
    const { signUp, isLoaded, setActive } = useSignUp();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [infoMsg, setInfoMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            router.push("/quiz/topics");
        }
    }, [isSignedIn, router]);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoaded || isLoading) return;

        setErrorMsg("");
        setInfoMsg("");

        if (password !== confirmPassword) {
            setErrorMsg("Passwords don't match");
            return;
        }

        setIsLoading(true);

        try {
            const result = await signUp.create({
                emailAddress: email,
                password,
            });

            if (result.status === "complete") {
                await signUp.update({
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                });

                await setActive({ session: result.createdSessionId });
                router.push("/quiz/topics");

            } else if (result.status === "needs_email_verification" as any) {
                setInfoMsg("Please verify your email address. A verification link has been sent to your email.");

            } else {
                setErrorMsg("Please complete the verification process.");
            }
        } catch (err: any) {
            console.error("Registration error:", err);
            if (err.errors?.[0]?.code === "form_password_pwned") {
                setErrorMsg("Password is too common. Please choose a stronger one.");
            } else if (err.errors?.[0]?.code === "form_param_format_invalid") {
                setErrorMsg("Invalid email format");
            } else if (err.errors?.[0]?.code === "form_identifier_exists") {
                setErrorMsg("An account with this email already exists");
            } else {
                setErrorMsg(err.errors?.[0]?.message || "Registration failed. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white p-4">
            <div className="absolute inset-0 z-0 bg-grid-pattern" />
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                    <p className="text-gray-500">Sign up to get started with QuizApp</p>
                </div>

                <form className="space-y-6" onSubmit={handleRegister}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458] transition"
                                placeholder="John"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458] transition"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

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
                            autoComplete="email"
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
                            autoComplete="new-password"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F47458] focus:border-[#F47458] transition"
                            placeholder="••••••••"
                            autoComplete="new-password"
                        />
                    </div>

                    {/* Clerk CAPTCHA container for Smart CAPTCHA */}
                    <div id="clerk-captcha" className="mt-2"></div>

                    {errorMsg && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
                            {errorMsg}
                        </div>
                    )}

                    {infoMsg && (
                        <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg">
                            {infoMsg}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center items-center gap-2 bg-[#F47458] text-white py-3 px-4 rounded-lg transition cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#F47458] focus:ring-offset-2 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#e06a50]"
                                }`}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating account...
                                </>
                            ) : "Sign Up"}
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link
                        href="/auth/login"
                        className="font-medium text-[#F47458] hover:text-[#e06a50]"
                    >
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
