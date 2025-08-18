import React from "react";
import QuestionAccordion from "./QuestionAccordion";

const QuestionsDisplay = ({ questions , page , setQuestionPage }) => {
  return (
    <div
      className="p-6 pb-15 border-t bg-white bg-opacity-50"
      style={{ borderColor: "var(--color-base-300)" }}
    >
      {questions && questions.length > 0 ? (
        questions.map((question, index) => (
          <QuestionAccordion key={index} question={question} num={index + 1} />
        ))
      ) : (
        <p className="text-[var(--color-base-content-secondary)] italic">
          No questions available
        </p>
      )}
      <div className="flex items-center justify-center mt-8 gap-4">
        <button
          onClick={() => setQuestionPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-[var(--color-primary)] text-black font-bold rounded-lg disabled:opacity-50 hover:bg-opacity-80 transition-colors shadow-sm"
          aria-label="Previous page"
        >
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </span>
        </button>
        <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">
          Page {page}
        </span>
        
        <button
          onClick={() => setQuestionPage((val) => val+1)}
          className="px-4 py-2 bg-[var(--color-primary)] text-black font-bold rounded-lg hover:bg-opacity-80 transition-colors shadow-sm"
          aria-label="Next page"
        >
          <span className="flex items-center">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default QuestionsDisplay;
