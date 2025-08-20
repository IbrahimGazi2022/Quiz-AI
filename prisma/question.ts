type QuestionSeedData = {
    question: string;
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    options: {
        label: 'A' | 'B' | 'C' | 'D';
        text: string;
        isCorrect: boolean;
    }[];
};

export const questions: QuestionSeedData[] = [
    {
        question: "What is the main purpose of Next.js?",
        topic: "next",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "It is a state management library", isCorrect: false },
            { label: "B", text: "It is a React framework for server-side rendering and static site generation", isCorrect: true },
            { label: "C", text: "It is a CSS framework", isCorrect: false },
            { label: "D", text: "It is a database management tool", isCorrect: false }
        ]
    },
    {
        question: "Which folder is used for defining API routes in Next.js?",
        topic: "next",
        difficulty: "easy",
        correctAnswer: "C",
        options: [
            { label: "A", text: "pages/components", isCorrect: false },
            { label: "B", text: "pages/static", isCorrect: false },
            { label: "C", text: "pages/api", isCorrect: true },
            { label: "D", text: "pages/hooks", isCorrect: false }
        ]
    },
    {
        question: "What does getStaticProps do in Next.js?",
        topic: "next",
        difficulty: "medium",
        correctAnswer: "A",
        options: [
            { label: "A", text: "Fetches data at build time for static generation", isCorrect: true },
            { label: "B", text: "Fetches data on every client request", isCorrect: false },
            { label: "C", text: "Updates component state dynamically", isCorrect: false },
            { label: "D", text: "Handles client-side routing", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of the Link component in Next.js?",
        topic: "next",
        difficulty: "easy",
        correctAnswer: "B",
        options: [
            { label: "A", text: "To fetch data from the server", isCorrect: false },
            { label: "B", text: "To enable client-side navigation between pages", isCorrect: true },
            { label: "C", text: "To style components using CSS modules", isCorrect: false },
            { label: "D", text: "To handle server-side authentication", isCorrect: false }
        ]
    },
    {
        question: "Which Next.js feature allows pre-rendering pages on the server for each request?",
        topic: "next",
        difficulty: "medium",
        correctAnswer: "C",
        options: [
            { label: "A", text: "getStaticProps", isCorrect: false },
            { label: "B", text: "getServerSidePaths", isCorrect: false },
            { label: "C", text: "getServerSideProps", isCorrect: true },
            { label: "D", text: "useEffect", isCorrect: false }
        ]
    }
]









