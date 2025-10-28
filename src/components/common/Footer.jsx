import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center py-8 mt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Interactive Research Proposal Explorer
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer