import React from "react";
import CategoryAccordion from "./CategoryAccordion";

const CategoriesDisplay = ({ categories , page , setCategoryPage }) => {
  return (
    <div className="pb-15">
      {categories.map((category) => (
        <CategoryAccordion
          key={String(category._id)}
          title={category.title}
          children={category.questions}
        />
      ))}
      <div className="flex justify-between mt-15">
        <button
          onClick={() => setCategoryPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-[var(--color-primary)] text-black font-bold rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        {page}
        <button
          onClick={() => setCategoryPage((val) => val+1)}
          className="px-4 py-2 bg-[var(--color-primary)] text-black font-bold rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CategoriesDisplay;
