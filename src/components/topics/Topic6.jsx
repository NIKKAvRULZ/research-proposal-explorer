import React, { useState } from 'react'
import Card from '../ui/Card'
import Chart from '../ui/Chart'

const Topic6 = () => {
  const [activeMember, setActiveMember] = useState('overview')

  const memberTabs = [
    { id: 'overview', icon: 'fas fa-chart-pie', label: 'Overview' },
    { id: '1', icon: 'fas fa-shield-alt', label: 'Trust & Identity' },
    { id: '2', icon: 'fas fa-brain', label: 'AI Matching' },
    { id: '3', icon: 'fas fa-code', label: 'Architecture' },
    { id: '4', icon: 'fas fa-gamepad', label: 'Incentives & Strategy' }
  ]

  return (
    <div className="space-y-8">
      {/* Header Card */}
      <Card className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mr-4">
            <i className="fas fa-car text-cyan-600 text-xl"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-cyan-700">Community-Driven Mobility Platform</h2>
            <p className="text-gray-600">A Trust-Based, Gamified Altruistic Mobility Platform for Closed Communities</p>
          </div>
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          This section details the "Community Mobility" proposal. Explore how we're creating a sustainable digital commons 
          for mobility within closed communities like universities, using decentralized trust architecture and gamified incentives.
        </p>
      </Card>

      {/* Core Concepts */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Core Concepts</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-cyan-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-cyan-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-cyan-700 my-3">Identified Gap & Problem</h3>
            <p className="text-gray-600 text-sm">Traditional ride-sharing models fail in closed communities due to unsustainable motivation, trust issues, and the cold-start problem.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-cyan-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-cyan-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-cyan-700 my-3">Novelty & Integration</h3>
            <p className="text-gray-600 text-sm">Three-layer architecture combining decentralized identity, AI matching, and gamified incentives for sustainable community mobility.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-cyan-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bullseye text-cyan-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-cyan-700 my-3">Overall Project Goal</h3>
            <p className="text-gray-600 text-sm">To design, prototype, and validate a sustainable, trust-based mobility platform for closed communities that operates without financial transactions.</p>
          </div>
        </div>
      </Card>

      {/* System Architecture */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">System Architecture</h3>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Our solution uses a three-layer architecture to create a sustainable digital commons for community mobility.
        </p>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="w-full p-6 bg-cyan-100 rounded-t-lg border-b-2 border-cyan-300">
              <h4 className="text-xl font-semibold text-cyan-800">Layer 3: The Incentive Layer</h4>
              <p className="text-cyan-700">A reputation-based gamification economy (Scores, Badges, Leaderboards) to drive user motivation and reward prosocial behavior.</p>
            </div>
            <div className="text-2xl font-bold text-cyan-500 my-2">↓</div>
            <div className="w-full p-6 bg-cyan-200 border-b-2 border-cyan-400">
              <h4 className="text-xl font-semibold text-cyan-800">Layer 2: Identity & Trust Layer</h4>
              <p className="text-cyan-700">A decentralized identity framework (DIDs and Verifiable Credentials) to establish robust, privacy-preserving trust between peers.</p>
            </div>
            <div className="text-2xl font-bold text-cyan-500 my-2">↓</div>
            <div className="w-full p-6 bg-cyan-300 rounded-b-lg">
              <h4 className="text-xl font-semibold text-cyan-900">Layer 1: The P2P Foundation</h4>
              <p className="text-cyan-800">A decentralized peer-to-peer (P2P) network for reduced costs, enhanced resilience, censorship resistance, and user privacy.</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Impact Chart */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Visualized Potential Impact</h3>
        <Chart id="topic6-impact-chart" type="line" />
      </Card>

      {/* Member Research Components */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Individual Research Components</h3>
        
        <div className="border-b border-gray-200">
          <nav className="flex flex-wrap -mb-px justify-center">
            {memberTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveMember(tab.id)}
                className={`flex items-center px-4 py-2 border-b-2 font-medium text-sm ${
                  activeMember === tab.id
                    ? 'border-cyan-500 text-cyan-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="py-6">
          {activeMember === 'overview' && (
            <div>
              <h4 className="text-xl font-semibold text-center text-gray-700 mb-4">
                Research Structure Overview
              </h4>
              <Chart id="topic6-breakdown-chart" type="doughnut" />
            </div>
          )}

          {activeMember === '1' && (
            <div>
              <h4 className="text-2xl font-semibold text-cyan-700 flex items-center mb-4">
                <i className="fas fa-shield-alt mr-3"></i>
                Member 1: Trust & Identity Framework
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "A Decentralized Trust & Identity Management Framework for Community Mobility Platforms."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Design decentralized identity framework with DIDs</li>
                    <li>Integrate with university ID systems</li>
                    <li>Develop manipulation-resistant reputation system</li>
                    <li>Implement emergency features and safety protocols</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Trust Architecture</h5>
                  <div className="space-y-3">
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-cyan-600">University ID System</h6>
                      <p className="text-xs text-gray-500">Issues "Verified Student" credentials</p>
                    </div>
                    <div className="text-center text-cyan-500">↓</div>
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-cyan-600">Decentralized Identity Wallet</h6>
                      <p className="text-xs text-gray-500">Stores and manages user credentials</p>
                    </div>
                    <div className="text-center text-cyan-500">↓</div>
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-cyan-600">Verifiable Presentation</h6>
                      <p className="text-xs text-gray-500">On-device trust verification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '2' && (
            <div>
              <h4 className="text-2xl font-semibold text-cyan-700 flex items-center mb-4">
                <i className="fas fa-brain mr-3"></i>
                Member 2: AI Matching System
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "An Intelligent Matching System using Reinforcement Learning for Community Mobility."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Formulate matching as Markov Decision Process</li>
                    <li>Develop multi-objective reward function</li>
                    <li>Train deep reinforcement learning model</li>
                    <li>Benchmark against traditional algorithms</li>
                  </ul>
                  <div className="mt-4">
                    <Chart id="topic6-reward-chart" type="doughnut" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">AI Matching Pipeline</h5>
                  <div className="space-y-3">
                    {[
                      'Input Data - Location, reputation, preferences',
                      'Reinforcement Learning - Deep Q-Network decisions',
                      'Multi-Objective Optimization - Balance efficiency, trust, fairness',
                      'Optimal Match - Best driver-rider pairing'
                    ].map((step, index) => (
                      <div key={index} className="diagram-step text-left p-3">
                        <h6 className="font-semibold text-cyan-600">{step.split(' - ')[0]}</h6>
                        <p className="text-xs text-gray-500">{step.split(' - ')[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '3' && (
            <div>
              <h4 className="text-2xl font-semibold text-cyan-700 flex items-center mb-4">
                <i className="fas fa-code mr-3"></i>
                Member 3: System Architecture
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "A Scalable, Event-Driven Microservices Architecture for Community Mobility Platforms."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Design microservices architecture</li>
                    <li>Implement event-driven communication</li>
                    <li>Develop real-time location tracking</li>
                    <li>Ensure data privacy and security</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Microservices Architecture</h5>
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <h6 className="font-semibold text-center mb-2 text-cyan-600">Event-Driven Architecture</h6>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 border rounded bg-white text-center text-xs">Driver App</div>
                        <div className="p-2 border rounded bg-white text-center text-xs">Rider App</div>
                      </div>
                      <div className="text-center">↓ ↑</div>
                      <div className="p-2 border-2 border-cyan-400 rounded bg-white text-center font-semibold text-sm">API Gateway</div>
                      <div className="text-center">↓</div>
                      <div className="p-4 bg-cyan-600 text-white rounded-lg text-center font-semibold text-sm">EVENT BUS</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 border rounded bg-white text-center text-xs">User Service</div>
                        <div className="p-2 border rounded bg-white text-center text-xs">Location Service</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '4' && (
            <div>
              <h4 className="text-2xl font-semibold text-cyan-700 flex items-center mb-4">
                <i className="fas fa-gamepad mr-3"></i>
                Member 4: Incentives & Strategy
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "A Prosocial Incentive & HCI Framework for Sustainable Community Mobility."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Design gamified reputation system</li>
                    <li>Develop intuitive UI/UX focused on trust</li>
                    <li>Create phased launch strategy</li>
                    <li>Evaluate user engagement and sustainability</li>
                  </ul>
                </div>
                <div>
                  <div className="phone-mockup">
                    <div className="phone-screen">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-bold text-cyan-700">Community Mobility</h5>
                        <span className="text-xs font-bold text-green-600">Online</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg mb-4">
                        <h6 className="text-sm font-semibold text-gray-800">Your Karma Score</h6>
                        <p className="text-xs text-gray-600">Current: <span className="font-bold text-cyan-600">850</span></p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg mb-4">
                        <h6 className="text-sm font-semibold text-gray-800">Available Rides</h6>
                        <p className="text-xs text-gray-600">3 drivers available on your route</p>
                      </div>
                      <button className="w-full bg-cyan-600 text-white font-medium py-3 rounded-lg text-sm mt-auto">Request Ride</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

export default Topic6