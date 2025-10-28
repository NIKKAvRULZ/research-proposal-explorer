import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center py-8 mt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
           © {new Date().getFullYear()} Research Proposal Explorer. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="GitHub">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Twitter">
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer