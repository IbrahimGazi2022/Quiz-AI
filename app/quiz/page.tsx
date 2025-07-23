"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const questions = [
  {
    id: 1,
    question: "Who is Anakin Skywalker when he goes to the Dark Side?",
    options: [
      { id: 'A', text: "Darth Sidious", isCorrect: false },
      { id: 'B', text: "Darth Tyannus", isCorrect: false },
      { id: 'C', text: "Darth Vader", isCorrect: true },
      { id: 'D', text: "Darth Maul", isCorrect: false }
    ],
    correctAnswer: "C"
  },
  {
    id: 2,
    question: "Who trained Yoda?",
    options: [
      { id: 'A', text: "Qui-Gon Jinn", isCorrect: false },
      { id: 'B', text: "Obi-Wan Kenobi", isCorrect: false },
      { id: 'C', text: "N'Kata Del Gormo", isCorrect: true },
      { id: 'D', text: "Mace Windu", isCorrect: false }
    ],
    correctAnswer: "C"
  }
];

export default function QuizPage() {
  const router = useRouter();
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
      router.push(`/quiz/result?score=${score}&total=${questions.length}`);
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
