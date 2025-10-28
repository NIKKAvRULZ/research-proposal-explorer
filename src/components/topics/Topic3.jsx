import React, { useState } from 'react'
import Card from '../ui/Card'
import Chart from '../ui/Chart'

const Topic3 = () => {
  const [activeMember, setActiveMember] = useState('overview')

  const memberTabs = [
    { id: 'overview', icon: 'fas fa-chart-pie', label: 'Overview' },
    { id: '1', icon: 'fas fa-list-alt', label: 'Requirements' },
    { id: '2', icon: 'fas fa-code', label: 'Code Generation' },
    { id: '3', icon: 'fas fa-bug', label: 'Testing' },
    { id: '4', icon: 'fas fa-users', label: 'HCI Study' }
  ]

  return (
    <div id="page-topic3" className="py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
      {/* Header Card */}
      <Card className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4">
            <i className="fas fa-robot text-amber-600 text-xl"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-amber-700">AI-Driven Software Development Lifecycle</h2>
            <p className="text-gray-600">Integrating LLMs across the entire software lifecycle</p>
          </div>
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          This section details the "AI-Driven SDLC" proposal. Explore how Large Language Models can transform requirements engineering,
          code generation, testing, and developer experience.
        </p>
        <p className="text-sm text-gray-500 mt-3">This page is designed to give group members a clear overview and can be shared with supervisors.</p>
      </Card>

      {/* Core Concepts */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Core Concepts</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-amber-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-amber-700 my-3">Identified Gap & Problem</h3>
            <p className="text-gray-600 text-sm">Current LLM tools operate in isolation without a cohesive framework. There's a need for systematic integration across the entire SDLC with proper evaluation metrics.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-amber-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-amber-700 my-3">Novelty & Integration</h3>
            <p className="text-gray-600 text-sm">Comprehensive framework that connects LLM capabilities across requirements, coding, testing, and human factors with standardized evaluation metrics.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bullseye text-amber-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-amber-700 my-3">Overall Project Goal</h3>
            <p className="text-gray-600 text-sm">To design, implement, and evaluate a cohesive set of LLM-powered tools that assist developers across the software lifecycle with empirical validation.</p>
          </div>
        </div>
      </Card>

      {/* Research Structure */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Research Structure</h3>
        <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
          <div className="text-center mb-6">
            <div className="diagram-box inline-block bg-amber-100 border-amber-300 p-4 rounded-lg">
              <h5 className="font-bold text-amber-800">Overarching Goal: LLM-SE Integration & Evaluation Framework</h5>
            </div>
          </div>
          <div className="flex justify-center items-center text-5xl font-thin text-amber-400 mb-6">↓</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: 'Component I', desc: 'LLMs for Requirements Engineering' },
              { title: 'Component II', desc: 'Code Generation Quality Benchmarking' },
              { title: 'Component III', desc: 'Self-Healing & Adaptive Test Systems' },
              { title: 'Component IV', desc: 'Developer-AI Symbiosis (HCI Study)' }
            ].map((comp, index) => (
              <div key={index} className="diagram-step text-center">
                <span className="font-bold block text-amber-700">{comp.title}</span>
                <p className="text-sm text-neutral-600">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Impact Chart */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Visualized Potential Impact</h3>
        <Chart id="topic3-impact-chart" type="radar" />
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
                    ? 'border-amber-500 text-amber-600'
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
              <Chart id="topic3-breakdown-chart" type="doughnut" />
            </div>
          )}

          {activeMember === '1' && (
            <div>
              <h4 className="text-2xl font-semibold text-amber-700 flex items-center mb-4">
                <i className="fas fa-list-alt mr-3"></i>
                Component I: Requirements as Code
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Automating the transformation of unstructured natural language requirements into structured artifacts using LLMs."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Transform natural language to User Stories and Gherkin tests</li>
                    <li>Compare prompt engineering techniques</li>
                    <li>Evaluate accuracy of generated requirements</li>
                    <li>Create benchmark dataset for evaluation</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Tool Flow</h5>
                  <div className="space-y-3">
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-amber-600">Input</h6>
                      <p className="text-xs text-gray-500">"User should be able to log in with email and password"</p>
                    </div>
                    <div className="text-center text-amber-500">↓</div>
                    <div className="diagram-step text-left p-3 bg-amber-100 border-amber-300">
                      <h6 className="font-bold text-amber-800">LLM Automation Tool</h6>
                    </div>
                    <div className="text-center text-amber-500">↓</div>
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-amber-600">Structured Output</h6>
                      <p className="text-xs text-gray-500">User Stories & Gherkin test cases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '2' && (
            <div>
              <h4 className="text-2xl font-semibold text-amber-700 flex items-center mb-4">
                <i className="fas fa-code mr-3"></i>
                Component II: The Code Generation Crucible
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Benchmarking LLM-generated code beyond functional correctness using a composite quality score."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Design automated benchmarking framework</li>
                    <li>Assess code across four quality dimensions</li>
                    <li>Develop composite quality score</li>
                    <li>Create benchmark dataset</li>
                  </ul>
                  <div className="mt-4">
                    <Chart id="topic3-radar-chart" type="radar" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Evaluation Dimensions</h5>
                  <div className="space-y-3">
                    {[
                      'Functional Correctness - Test case pass rate',
                      'Security - Vulnerability analysis',
                      'Performance - Execution time benchmarks',
                      'Maintainability - Code complexity & readability'
                    ].map((dim, index) => (
                      <div key={index} className="diagram-step text-left p-3">
                        <h6 className="font-semibold text-amber-600">{dim.split(' - ')[0]}</h6>
                        <p className="text-xs text-gray-500">{dim.split(' - ')[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '3' && (
            <div>
              <h4 className="text-2xl font-semibold text-amber-700 flex items-center mb-4">
                <i className="fas fa-bug mr-3"></i>
                Component III: Self-Healing & Adaptive Test Systems
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Developing proof-of-concept tools for dynamic, adaptive QA systems using LLMs."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Develop "self-healing" UI test suite</li>
                    <li>Create system for finding test gaps</li>
                    <li>Evaluate LLM-generated test repairs</li>
                    <li>Compare approaches for effectiveness</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Self-Healing UI Test Flow</h5>
                  <div className="space-y-3">
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-red-700">1. Test Fails</h6>
                      <p className="text-xs text-gray-500">UI element not found</p>
                    </div>
                    <div className="text-center text-amber-500">↓</div>
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-amber-600">2. Extract Context</h6>
                      <p className="text-xs text-gray-500">Get current page HTML</p>
                    </div>
                    <div className="text-center text-amber-500">↓</div>
                    <div className="diagram-step text-left p-3 bg-amber-100 border-amber-300">
                      <h6 className="font-bold text-amber-800">3. LLM Repair</h6>
                      <p className="text-xs text-gray-500">Suggests new selector</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '4' && (
            <div>
              <h4 className="text-2xl font-semibold text-amber-700 flex items-center mb-4">
                <i className="fas fa-users mr-3"></i>
                Component IV: The Developer-AI Symbiosis
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Empirical evaluation of the impact of AI tools on developers through human-computer interaction studies."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Conduct human-centric user study</li>
                    <li>Use NASA-TLX to measure cognitive load</li>
                    <li>Assess productivity and task completion time</li>
                    <li>Compare experimental vs control groups</li>
                  </ul>
                  <div className="mt-4">
                    <Chart id="topic3-hci-chart" type="bar" />
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Evaluation Metrics</h5>
                  <div className="space-y-3">
                    {[
                      'Productivity - Task completion time & code quality',
                      'Cognitive Load - NASA-TLX survey scores',
                      'Trust & Acceptance - Developer confidence in AI',
                      'User Experience - Qualitative feedback & usability'
                    ].map((metric, index) => (
                      <div key={index} className="diagram-step text-left p-3">
                        <h6 className="font-semibold text-amber-600">{metric.split(' - ')[0]}</h6>
                        <p className="text-xs text-gray-500">{metric.split(' - ')[1]}</p>
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
    </div>
  )
}

export default Topic3