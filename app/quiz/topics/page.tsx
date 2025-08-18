"use client";

import Link from "next/link";

const TopicsPage = () => {

  const topics = [
    {
      id: "frontend",
      title: "Frontend Developer",
      description: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS",
      icon: "💻",
    },
    {
      id: "backend",
      title: "Backend Developer",
      description: "Node.js, Express, REST APIs, Authentication, Server-side logic",
      icon: "⚙️",
    },
    {
      id: "database",
      title: "Database",
      description: "SQL, NoSQL, PostgreSQL, MongoDB, Prisma, Relationships & Queries",
      icon: "🗄️",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF5F3] to-[#FFEDEA] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Interview Path
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select a specialization to begin your tailored interview preparation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Link
              href={`/quiz?topic=${topic.id}`}
              key={topic.id}
              className="group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white rounded-2xl shadow-sm transition-all duration-300 group-hover:shadow-md"></div>
              <div className="relative z-10 h-full p-8 flex flex-col text-center justify-center items-center">
                <div className="w-16 h-16 bg-[#F47458]/10 rounded-xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#F47458]/20">
                  {topic.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-600 mb-6">{topic.description}</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-sm font-medium text-[#F47458] group-hover:underline">
                    Start preparing
                    <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-[#F47458]/30 transition-all duration-500 group-hover:h-2 group-hover:bg-[#F47458]"></div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            className="px-6 py-3 bg-[#F47458] text-white rounded-lg hover:bg-[#E06A50] transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopicsPage;
