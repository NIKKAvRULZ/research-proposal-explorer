import React, { useState } from 'react'
import Card from '../ui/Card'
import Chart from '../ui/Chart'

const Topic5 = () => {
  const [activeMember, setActiveMember] = useState('overview')

  const memberTabs = [
    { id: 'overview', icon: 'fas fa-chart-pie', label: 'Overview' },
    { id: '1', icon: 'fas fa-atom', label: 'Quantum SE' },
    { id: '2', icon: 'fas fa-link', label: 'Blockchain' },
    { id: '3', icon: 'fas fa-server', label: 'Edge Computing' },
    { id: '4', icon: 'fas fa-robot', label: 'Human-AI' }
  ]

  return (
    <div className="space-y-8">
      {/* Header Card */}
      <Card className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mr-4">
            <i className="fas fa-code text-pink-600 text-xl"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-pink-700">Frontiers in Software Engineering</h2>
            <p className="text-gray-600">Exploring cutting-edge research frontiers with emerging technologies</p>
          </div>
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          This section details the "Frontiers in Software Engineering" proposal. Explore advanced research methodologies 
          and emerging technology integration that push the boundaries of traditional software engineering practices.
        </p>
      </Card>

      {/* Core Concepts */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Core Concepts</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-xl border border-pink-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-pink-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-pink-700 my-3">Research Gap & Problem</h3>
            <p className="text-gray-600 text-sm">Traditional software engineering approaches struggle to keep pace with rapidly emerging technologies like quantum computing, blockchain, and advanced AI systems.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-xl border border-pink-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-pink-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-pink-700 my-3">Novelty & Integration</h3>
            <p className="text-gray-600 text-sm">Cross-disciplinary research integrating quantum algorithms, blockchain security, edge computing efficiency, and advanced human-AI collaboration frameworks.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-xl border border-pink-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bullseye text-pink-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-pink-700 my-3">Overall Project Goal</h3>
            <p className="text-gray-600 text-sm">To explore, prototype, and evaluate next-generation software engineering approaches that leverage emerging technologies for transformative impact.</p>
          </div>
        </div>
      </Card>

      {/* Research Structure */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Research Structure</h3>
        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
          <div className="text-center mb-6">
            <div className="diagram-box inline-block bg-pink-100 border-pink-300 p-4 rounded-lg">
              <h5 className="font-bold text-pink-800">Next-Generation Software Engineering Framework</h5>
            </div>
          </div>
          <div className="flex justify-center items-center text-5xl font-thin text-pink-400 mb-6">↓</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: 'Component I', desc: 'Quantum Software Engineering' },
              { title: 'Component II', desc: 'Blockchain-Integrated Systems' },
              { title: 'Component III', desc: 'Edge Computing Architecture' },
              { title: 'Component IV', desc: 'Advanced Human-AI Collaboration' }
            ].map((comp, index) => (
              <div key={index} className="diagram-step text-center">
                <span className="font-bold block text-pink-700">{comp.title}</span>
                <p className="text-sm text-neutral-600">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Impact Chart */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Visualized Potential Impact</h3>
        <Chart id="topic5-impact-chart" type="bar" />
      </Card>

      {/* Member Research Components */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Research Components</h3>
        
        <div className="border-b border-gray-200">
          <nav className="flex flex-wrap -mb-px justify-center">
            {memberTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveMember(tab.id)}
                className={`flex items-center px-4 py-2 border-b-2 font-medium text-sm ${
                  activeMember === tab.id
                    ? 'border-pink-500 text-pink-600'
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
                Component Overview
              </h4>
              <Chart id="topic5-breakdown-chart" type="doughnut" />
            </div>
          )}

          {activeMember === '1' && (
            <div>
              <h4 className="text-2xl font-semibold text-pink-700 flex items-center mb-4">
                <i className="fas fa-atom mr-3"></i>
                Component I: Quantum Software Engineering
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Developing software engineering methodologies and tools for quantum computing applications."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Develop quantum software development lifecycle</li>
                    <li>Create quantum algorithm design patterns</li>
                    <li>Build quantum software testing frameworks</li>
                    <li>Establish quantum performance benchmarks</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Research Approach</h5>
                  <div className="space-y-3">
                    {[
                      'Quantum Algorithm Design - Novel algorithms for optimization',
                      'Software Framework - Development tools for quantum SE',
                      'Testing & Validation - Verification methodologies',
                      'Performance Analysis - Benchmark quantum vs classical'
                    ].map((step, index) => (
                      <div key={index} className="diagram-step text-left p-3">
                        <h6 className="font-semibold text-pink-600">{step.split(' - ')[0]}</h6>
                        <p className="text-xs text-gray-500">{step.split(' - ')[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '2' && (
            <div>
              <h4 className="text-2xl font-semibold text-pink-700 flex items-center mb-4">
                <i className="fas fa-link mr-3"></i>
                Component II: Blockchain-Integrated Systems
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Designing secure, scalable software systems with blockchain integration for trust and transparency."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Develop hybrid blockchain architectures</li>
                    <li>Create smart contract development methodologies</li>
                    <li>Design blockchain integration patterns</li>
                    <li>Establish security frameworks</li>
                  </ul>
                  <div className="mt-4">
                    <Chart id="topic5-blockchain-chart" type="bar" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Integration Patterns</h5>
                  <div className="space-y-3">
                    {[
                      'Hybrid Architecture - Public and private networks',
                      'Smart Contract Patterns - Reusable business logic',
                      'Legacy Integration - APIs for existing systems',
                      'Security Framework - Comprehensive assessment'
                    ].map((pattern, index) => (
                      <div key={index} className="diagram-step text-left p-3">
                        <h6 className="font-semibold text-pink-600">{pattern.split(' - ')[0]}</h6>
                        <p className="text-xs text-gray-500">{pattern.split(' - ')[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '3' && (
            <div>
              <h4 className="text-2xl font-semibold text-pink-700 flex items-center mb-4">
                <i className="fas fa-server mr-3"></i>
                Component III: Edge Computing Architecture
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Designing efficient software architectures for distributed edge computing environments."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Develop edge computing deployment patterns</li>
                    <li>Create resource optimization algorithms</li>
                    <li>Design fault-tolerant architectures</li>
                    <li>Establish security protocols</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Architecture Flow</h5>
                  <div className="space-y-3">
                    {[
                      'Edge Devices - IoT sensors, mobile devices',
                      'Edge Computing Layer - Local processing',
                      'Fog Computing - Regional aggregation',
                      'Cloud Backend - Centralized analytics'
                    ].map((layer, index) => (
                      <div key={index} className="diagram-step text-left p-3">
                        <h6 className="font-semibold text-pink-600">{layer.split(' - ')[0]}</h6>
                        <p className="text-xs text-gray-500">{layer.split(' - ')[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '4' && (
            <div>
              <h4 className="text-2xl font-semibold text-pink-700 flex items-center mb-4">
                <i className="fas fa-robot mr-3"></i>
                Component IV: Advanced Human-AI Collaboration
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Designing intuitive interfaces and collaboration frameworks for human-AI teaming in software development."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Develop natural language interfaces</li>
                    <li>Create visualization tools for AI explanation</li>
                    <li>Design collaboration protocols</li>
                    <li>Establish trust metrics</li>
                  </ul>
                  <div className="mt-4">
                    <Chart id="topic5-collab-chart" type="line" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Collaboration Framework</h5>
                  <div className="space-y-3">
                    {[
                      'Natural Language Interface - Conversational AI',
                      'Explanation Systems - Visual understanding tools',
                      'Trust Building - Reliability assessment metrics',
                      'Team Dynamics - Human-AI collaboration protocols'
                    ].map((aspect, index) => (
                      <div key={index} className="diagram-step text-left p-3">
                        <h6 className="font-semibold text-pink-600">{aspect.split(' - ')[0]}</h6>
                        <p className="text-xs text-gray-500">{aspect.split(' - ')[1]}</p>
                      </div>
                    ))}
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

export default Topic5