import React, { useState } from 'react'
import QuestionAccordion from './QuestionAccordion';

const CategoryAccordion = ({ 
    title,
    icon,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const onToggle = () => setIsOpen(!isOpen);
    
    return (
        <div className="w-full max-w-3xl mx-auto">
            <div 
                className="bg-[var(--color-base-200)] text-[var(--color-base-content)] border border-[var(--color-base-300)] rounded-lg mb-3 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
                <button
                    id="accordion-header"
                    aria-expanded={isOpen}
                    aria-controls="accordion-panel"
                    onClick={onToggle}
                    className="flex items-center justify-between w-full p-5 text-left font-medium transition-colors duration-300 hover:bg-[var(--color-base-300)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    style={{ 
                        color: 'var(--color-base-content)'
                    }}
                >
                    <div className="flex items-center gap-4">
                        {icon && (
                            <span className="flex-shrink-0 text-[var(--color-primary)]">{icon}</span>
                        )}
                        <h3 className="text-lg font-semibold">{title}</h3>
                    </div>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 transition-transform duration-300 ease-in-out text-[var(--color-primary)] ${isOpen ? 'rotate-180' : ''}`} 
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
                    className={`transition-all duration-300 ease-in-out overflow-x-hidden overflow-y-auto`}
                    style={{ 
                        maxHeight: isOpen ? '1000px' : '0',
                        opacity: isOpen ? 1 : 0
                    }}
                >
                    <div 
                        className="p-6 border-t bg-white bg-opacity-50" 
                        style={{ borderColor: 'var(--color-base-300)' }}
                    >
                        {(children && children.length > 0) ?
                        children.map((question, index) => (
                            <QuestionAccordion key={index} question={question} num={index + 1} />
                        )):(
                            <p className="text-[var(--color-base-content-secondary)] italic">No questions available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryAccordion
