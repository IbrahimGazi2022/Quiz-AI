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
        question: "What does the <meta charset=\"UTF-8\"> tag do in HTML?",
        topic: "frontend",
        difficulty: "easy",
        correctAnswer: "C", 
        options: [
            { label: "A", text: "It adds metadata for search engines", isCorrect: false },
            { label: "B", text: "It links to an external CSS file", isCorrect: false },
            { label: "C", text: "It sets the character encoding to UTF-8", isCorrect: true },
            { label: "D", text: "It defines the viewport settings", isCorrect: false }
        ]
    },
    {
        question: "Which HTTP method is typically used to update data on a server?",
        topic: "backend",
        difficulty: "medium",
        correctAnswer: "B",
        options: [
            { label: "A", text: "GET", isCorrect: false },
            { label: "B", text: "PUT", isCorrect: true },
            { label: "C", text: "DELETE", isCorrect: false },
            { label: "D", text: "OPTIONS", isCorrect: false }
        ]
    },
    {
        question: "What is the primary key used for in a relational database?",
        topic: "database",
        difficulty: "easy",
        correctAnswer: "A",
        options: [
            { label: "A", text: "To uniquely identify each record", isCorrect: true },
            { label: "B", text: "To store large binary data", isCorrect: false },
            { label: "C", text: "To link to external tables", isCorrect: false },
            { label: "D", text: "To encrypt data", isCorrect: false }
        ]
    },
];

  
  




