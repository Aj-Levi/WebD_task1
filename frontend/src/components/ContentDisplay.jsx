import React, { useEffect, useState } from 'react'
import QuestionsDisplay from './QuestionsDisplay';
import CategoriesDisplay from './CategoriesDisplay';

const ContentDisplay = () => {
    const [categories, setCategories] = useState([]);
    const [filteredQues, setFilteredQues] = useState([]);
    const [search, setSearch] = useState("")
    const [category_page, setCategoryPage] = useState(1);
    const [question_page, setQuestionPage] = useState(1);

    useEffect(() => {
      const getData = async () => {
        const response = await fetch(`http://localhost:3000/api/categories?page=${category_page}&limit=5`)
        const data = await response.json()
        console.log(data);
        setCategories(data)
      }
      getData()
    }, [category_page])

    useEffect(() => {
        if(search){
            const getData = async () => {
              const response = await fetch(`http://localhost:3000/api/questions?search=${search}&page=${question_page}&limit=10`)
              const data = await response.json()
              console.log(data);
              setFilteredQues(data)
            }
            getData()
        }
    }, [search,question_page])
    
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-[var(--color-primary)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search questions..." 
            value={search}
            onChange={handleSearchChange}
            className="block w-full p-4 ps-10 text-sm rounded-lg bg-[var(--color-base-200)] border border-[var(--color-base-300)] text-[var(--color-base-content)] placeholder-[var(--color-base-content)] placeholder-opacity-60 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:outline-none transition-colors duration-300"
          />
          {search && (
            <button 
              type="button" 
              onClick={() => setSearch('')}
              className="absolute end-2.5 bottom-2.5 bg-[var(--color-primary)] hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-[var(--color-primary-content)] font-medium rounded-lg text-sm px-4 py-2 text-[var(--color-primary-content)] transition-colors duration-300"
            >
              Clear
            </button>
          )}
        </div>
      </div>
      {search ? (
        <QuestionsDisplay questions={filteredQues} page={question_page} setQuestionPage={setQuestionPage} /> 
      ):(
        <CategoriesDisplay categories={categories} page={category_page} setCategoryPage={setCategoryPage} />
      )}
    </div>
  )
}

export default ContentDisplay