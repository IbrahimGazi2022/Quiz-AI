export interface Topic {
    id: string;
    name: string;
    time: string;
    questions: number;
    difficulty: string;
    icon: string;
    color: string;
    textColor: string;
}

export const topics: Topic[] = [
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
        id: "nextjs",
        name: "Next JS",
        time: "25 Minutes",
        questions: 15,
        difficulty: "Advanced",
        icon: "/img/topic/next.svg",
        color: "bg-gray-100",
        textColor: "text-gray-600",
    },
    {
        id: "javascript",
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
        id: "nodejs",
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

