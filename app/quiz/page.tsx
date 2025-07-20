"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

// টপিক ভিত্তিক প্রশ্ন ডাটা
const questionsData = {
  frontend: [
    {
      id: 1,
      question: "What is the purpose of the Virtual DOM in React?",
      options: [
        { id: 'A', text: "To directly manipulate the browser DOM", isCorrect: false },
        { id: 'B', text: "To improve performance by minimizing DOM updates", isCorrect: true },
        { id: 'C', text: "To replace the browser DOM completely", isCorrect: false },
        { id: 'D', text: "To handle server-side rendering", isCorrect: false }
      ],
      correctAnswer: "B"
    },
    {
      id: 2,
      question: "Which CSS property is used to create space between elements?",
      options: [
        { id: 'A', text: "padding", isCorrect: false },
        { id: 'B', text: "margin", isCorrect: true },
        { id: 'C', text: "border", isCorrect: false },
        { id: 'D', text: "spacing", isCorrect: false }
      ],
      correctAnswer: "B"
    }
  ],
  backend: [
    {
      id: 1,
      question: "What is the purpose of middleware in Express.js?",
      options: [
        { id: 'A', text: "To connect to databases", isCorrect: false },
        { id: 'B', text: "To handle HTTP requests and responses", isCorrect: true },
        { id: 'C', text: "To create API routes", isCorrect: false },
        { id: 'D', text: "To render frontend views", isCorrect: false }
      ],
      correctAnswer: "B"
    },
    {
      id: 2,
      question: "Which HTTP status code indicates a successful creation of a resource?",
      options: [
        { id: 'A', text: "200 OK", isCorrect: false },
        { id: 'B', text: "201 Created", isCorrect: true },
        { id: 'C', text: "204 No Content", isCorrect: false },
        { id: 'D', text: "400 Bad Request", isCorrect: false }
      ],
      correctAnswer: "B"
    }
  ],
  fullstack: [
    {
      id: 1,
      question: "What is CORS and why is it important in web development?",
      options: [
        { id: 'A', text: "A security feature that prevents all cross-origin requests", isCorrect: false },
        { id: 'B', text: "A mechanism to allow controlled cross-origin requests", isCorrect: true },
        { id: 'C', text: "A database optimization technique", isCorrect: false },
        { id: 'D', text: "A frontend state management pattern", isCorrect: false }
      ],
      correctAnswer: "B"
    },
    {
      id: 2,
      question: "Which of these is a benefit of using JWT for authentication?",
      options: [
        { id: 'A', text: "No server-side storage needed for session data", isCorrect: true },
        { id: 'B', text: "Built-in password hashing", isCorrect: false },
        { id: 'C', text: "Automatic CSRF protection", isCorrect: false },
        { id: 'D', text: "No need for HTTPS", isCorrect: false }
      ],
      correctAnswer: "A"
    }
  ],
  react: [
    {
      id: 1,
      question: "What is the correct way to update state based on previous state in React?",
      options: [
        { id: 'A', text: "setCount(count + 1)", isCorrect: false },
        { id: 'B', text: "setCount(prevCount => prevCount + 1)", isCorrect: true },
        { id: 'C', text: "this.state.count += 1", isCorrect: false },
        { id: 'D', text: "count = count + 1", isCorrect: false }
      ],
      correctAnswer: "B"
    },
    {
      id: 2,
      question: "When would you use useMemo hook?",
      options: [
        { id: 'A', text: "To perform side effects", isCorrect: false },
        { id: 'B', text: "To memoize expensive calculations", isCorrect: true },
        { id: 'C', text: "To handle form submissions", isCorrect: false },
        { id: 'D', text: "To create context providers", isCorrect: false }
      ],
      correctAnswer: "B"
    }
  ]
};

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const topic = searchParams.get('topic') || 'frontend'; // ডিফল্ট টপিক

  // নির্বাচিত টপিকের প্রশ্নগুলো লোড করুন
  const questions = questionsData[topic as keyof typeof questionsData] || questionsData.frontend;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, timerActive]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft]);

  const handleOptionSelect = (optionId: string) => {
    if (selectedOption) return;

    const isCorrect = currentQuestion.options.find(o => o.id === optionId)?.isCorrect;
    setSelectedOption(optionId);
    setTimerActive(false);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setTimeLeft(30);
      setTimerActive(true);
    } else {
      router.push(`/quiz/result?score=${score}&total=${questions.length}&topic=${topic}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-gray-50 flex items-center justify-center p-4">
            <Image
              src="/img/Manthinking-bro.png"
              alt="Man thinking"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <div className="w-full md:w-2/3 p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {questions.length} ({topic})
              </div>
              <div className={`text-lg font-bold ${timeLeft < 10 ? 'text-red-500' : 'text-[#F47458]'}`}>
                ⏱️ {timeLeft}s
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              {currentQuestion.question}
            </h1>

            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`p-4 border-2 rounded-lg transition-all ${selectedOption === option.id
                    ? option.isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-[#F47458]'
                    } ${!selectedOption ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="flex items-center">
                    <span className="font-bold mr-3">{option.id}.</span>
                    <span>{option.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {selectedOption && (
                <div
                  className={`flex-1 p-4 rounded-lg ${currentQuestion.options.find(o => o.id === selectedOption)?.isCorrect
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                    }`}
                >
                  {currentQuestion.options.find(o => o.id === selectedOption)?.isCorrect
                    ? 'Correct! Well done.'
                    : `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`}
                </div>
              )}

              <button
                onClick={handleNextQuestion}
                disabled={!selectedOption && timeLeft > 0}
                className="bg-[#F47458] hover:bg-[#e06a50] text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isLastQuestion ? 'SEE RESULTS' : 'NEXT QUESTION →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}