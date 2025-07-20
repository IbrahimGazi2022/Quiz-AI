import Link from "next/link";
import Image from "next/image";

const TopicsPage = () => {
  const topics = [
    {
      id: "frontend",
      title: "Frontend Developer",
      description: "HTML, CSS, JavaScript, React, Vue.js",
      icon: "💻",
    },
    {
      id: "backend",
      title: "Backend Developer",
      description: "Node.js, Python, Django, Databases, APIs",
      icon: "⚙️",
    },
    {
      id: "fullstack",
      title: "Fullstack Developer",
      description: "Frontend + Backend combined questions",
      icon: "🔗",
    },
    {
      id: "react",
      title: "React Specialist",
      description: "Advanced React, Hooks, Performance",
      icon: "⚛️",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Choose Your Interview Topic
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Select a topic to start your personalized interview preparation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {topics.map((topic) => (
            <Link
              href={`/quiz?topic=${topic.id}`}
              key={topic.id}
              className="border border-gray-200 rounded-xl p-6 hover:border-[#F47458] transition-all hover:shadow-lg text-left"
            >
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {topic.title}
              </h3>
              <p className="text-gray-600">{topic.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsPage;