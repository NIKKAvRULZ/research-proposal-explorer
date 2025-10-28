import React from 'react'

const Header = () => {
  return (
    <div className="hero-gradient bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-b-3xl">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Interactive Research Proposal Explorer
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-6">
          An interactive deep dive into cutting-edge BSc research proposals with real-world impact
        </p>
        <div className="bg-white bg-opacity-20 rounded-full px-6 py-3 inline-flex items-center">
          <span className="mr-3">🚀</span>
          <span className="font-medium">Explore six innovative projects</span>
        </div>
      </div>
    </div>
  )
}

export default Header