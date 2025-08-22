"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Loader } from "@/components/UI/Loader";

type Option = {
  id: string;
  label: string;
  text: string;
  isCorrect: boolean;
};

type Question = {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: string;
};

export default function QuizPage() {
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);
  const [score, setScore] = useState(0);
  const [quizStartAt] = useState(new Date());
  const searchParams = useSearchParams();

  // fetch questions from API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const topic = searchParams.get("topic") || "frontend";
        const res = await fetch(`/api/questions?topic=${topic}`);
        const data = await res.json();
        setQuestions(data.questions);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load questions", err);
      }
    };
    fetchQuestions();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // countdown timer
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

    const isCorrect = currentQuestion.options.find((o) => o.id === optionId)?.isCorrect;
    setSelectedOption(optionId);
    setTimerActive(false);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const saveQuizResult = (finalScore: number) => {
      const total = questions.length;
      const accuracyPercent = Math.round((finalScore / total) * 100);
      const timeSpentSec = Math.round((Date.now() - quizStartAt.getTime()) / 1000);

      // --- make new record --- 
      const newRecord = {
        topic: searchParams.get("topic") || "react",
        score: finalScore,
        total,
        accuracyPercent,
        timeSpentSec,
        startedAt: quizStartAt.toISOString(),
        finishedAt: new Date().toISOString(),
      }

      // --- Stats Update ---
      const statsRaw = localStorage.getItem("quiz:stats");
      const stats = statsRaw ? JSON.parse(statsRaw) : { totalQuizzes: 0, lastQuiz: null };

      const updatedStats = {
        totalQuizzes: stats.totalQuizzes + 1,
        lastQuiz: newRecord,
      };

      localStorage.setItem("quiz:stats", JSON.stringify(updatedStats));

      // --- History Update ---
      const historyRaw = localStorage.getItem("quiz:history");
      const history = historyRaw ? JSON.parse(historyRaw) : [];

      history.unshift(newRecord);
      if (history.length > 50) history.pop();

      localStorage.setItem("quiz:history", JSON.stringify(history));
    };


    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setTimeLeft(30);
      setTimerActive(true);
    } else {
      saveQuizResult(score);
      router.push("/pages/profile");
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <Loader />
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 z-0 bg-grid-pattern" />
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
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
                Question {currentQuestionIndex + 1} of {questions.length}
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
                    <span className="font-bold mr-3">{option.label}.</span>
                    <span>{option.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {selectedOption && (
                <div
                  className={`flex-1 p-4 rounded-lg ${currentQuestion.options.find((o) => o.id === selectedOption)?.isCorrect
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                    }`}
                >
                  {currentQuestion.options.find((o) => o.id === selectedOption)?.isCorrect
                    ? 'Correct! Well done.'
                    : `Incorrect. The correct answer is ${currentQuestion.correctAnswer}.`}
                </div>
              )}

              <button
                onClick={handleNextQuestion}
                disabled={!selectedOption && timeLeft > 0}
                className="bg-[#F47458] hover:bg-[#e06a50] text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isLastQuestion ? "SEE RESULTS" : "NEXT QUESTION →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
