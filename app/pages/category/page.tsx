"use client"; ``

import React, { useState } from 'react'
import Link from 'next/link';
import { Loader } from "@/components/UI/Loader";

const page = () => {
    const [isLoading, setIsLoading] = useState(false);
    const technologies = [
        {
            name: 'React',
            time: '15 Minutes',
            questions: 10,
            difficulty: 'Intermediate',
            icon: '/img/tech/react.svg',
            color: 'bg-blue-100',
            textColor: 'text-blue-600'
        },
        {
            name: 'Next JS',
            time: '25 Minutes',
            questions: 15,
            difficulty: 'Advanced',
            icon: '/img/tech/next.svg',
            color: 'bg-gray-100',
            textColor: 'text-gray-600'
        },
        {
            name: 'JavaScript',
            time: '20 Minutes',
            questions: 12,
            difficulty: 'Intermediate',
            icon: '/img/tech/js.svg',
            color: 'bg-yellow-100',
            textColor: 'text-yellow-600'
        },
        {
            name: 'TypeScript',
            time: '18 Minutes',
            questions: 10,
            difficulty: 'Advanced',
            icon: '/img/tech/ts.svg',
            color: 'bg-blue-100',
            textColor: 'text-blue-600'
        },
        {
            name: 'Tailwind CSS',
            time: '15 Minutes',
            questions: 8,
            difficulty: 'Beginner',
            icon: '/img/tech/tailwind.svg',
            color: 'bg-teal-100',
            textColor: 'text-teal-600'
        },
        {
            name: 'Node.js',
            time: '30 Minutes',
            questions: 20,
            difficulty: 'Advanced',
            icon: '/img/tech/node.svg',
            color: 'bg-green-100',
            textColor: 'text-green-600'
        },
    ];

    return (
        <div className='relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-6'>
            {/* Loader */}
            {isLoading && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <Loader />
                </div>
            )}
            <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern" />
            <div className='max-w-6xl w-full'>
                <div className='text-center mb-12'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-2'>Explore All <span className='text-[#F47458]'>Mock Assessments</span></h1>
                    <p className='text-lg text-gray-600'>Test your knowledge across various technologies</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {technologies.map((tech, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 z-10">
                            <div className={`${tech.color} h-2 w-full`}></div>
                            <div className="p-6 flex flex-col items-center">
                                <div className={`w-20 h-20 ${tech.color} rounded-full flex items-center justify-center mb-4`}>
                                    <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">{tech.name}</h3>

                                <div className="w-full space-y-3 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 flex items-center gap-2">
                                            <img src="/img/tech/time.svg" alt="Time" className="w-4 h-4" />
                                            Duration
                                        </span>
                                        <span className="font-medium">{tech.time}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 flex items-center gap-2">
                                            <img src="/img/tech/question.svg" alt="Questions" className="w-4 h-4" />
                                            Questions
                                        </span>
                                        <span className="font-medium">{tech.questions}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 flex items-center gap-2">
                                            <img src="/img/tech/skill-level.svg" alt="Difficulty" className="w-4 h-4" />
                                            Difficulty
                                        </span>
                                        <span className={`font-medium ${tech.textColor}`}>{tech.difficulty}</span>
                                    </div>
                                </div>

                                <Link
                                    href="/auth/login"
                                    onClick={() => setIsLoading(true)}
                                    className={`inline-flex w-full justify-center py-3 rounded-lg font-semibold border ${tech.textColor} ${tech.textColor.replace(
                                        'text',
                                        'border'
                                    )} bg-white hover:${tech.color} transition-colors duration-300`}
                                >
                                    Start Assessment
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page