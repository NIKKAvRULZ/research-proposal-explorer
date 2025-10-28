import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Navigation = ({ currentPage, onPageChange }) => {
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { id: 'home', icon: 'fas fa-home', label: 'Home & Compare' },
    { id: 'topic1', icon: 'fas fa-tint', label: 'Agri-Adapt' },
    { id: 'topic2', icon: 'fas fa-shield-alt', label: 'Aegis' },
    { id: 'topic3', icon: 'fas fa-robot', label: 'AI-Driven SDLC' },
    { id: 'topic4', icon: 'fas fa-leaf', label: 'Sustainable Software' },
    { id: 'topic5', icon: 'fas fa-code', label: 'Frontiers in SE' },
    { id: 'topic6', icon: 'fas fa-car', label: 'Community Mobility' }
  ]

  return (
    <nav className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                currentPage === item.id
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="Toggle theme"
          >
            <span>{isDark ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation