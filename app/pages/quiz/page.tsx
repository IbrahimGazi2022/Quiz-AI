import { Suspense } from "react";
import QuizPage from "./ QuizPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl">Loading quiz...</div>}>
      <QuizPage />
    </Suspense>
  );
}
