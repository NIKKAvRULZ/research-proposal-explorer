import React, { useState } from 'react'
import Card from '../ui/Card'
import Chart from '../ui/Chart'

const Topic4 = () => {
  const [activeMember, setActiveMember] = useState('overview')

  const memberTabs = [
    { id: 'overview', icon: 'fas fa-chart-pie', label: 'Overview' },
    { id: '1', icon: 'fas fa-chart-bar', label: 'Green Profiler' },
    { id: '2', icon: 'fas fa-code-branch', label: 'DevOps Integration' },
    { id: '3', icon: 'fas fa-flask', label: 'Green Patterns' },
    { id: '4', icon: 'fas fa-cloud', label: 'Carbon Estimator' }
  ]

  return (
    <div id="page-topic4" className="py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Card */}
      <Card className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
            <i className="fas fa-leaf text-purple-600 text-xl"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple-700">Engineering Sustainable Software</h2>
            <p className="text-gray-600">Creating a practical toolkit for carbon footprint measurement and optimization</p>
          </div>
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          This section details the "Sustainable Software" proposal. Explore how to measure, analyze, and mitigate the carbon
          footprint of software applications through a comprehensive toolkit.
        </p>
        <p className="text-sm text-gray-500 mt-3">This page is designed to give group members a clear overview and can be shared with supervisors.</p>
      </Card>

      {/* Core Concepts */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Core Concepts</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-purple-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-purple-700 my-3">Identified Gap & Problem</h3>
            <p className="text-gray-600 text-sm">Developers lack practical tools to measure software energy consumption. Carbon footprint remains an abstract concept without actionable metrics.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-purple-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-purple-700 my-3">Novelty & Integration</h3>
            <p className="text-gray-600 text-sm">Comprehensive toolkit that connects local energy measurement with cloud carbon estimation using the SCI standard.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bullseye text-purple-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-purple-700 my-3">Overall Project Goal</h3>
            <p className="text-gray-600 text-sm">To develop, integrate, and validate an open-source toolkit that empowers developers to measure, analyze, and mitigate software carbon footprint.</p>
          </div>
        </div>
      </Card>

      {/* Toolkit Structure */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Toolkit Structure</h3>
        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
          <div className="text-center mb-6">
            <div className="diagram-box inline-block bg-purple-100 border-purple-300 p-4 rounded-lg">
              <h5 className="font-bold text-purple-800">Sustainability Measurement & Mitigation Toolkit</h5>
            </div>
          </div>
          <div className="flex justify-center items-center text-5xl font-thin text-purple-400 mb-6">↓</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: 'Component I', desc: '"Green Profiler" Energy Library' },
              { title: 'Component II', desc: 'Carbon-Aware DevOps Integration' },
              { title: 'Component III', desc: 'Empirical Study of Green Patterns' },
              { title: 'Component IV', desc: 'Cloud Carbon Footprint Estimator' }
            ].map((comp, index) => (
              <div key={index} className="diagram-step text-center">
                <span className="font-bold block text-purple-700">{comp.title}</span>
                <p className="text-sm text-neutral-600">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Impact Chart */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Visualized Potential Impact</h3>
        <Chart id="topic4-impact-chart" type="bar" />
      </Card>

      {/* Member Research Components */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Toolkit Components</h3>
        
        <div className="border-b border-gray-200">
          <nav className="flex flex-wrap -mb-px justify-center">
            {memberTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveMember(tab.id)}
                className={`flex items-center px-4 py-2 border-b-2 font-medium text-sm ${
                  activeMember === tab.id
                    ? 'border-purple-500 text-purple-600'
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
              <Chart id="topic4-breakdown-chart" type="doughnut" />
            </div>
          )}

          {activeMember === '1' && (
            <div>
              <h4 className="text-2xl font-semibold text-purple-700 flex items-center mb-4">
                <i className="fas fa-chart-bar mr-3"></i>
                Component I: The Green Profiler
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "A developer-friendly library for measuring software energy consumption with pluggable hardware sensor support."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Create robust Python library for energy measurement</li>
                    <li>Support multiple hardware sensors via pluggable backend</li>
                    <li>Provide energy data in standardized units (Joules)</li>
                    <li>Ensure cross-platform compatibility</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Tool Architecture</h5>
                  <div className="space-y-3">
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-purple-600">Target Process</h6>
                      <p className="text-xs text-gray-500">python my_app.py</p>
                    </div>
                    <div className="text-center text-purple-500">↓</div>
                    <div className="diagram-step text-left p-3 bg-purple-100 border-purple-300">
                      <h6 className="font-bold text-purple-800">Green Profiler Library</h6>
                    </div>
                    <div className="text-center text-purple-500">↓</div>
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-purple-600">Measurement</h6>
                      <p className="text-xs text-gray-500">Output: 120.5 Joules</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '2' && (
            <div>
              <h4 className="text-2xl font-semibold text-purple-700 flex items-center mb-4">
                <i className="fas fa-code-branch mr-3"></i>
                Component II: Carbon-Aware DevOps
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Integrating energy measurement into CI/CD pipelines for automated carbon impact feedback."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Integrate Green Profiler into CI/CD pipelines</li>
                    <li>Automatically measure energy impact on pull requests</li>
                    <li>Provide immediate carbon footprint feedback</li>
                    <li>Create carbon-aware scheduling for jobs</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">CI/CD Feedback Loop</h5>
                  <div className="space-y-3 text-sm">
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-purple-600">1. Code Push</h6>
                      <p>Developer creates Pull Request</p>
                    </div>
                    <div className="text-center text-purple-500">↓</div>
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-purple-600">2. CI Trigger</h6>
                      <p>GitHub Action starts automated job</p>
                    </div>
                    <div className="text-center text-purple-500">↓</div>
                    <div className="diagram-step text-left p-3 bg-purple-100 border-purple-300">
                      <h6 className="font-bold text-purple-800">3. Run Profiler</h6>
                      <p>Measure Joules from test suite</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '3' && (
            <div>
              <h4 className="text-2xl font-semibold text-purple-700 flex items-center mb-4">
                <i className="fas fa-flask mr-3"></i>
                Component III: Empirical Study of Green Coding Patterns
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Quantifying the energy impact of coding practices through controlled experiments."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Leverage automated measurement framework</li>
                    <li>Empirically validate energy impact of patterns</li>
                    <li>Compare data serialization formats</li>
                    <li>Evaluate programming language efficiency</li>
                  </ul>
                  <div className="mt-4">
                    <Chart id="topic4-green-chart" type="polarArea" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Experimental Approach</h5>
                  <div className="space-y-3">
                    {[
                      'Define Test Cases - Equivalent implementations',
                      'Automated Measurement - Run profiler multiple times',
                      'Statistical Analysis - Compare with significance',
                      'Publish Findings - Data-driven developer guide'
                    ].map((step, index) => (
                      <div key={index} className="diagram-step text-left p-3">
                        <h6 className="font-semibold text-purple-600">{step.split(' - ')[0]}</h6>
                        <p className="text-xs text-gray-500">{step.split(' - ')[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '4' && (
            <div>
              <h4 className="text-2xl font-semibold text-purple-700 flex items-center mb-4">
                <i className="fas fa-cloud mr-3"></i>
                Component IV: Cloud Carbon Footprint Estimator
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Estimating application carbon footprint in cloud deployments using the SCI standard."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Build tool to estimate carbon footprint (CO2e)</li>
                    <li>Integrate local energy data with carbon APIs</li>
                    <li>Implement SCI (Software Carbon Intensity) model</li>
                    <li>Provide actionable recommendations</li>
                  </ul>
                  <div className="mt-4">
                    <Chart id="topic4-carbon-chart" type="line" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Software Carbon Intensity (SCI)</h5>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <p className="text-gray-600 mb-4">
                      The tool implements the Green Software Foundation's SCI specification for standardized carbon scoring.
                    </p>
                    <div className="text-center p-4 bg-white rounded-lg shadow-inner">
                      <p className="text-2xl font-mono text-purple-800">SCI = ((E × I) + M) / R</p>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li><strong className="text-gray-800">E</strong> = Energy consumed (from Component I)</li>
                      <li><strong className="text-gray-800">I</strong> = Location-based Carbon Intensity</li>
                      <li><strong className="text-gray-800">M</strong> = Embodied Carbon</li>
                      <li><strong className="text-gray-800">R</strong> = Functional Unit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
      </div>
    </div>
  )
}

export default Topic4