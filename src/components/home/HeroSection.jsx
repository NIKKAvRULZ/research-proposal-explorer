import React from 'react'

const HeroSection = () => {
  return (
    <div className="floating-card mb-8">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mr-3">
          <i className="fas fa-lightbulb text-indigo-600 dark:text-indigo-400"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Research Proposal Explorer
        </h2>
      </div>
      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        This website was created to present the topics our group has selected for research. Its primary purpose is to
        give group members a clear, easy-to-read overview of each topic so they can get to know the ideas and scope.
        The site also serves as a concise presentation that can be shared with supervisors when needed.
      </p>

      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
        Use this page for a high-level comparison of projects, or select a topic from the navigation to explore its
        goals, proposed system architecture, potential impact, and a detailed breakdown of the research components.
      </p>
    </div>
  )
}

export default HeroSection