import React, { useState, useEffect } from 'react'

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = ["Master DSA Problems", "Ace Coding Interviews", "Improve Problem Solving"];
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 80 : 150);
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);
  
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-12 md:pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                <span className="bg-clip-text font-[Poppins] text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
                  AlgoPath
                </span>
              </h1>
              <div className="h-auto">
                <h2 className="text-2xl flex items-center md:text-3xl font-bold bg-clip-text text-transparent bg-[var(--color-secondary)]">
                  {text}
                  <span className="inline-block w-1 h-8 ml-1 bg-[var(--color-secondary)] animate-pulse"></span>
                </h2>
              </div>
              <p className="text-[var(--color-base-content)] font-[Poppins] text-lg mt-10 max-w-lg mx-auto md:mx-0">
                Practice data structures and algorithms with our curated collection of 
                coding problems. Prepare for technical interviews and improve your 
                problem-solving skills.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <a href='#search'>
                  <button className="px-8 py-3 rounded-lg bg-[var(--color-primary)] text-black font-bold shadow-lg hover:-translate-y-1 transition-all duration-300 active:scale-95">
                    Start Practicing
                  </button>
                </a>
                <a href="#search">
                  <button className="px-8 py-3 rounded-lg border border-[var(--color-accent)] text-[var(--color-base-content)] font-bold hover:-translate-y-1 transition-all duration-300 active:scale-95">
                    Explore Problems
                  </button>
                </a>
              </div>
              
              <div className="mt-10 flex items-center justify-center md:justify-start">
                <p className="text-[var(--color-base-content)] text-xl">
                  <span className="font-bold text-[var(--color-secondary)]">1000+</span> coders mastering DSA
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pl-6">
            <div className="bg-gray-800 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700/50">
                <div className="flex space-x-2 mr-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-2 text-sm text-gray-400">twoSum.cpp</div>
                <div className="ml-auto flex space-x-2">
                  <span className="px-2 py-0.5 text-xs bg-indigo-500/20 text-indigo-300 rounded-full">2 pointer</span>
                  <span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-300 rounded-full">Arrays</span>
                </div>
              </div>
              
              <pre className="p-4 overflow-x-auto text-sm text-gray-300 font-mono">
                <code className="language-javascript">{`int twosum(arr,target) {
sort(arr.begin(),arr.end());
int i=0,j=arr.size()-1,count;

while(i<j){
    int sum = (arr[i]+arr[j]);
    if(sum == target) count++,i++,j--;
    else if(sum > target) j--;
    else i++;
}

return count;
`}</code>
              </pre>
            </div>
            
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Problems", value: "100+", color: "from-blue-500 to-indigo-600" },
                { label: "Difficulty Levels", value: "3", color: "from-indigo-500 to-purple-600" },
                { label: "Categories", value: "10+", color: "from-purple-500 to-pink-600" },
                { label: "Companies", value: "25+", color: "from-pink-500 to-red-600" }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection