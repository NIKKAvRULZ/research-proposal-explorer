import React from 'react'

const ProjectComparison = () => {
  const stats = [
    {
      name: 'Agri-Adapt',
      value: '75%',
      label: 'Water Savings Potential',
      description: 'Up to 75% reduction in water usage',
      color: 'indigo',
      percentage: 75
    },
    {
      name: 'Aegis',
      value: '92%',
      label: 'Anomaly Detection Accuracy',
      description: '92% accuracy in detecting anomalies',
      color: 'teal',
      percentage: 92
    },
    {
      name: 'AI-Driven SDLC',
      value: '68%',
      label: 'Development Efficiency',
      description: '68% improvement in development speed',
      color: 'amber',
      percentage: 68
    },
    {
      name: 'Sustainable Software',
      value: '85%',
      label: 'Carbon Reduction',
      description: '85% reduction in carbon footprint',
      color: 'purple',
      percentage: 85
    },
    {
      name: 'Frontiers in SE',
      value: '90%',
      label: 'Innovation Impact',
      description: '90% potential for industry transformation',
      color: 'pink',
      percentage: 90
    },
    {
      name: 'Community Mobility',
      value: '80%',
      label: 'Adoption Potential',
      description: '80% potential user adoption in target communities',
      color: 'cyan',
      percentage: 80
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      indigo: 'bg-indigo-600',
      teal: 'bg-teal-600',
      amber: 'bg-amber-600',
      purple: 'bg-purple-600',
      pink: 'bg-pink-600',
      cyan: 'bg-cyan-600'
    }
    return colors[color] || colors.indigo
  }

  const getTextColor = (color) => {
    const colors = {
      indigo: 'text-indigo-600',
      teal: 'text-teal-600',
      amber: 'text-amber-600',
      purple: 'text-purple-600',
      pink: 'text-pink-600',
      cyan: 'text-cyan-600'
    }
    return colors[color] || colors.indigo
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
        Project Comparison
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <div className={`stat-number text-2xl font-bold ${getTextColor(stat.color)} mb-2`}>
              {stat.value}
            </div>
            <div className="stat-label text-sm text-gray-600 dark:text-gray-400 mb-4">
              {stat.label}
            </div>
            <div className="progress-bar bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
              <div 
                className={`progress-fill h-2 rounded-full ${getColorClasses(stat.color)} transition-all duration-500`}
                style={{ width: `${stat.percentage}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectComparison