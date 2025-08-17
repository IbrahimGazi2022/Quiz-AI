'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/UI/Input";

const RegisterPage = () => {
    const router = useRouter();

    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                }),
            })

            if (!res.ok) {
                const data = await res.json();
                setError(data.message || "Failed to register");
                return;
            }
            router.push("/auth/login");
        } catch {
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white p-4">
            <div className="absolute inset-0 z-0 bg-grid-pattern" />
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
                    <p className="text-gray-500">Sign up to get started with QuizApp</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="First Name"
                            id="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                        />
                        <Input
                            label="Last Name"
                            id="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                        />
                    </div>
                    <Input
                        label="Email Address"
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        autoComplete="email"
                    />

                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        autoComplete="new-password"
                    />

                    <Input
                        label="Confirm Password"
                        id="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        autoComplete="new-password"
                    />

                    {/* set error */}
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div>
                        <button
                            type="submit"
                            className={`w-full flex justify-center items-center gap-2 bg-[#F47458] text-white py-3 px-4 rounded-lg transition cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#F47458] focus:ring-offset-2 `}
                        >
                            Sign Up
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