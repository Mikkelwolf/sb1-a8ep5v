import React from 'react';
import { Question } from '../types';

interface FlowchartQuestionProps {
  question: Question;
  onAnswerSelected: (nextQuestionId: string | null) => void;
}

const FlowchartQuestion: React.FC<FlowchartQuestionProps> = ({ question, onAnswerSelected }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
      <h3 className="text-2xl font-bold mb-4">{question.text}</h3>
      {question.description && (
        <p className="mb-6 text-gray-700 whitespace-pre-line">{question.description}</p>
      )}
      {question.affiliateLinks && (
        <div className="mb-4 space-y-2">
          {question.affiliateLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
      <div className="space-y-2">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => onAnswerSelected(answer.nextQuestionId)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlowchartQuestion;