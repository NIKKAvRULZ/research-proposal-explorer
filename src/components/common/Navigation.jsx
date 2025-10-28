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
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="sticky top-0 z-10 bg-white dark:bg-gray-900/60 backdrop-blur-sm dark:backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-x-auto">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              aria-current={currentPage === item.id ? 'page' : undefined}
              className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-300 ${{
                true: ''
              }}` +
                (currentPage === item.id
                  ? ' bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 shadow-sm'
                  : ' text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800')}
            >
              <i className={item.icon} aria-hidden="true"></i>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-300"
            title="Toggle theme"
            aria-pressed={isDark}
          >
            <span aria-hidden="true">{isDark ? '☀️' : '🌙'}</span>
            <span className="sr-only">Toggle color theme</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation