import React from 'react'

const HeroSection = () => {
  return (
    <div className="floating-card mb-8">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
          <i className="fas fa-lightbulb text-indigo-600 dark:text-indigo-400"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Welcome to the Research Explorer
        </h2>
      </div>
      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        This application provides an interactive deep-dive into six software engineering research proposals. 
        Use this page for a high-level comparison, or select a topic from the navigation to explore its specific goals, 
        system architecture, potential impact, and detailed breakdown of all individual research components.
      </p>
    </div>
  )
}

export default HeroSection