"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader } from "@/components/UI/Loader";

interface Topic {
    id: string;
    name: string;
    time: string;
    questions: number;
    difficulty: string;
    icon: string;
    color: string;
    textColor: string;
}


const Page = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const topics: Topic[] = [
        {
            id: "react",
            name: "React",
            time: "15 Minutes",
            questions: 10,
            difficulty: "Intermediate",
            icon: "/img/topic/react.svg",
            color: "bg-blue-100",
            textColor: "text-blue-600",
        },
        {
            id: "next",
            name: "Next JS",
            time: "25 Minutes",
            questions: 15,
            difficulty: "Advanced",
            icon: "/img/topic/next.svg",
            color: "bg-gray-100",
            textColor: "text-gray-600",
        },
        {
            id: "js",
            name: "JavaScript",
            time: "20 Minutes",
            questions: 12,
            difficulty: "Intermediate",
            icon: "/img/topic/js.svg",
            color: "bg-yellow-100",
            textColor: "text-yellow-600",
        },
        {
            id: "ts",
            name: "TypeScript",
            time: "18 Minutes",
            questions: 10,
            difficulty: "Advanced",
            icon: "/img/topic/ts.svg",
            color: "bg-blue-100",
            textColor: "text-blue-600",
        },
        {
            id: "tailwind",
            name: "Tailwind CSS",
            time: "15 Minutes",
            questions: 8,
            difficulty: "Beginner",
            icon: "/img/topic/tailwind.svg",
            color: "bg-teal-100",
            textColor: "text-teal-600",
        },
        {
            id: "node",
            name: "Node.js",
            time: "30 Minutes",
            questions: 20,
            difficulty: "Advanced",
            icon: "/img/topic/node.svg",
            color: "bg-green-100",
            textColor: "text-green-600",
        },
        {
            id: "react2",
            name: "React",
            time: "15 Minutes",
            questions: 10,
            difficulty: "Intermediate",
            icon: "/img/topic/react.svg",
            color: "bg-blue-100",
            textColor: "text-blue-600",
        },
        {
            id: "next2",
            name: "Next JS",
            time: "25 Minutes",
            questions: 15,
            difficulty: "Advanced",
            icon: "/img/topic/next.svg",
            color: "bg-gray-100",
            textColor: "text-gray-600",
        },
    ];

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F47458] to-gray-100">
            <div className="absolute top-5 right-27 z-50" ref={dropdownRef}>
                <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-300 hover:border-gray-400 transition-colors"
                >
                    <img
                        src="/img/user.svg"
                        alt="User Avatar"
                        className="w-full h-full object-cover"
                    />
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
                        <Link
                            href="/pages/profile"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setDropdownOpen(false)}
                        >
                            Profile
                        </Link>
                        <Link
                            href="/settings"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setDropdownOpen(false)}
                        >
                            Settings
                        </Link>
                        <button
                            onClick={() => {
                                console.log("Logout clicked");
                                setDropdownOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {/* Loader Component */}
            {isLoading && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <Loader />
                </div>
            )}

            <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern" />
            <div className="max-w-[1480px] w-full mt-4 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Explore All <span className="text-[#F47458]">Mock Assessments</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Test your knowledge across various technologies
                    </p>
                </div>

                {/* ------------------- Topics Grid ------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topics.map((topic) => (
                        <Link
                            href={`/quiz?topic=${topic.id}`}
                            key={topic.id}
                            className="group relative overflow-hidden"
                        >
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 z-10">
                                <div className={`${topic.color} h-2 w-full`} />

                                <div className="p-6 flex flex-col items-center">
                                    {/* Icon */}
                                    <div
                                        className={`w-20 h-20 ${topic.color} rounded-full flex items-center justify-center mb-4`}
                                    >
                                        <img
                                            src={topic.icon}
                                            alt={topic.name}
                                            className="w-12 h-12"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-3 text-gray-800">
                                        {topic.name}
                                    </h3>

                                    {/* Details */}
                                    <div className="w-full space-y-3 mb-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 flex items-center gap-2">
                                                <img
                                                    src="/img/topic/time.svg"
                                                    alt="Time"
                                                    className="w-4 h-4"
                                                />
                                                Duration
                                            </span>
                                            <span className="font-medium">{topic.time}</span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 flex items-center gap-2">
                                                <img
                                                    src="/img/topic/question.svg"
                                                    alt="Questions"
                                                    className="w-4 h-4"
                                                />
                                                Questions
                                            </span>
                                            <span className="font-medium">{topic.questions}</span>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 flex items-center gap-2">
                                                <img
                                                    src="/img/topic/skill-level.svg"
                                                    alt="Difficulty"
                                                    className="w-4 h-4"
                                                />
                                                Difficulty
                                            </span>
                                            <span className={`font-medium ${topic.textColor}`}>
                                                {topic.difficulty}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <div
                                        className={`inline-flex w-full justify-center py-3 rounded-lg font-semibold border ${topic.textColor} ${topic.textColor.replace(
                                            "text",
                                            "border"
                                        )} bg-white hover:${topic.color} transition-colors duration-300 cursor-pointer`}
                                    >
                                        Start Assessment
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
