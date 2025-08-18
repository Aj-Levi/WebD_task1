import React, { useState } from 'react'

const QuestionAccordion = ({question, num}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const onToggle = () => setIsOpen(!isOpen);
    
    return (
        <div className="w-full max-w-3xl mx-auto">
            <div 
                className="bg-[var(--color-base-200)] text-[var(--color-base-content)] border border-[var(--color-base-300)] rounded-lg mb-3 overflow-hidden"
            >
                <button
                    id="accordion-header"
                    aria-expanded={isOpen}
                    aria-controls="accordion-panel"
                    onClick={onToggle}
                    className="flex items-center justify-between w-full p-4 text-left transition-colors duration-300 hover:bg-opacity-80"
                    style={{ 
                        color: 'var(--color-base-content)'
                    }}
                >
                    <div className="flex items-center justify-between w-full px-4">
                        <div className="text-lg font-medium">{num}. {question.title}</div>
                        <div className={`px-3 py-1 text-xs font-medium rounded-full ${
                            question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                            question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                        }`}>
                            {question.difficulty}
                        </div>
                    </div>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <div
                    id="accordion-panel"
                    role="region"
                    aria-labelledby="accordion-header"
                    className={`transition-all duration-300 ease-in-out overflow-hidden`}
                    style={{ 
                        maxHeight: isOpen ? '500px' : '0',
                        opacity: isOpen ? 1 : 0
                    }}
                >
                    <div 
                        className="p-5 border-t" 
                        style={{ borderColor: 'var(--color-base-300)' }}
                    >
                        <div className="flex flex-wrap gap-3 mt-2">
                            {question.tutorial && (
                                <button 
                                    className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
                                    onClick={() => window.open(question.tutorial, '_blank')}
                                >
                                    View Tutorial
                                </button>
                            )}
                            
                            {question.prob1 && (
                                <button 
                                    className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800 rounded hover:bg-purple-200 transition-colors"
                                    onClick={() => window.open(question.prob1, '_blank')}
                                >
                                    Problem 1
                                </button>
                            )}

                            {question.prob2 && (
                                <button 
                                    className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800 rounded hover:bg-purple-200 transition-colors"
                                    onClick={() => window.open(question.prob2, '_blank')}
                                >
                                    Problem 2
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionAccordion
