import React from 'react'

const TopicCards = ({ onTopicSelect }) => {
  const topics = [
    {
      id: 'topic1',
      title: 'Agri-Adapt',
      description: 'A Hyper-Local, AI-Driven Framework for Climate-Adaptive Water Management in Smallholder Farms.',
      tag: 'AgriTech',
      color: 'indigo',
      innovation: 'Predictive AI model using hyper-local IoT sensor data (not regional forecasts).',
      audience: 'Smallholder farmers in water-scarce regions.',
      sdgs: ['SDG 2', 'SDG 6', 'SDG 13', 'SDG 12']
    },
    {
      id: 'topic2',
      title: 'Aegis',
      description: 'Proactive Anomaly Detection for Elderly In-Home Care: A Privacy-Preserving IoT Sensor Fusion and Federated Learning System.',
      tag: 'Healthcare',
      color: 'teal',
      innovation: 'Privacy-by-Design using Federated Machine Learning (on-device AI, no raw data to cloud).',
      audience: 'Elderly individuals living independently & their caregivers.',
      sdgs: ['SDG 3', 'SDG 11']
    },
    {
      id: 'topic3',
      title: 'AI-Driven SDLC',
      description: 'The AI-Driven Software Development Lifecycle: Integrating LLMs across requirements, coding, testing, and human-factor analysis.',
      tag: 'AI/ML',
      color: 'amber',
      innovation: 'Comprehensive LLM integration across the entire software development lifecycle.',
      audience: 'Software developers, QA engineers, and development teams.',
      components: ['I', 'II', 'III', 'IV']
    },
    {
      id: 'topic4',
      title: 'Sustainable Software',
      description: 'Engineering Sustainable Software: Creating a practical toolkit to measure, analyze, and mitigate the carbon footprint of software applications.',
      tag: 'Green Tech',
      color: 'purple',
      innovation: 'Comprehensive toolkit for measuring and optimizing software carbon footprint.',
      audience: 'Software developers, DevOps engineers, and sustainability teams.',
      components: ['I', 'II', 'III', 'IV']
    },
    {
      id: 'topic5',
      title: 'Frontiers in SE',
      description: 'Exploring cutting-edge research frontiers in software engineering with a focus on emerging technologies and methodologies.',
      tag: 'Advanced Research',
      color: 'pink',
      innovation: 'Advanced research methodologies and emerging technology integration in software engineering.',
      audience: 'Researchers, advanced practitioners, and technology innovators.',
      components: ['I', 'II', 'III', 'IV']
    },
    {
      id: 'topic6',
      title: 'Community Mobility',
      description: 'A Trust-Based, Gamified Altruistic Mobility Platform for Closed Communities.',
      tag: 'Social Tech',
      color: 'cyan',
      innovation: 'Decentralized trust architecture with gamified incentives for community mobility.',
      audience: 'University communities and closed networks.',
      components: ['I', 'II', 'III', 'IV']
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      indigo: {
        bg: 'bg-indigo-600 hover:bg-indigo-700',
        text: 'text-indigo-700 dark:text-indigo-400',
        light: 'bg-indigo-50 dark:bg-indigo-900/20',
        border: 'border-indigo-200 dark:border-indigo-800',
        pill: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
      },
      teal: {
        bg: 'bg-teal-600 hover:bg-teal-700',
        text: 'text-teal-700 dark:text-teal-400',
        light: 'bg-teal-50 dark:bg-teal-900/20',
        border: 'border-teal-200 dark:border-teal-800',
        pill: 'bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300'
      },
      amber: {
        bg: 'bg-amber-600 hover:bg-amber-700',
        text: 'text-amber-700 dark:text-amber-400',
        light: 'bg-amber-50 dark:bg-amber-900/20',
        border: 'border-amber-200 dark:border-amber-800',
        pill: 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300'
      },
      purple: {
        bg: 'bg-purple-600 hover:bg-purple-700',
        text: 'text-purple-700 dark:text-purple-400',
        light: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        pill: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
      },
      pink: {
        bg: 'bg-pink-600 hover:bg-pink-700',
        text: 'text-pink-700 dark:text-pink-400',
        light: 'bg-pink-50 dark:bg-pink-900/20',
        border: 'border-pink-200 dark:border-pink-800',
        pill: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300'
      },
      cyan: {
        bg: 'bg-cyan-600 hover:bg-cyan-700',
        text: 'text-cyan-700 dark:text-cyan-400',
        light: 'bg-cyan-50 dark:bg-cyan-900/20',
        border: 'border-cyan-200 dark:border-cyan-800',
        pill: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300'
      }
    }
    return colors[color] || colors.indigo
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {topics.map(topic => {
        const color = getColorClasses(topic.color)
        
        return (
          <div 
            key={topic.id} 
            className={`topic-card bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 ${color.border}`}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className={`text-2xl font-bold ${color.text}`}>{topic.title}</h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${color.pill}`}>
                  {topic.tag}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                {topic.description}
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <i className="fas fa-bullseye mr-2"></i>
                    Key Innovation
                  </h4>
                  <p className={`text-sm text-gray-600 dark:text-gray-400 p-3 rounded-lg ${color.light}`}>
                    {topic.innovation}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <i className="fas fa-users mr-2"></i>
                    Target Audience
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{topic.audience}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                  <i className={`fas ${topic.sdgs ? 'fa-globe-americas' : 'fa-cogs'} mr-2`}></i>
                  {topic.sdgs ? 'Sustainable Development Goals' : 'Research Components'}
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {(topic.sdgs || topic.components)?.map((item, index) => (
                    <div key={index} className={`${color.light} p-2 rounded text-center`}>
                      <span className={`font-medium ${color.text}`}>{item}</span>
                      {topic.sdgs && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {item === 'SDG 2' && 'Zero Hunger'}
                          {item === 'SDG 6' && 'Clean Water'}
                          {item === 'SDG 13' && 'Climate Action'}
                          {item === 'SDG 12' && 'Responsible Consumption'}
                          {item === 'SDG 3' && 'Good Health'}
                          {item === 'SDG 11' && 'Sustainable Cities'}
                        </p>
                      )}
                      {topic.components && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {index === 0 && 'Requirements Engineering'}
                          {index === 1 && 'Code Generation'}
                          {index === 2 && 'Testing Systems'}
                          {index === 3 && 'HCI Study'}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onTopicSelect(topic.id)}
                className={`w-full ${color.bg} text-white font-medium py-3 px-5 rounded-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl`}
              >
                <i className="fas fa-arrow-right mr-2"></i>
                Explore {topic.title}
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TopicCards