import React from 'react'

const Header = () => {
  return (
    <div className="hero-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-white py-14 rounded-b-3xl">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight">
          Research Proposal Explorer
        </h1>
        <p className="text-base md:text-lg opacity-95 max-w-2xl mx-auto mb-6">
          A concise, easy-to-share collection of the topics our group has selected for research. Use this site to
          review high-level goals, proposed architectures, and comparisons — suitable for group members and
          supervisors alike.
        </p>

        <div className="inline-flex items-center rounded-full px-4 py-2 bg-white/20 dark:bg-white/10">
          <span className="mr-3">🚀</span>
          <span className="font-medium">Browse 6 proposals · Shareable with supervisors</span>
        </div>
      </div>
    </div>
  )
}

export default Header