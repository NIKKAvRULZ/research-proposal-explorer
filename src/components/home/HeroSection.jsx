import React, { useState } from 'react'

const HeroSection = () => {
  const [copied, setCopied] = useState(false)
  const members = [
    { name: 'Perera M. A. I.', id: 'IT22206282' },
    { name: 'Dilki H. P. C.', id: 'IT22111210' },
    { name: 'Perera W. A. N. I.', id: 'IT22061348' },
    { name: 'Perera N. S. G.', id: 'IT22276346' }
  ]

  const idsString = members.map(m => `${m.name} — ${m.id}`).join('; ')

  const copyIds = async () => {
    try {
      await navigator.clipboard.writeText(idsString)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="space-y-6">
      <div className="floating-card">
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

      {/* Group info card (moved from footer) */}
      <div className="floating-card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-800 flex items-center justify-center">
              <i className="fas fa-users text-indigo-600 dark:text-indigo-200"></i>
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Group ID</div>
              <div className="font-semibold text-gray-900 dark:text-white">R26-SE-011</div>
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-300">Shareable with supervisors</div>
        </div>

        <div className="mt-4">
          <div className="text-sm font-medium">Members</div>

          <div className="mt-2 grid gap-2">
            {members.map(m => (
              <div key={m.id} className="grid grid-cols-2 items-center gap-4">
                <div className="truncate">{m.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-right">{m.id}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center">
            
            <div className="ml-auto">
              <button
                onClick={copyIds}
                className="inline-flex items-center gap-2 px-3 py-1 rounded text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors"
                aria-label="Copy member names and IDs"
              >
                <i className="far fa-copy" aria-hidden="true"></i>
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection