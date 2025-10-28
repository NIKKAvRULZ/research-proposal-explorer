import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center py-8 mt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Interactive Research Proposal Explorer — concise summaries designed to be shared with supervisors and
          group members.
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
        <div className="mt-4 text-xs text-gray-400 dark:text-gray-500">
          <div>Group ID: <span className="text-gray-700 dark:text-gray-200 font-medium">R26-SE-011</span></div>
          <div className="mt-1">Group Members:</div>
          <ul className="list-inside list-disc mt-1 space-y-0">
            <li>Perera M.A.I — IT22206282</li>
            <li>Dilki H P C — IT22111210</li>
            <li>Perera W A N I — IT22061348</li>
            <li>Perera N S G — IT22276346</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer