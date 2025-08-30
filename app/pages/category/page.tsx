"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Loader } from "@/components/UI/Loader";
import Image from "next/image";

import { useProtectRoute } from "@/components/Hooks/useProtectRoute";
import { topics, Topic } from "./TopicList/topics";
import UserDropdown from "./UserDropDown/UserDropdown";

const Page = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { loading, isAuthenticated } = useProtectRoute({ redirect: "/pages/auth/login" });

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
                <Loader />
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="relative flex flex-col min-h-screen">
            {/* ------------------- Top Bar ------------------- */}
            <header className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 py-2.5 bg-white/50 backdrop-blur-md border border-white/20 shadow-sm">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/img/quizaoi-logo.png"
                        alt="Quizaoi Logo"
                        width={120}
                        height={40}
                        className="w-24 md:w-32"
                    />
                </Link>

                <UserDropdown />
            </header>

            {/* ------------------- Page Content ------------------- */}
            {isLoading && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <Loader />
                </div>
            )}

            <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern" />
            <div className="max-w-[1480px] w-full mt-4 px-4 mx-auto pt-25">
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
                    {topics.map((topic: Topic) => (
                        <Link
                            href={`/pages/quiz?topic=${topic.id}`}
                            key={topic.id}
                            className="group relative overflow-hidden"
                        >
                            <div className="bg-white rounded-xl border-1 border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 z-10">
                                <div className={`${topic.color} h-2 w-full`} />

                                <div className="p-6 flex flex-col items-center ">
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