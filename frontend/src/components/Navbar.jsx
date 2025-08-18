import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.getElementById('root').dataset.theme = newTheme;
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);
  
  return (
    <nav className="bg-[var(--color-base-200)] border-b border-[var(--color-base-300)] sticky top-0 z-50 backdrop-blur-lg bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0 flex items-center gap-x-1">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
              AlgoPath
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full cursor-pointer bg-[var(--color-base-300)] hover:bg-[var(--color-base-100)] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button className="px-4 py-2 rounded-lg cursor-pointer border border-[var(--color-base-100)] text-[var(--color-base-content)] hover:border-[var(--color-primary)] font-medium transition-colors duration-200">
              Login
            </button>
            <button className="px-4 py-2 rounded-lg cursor-pointer bg-[var(--color-primary)] text-black font-medium hover:bg-opacity-90 transition-colors duration-200">
              Sign Up
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--color-base-300)] hover:bg-[var(--color-base-100)] transition-colors duration-200 focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-[var(--color-base-content)] hover:bg-[var(--color-base-300)] focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden transition-all duration-300 ease-in-out mobile-menu-container ${isMenuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 border-t border-[var(--color-base-300)]">
          <div className="pt-4 pb-2 space-y-5">
            <button className="w-full px-4 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:bg-opacity-10 font-medium transition-colors duration-200">
              Login
            </button>
            <button className="w-full px-4 py-2 rounded-lg bg-[var(--color-primary)] text-black font-medium hover:bg-opacity-90 transition-colors duration-200">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar