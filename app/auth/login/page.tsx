'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/UI/Input";
import { Loader } from "@/components/UI/Loader";
import Link from "next/link";
import toast from 'react-hot-toast';


const LoginPage = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Login failed");
                setIsLoading(false);
                return;
            }

            localStorage.setItem("token", data.data.token);
            localStorage.setItem("user", JSON.stringify(data.data.user));
            toast.success("Login successful! 🎉");
            setIsLoading(false);
            router.push("/pages/category");
        } catch {
            setError("Something went wrong. Please try again.");
            setIsLoading(false);
        }

    };

    const fillDemoCredentials = () => {
        setFormData({
            email: "demo.account@gmail.com",
            password: "@Demo1234",
        });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white p-4">

            {isLoading && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <Loader />
                </div>
            )}

            <div className="absolute inset-0 z-0 bg-grid-pattern" />
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
                    <p className="text-gray-500">Sign in to continue to QuizApp</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
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
                        autoComplete="current-password"
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <div className="space-y-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full flex justify-center items-center gap-2 bg-[#F47458] text-white py-3 px-4 rounded-lg transition cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-[#F47458] focus:ring-offset-2 ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#e06a50]"
                                }`}
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            onClick={fillDemoCredentials}
                            className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg cursor-pointer hover:bg-gray-200 transition shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                        >
                            Use Demo Account
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <Link href="/auth/register" className="font-medium text-[#F47458] hover:text-[#e06a50]">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;