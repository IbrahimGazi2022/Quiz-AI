"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ResultPage() {
  const searchParams = useSearchParams();
  const score = searchParams.get('score');
  const total = searchParams.get('total');

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 text-center">
          <h1 className="text-3xl font-bold text-[#F47458] mb-4">Quiz Completed!</h1>
          <div className="text-5xl font-bold mb-6">
            {score}/{total}
          </div>
          <p className="text-gray-600 mb-8">
            {Number(score) / Number(total) >= 0.7 ? 'Great job!' : 'Keep practicing!'}
          </p>
          <Link
            href="/quiz"
            className="bg-[#F47458] hover:bg-[#e06a50] text-white font-medium py-3 px-6 rounded-lg transition-all inline-block"
          >
            Try Again
          </Link>
        </div>
      </div>
    </>
  );
}