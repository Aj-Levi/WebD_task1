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
      <div className="flex justify-between mt-15">
        <button
          onClick={() => setQuestionPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-[var(--color-primary)] text-black font-bold rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        {page}
        <button
          onClick={() => setQuestionPage((val) => val+1)}
          className="px-4 py-2 bg-[var(--color-primary)] text-black font-bold rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionsDisplay;
