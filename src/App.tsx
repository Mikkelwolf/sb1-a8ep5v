import React, { useState } from 'react';
import { flowchartData } from './data/flowchartData';
import FlowchartQuestion from './components/FlowchartQuestion';
import { Question } from './types';
import Confetti from 'react-confetti';

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question>(flowchartData.questions[0]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswerSelected = (nextQuestionId: string | null) => {
    if (nextQuestionId) {
      const nextQuestion = flowchartData.questions.find(q => q.id === nextQuestionId);
      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
        if (nextQuestion.id === 'finish') {
          setShowConfetti(true);
          setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {showConfetti && <Confetti />}
      <h1 className="text-4xl font-bold mb-2 text-center">Investeringsguide for nybegyndere!</h1>
      <h2 className="text-2xl mb-8 text-center">Flowchart baseret på de danske skatteregler og dine behov</h2>
      <FlowchartQuestion question={currentQuestion} onAnswerSelected={handleAnswerSelected} />
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Om denne guide</h2>
        <p className="max-w-2xl mx-auto">
          Denne interaktive guide tager udgangspunkt i de danske skatteregler og hjælper dig med at finde ud af hvordan du bedst kommer i gang med at spare penge op til dit personlige behov.<br />Der er stor forskel på hvordan du bør investere afhængigt af om du for eksempel ønsker at gå tidligt på pension, sparer op til dine børn, eller ønsker at have flere penge mellem hænderne når du bliver gammel. Alt dette - og mere - tager denne guide højde for.
        </p>
      </div>
    </div>
  );
};

export default App;