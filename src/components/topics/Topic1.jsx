import React, { useState } from 'react'
import Card from '../ui/Card'
import Chart from '../ui/Chart'

const Topic1 = () => {
  const [activeMember, setActiveMember] = useState('overview')

  const memberTabs = [
    { id: 'overview', icon: 'fas fa-chart-pie', label: 'Overview' },
    { id: '1', icon: 'fas fa-microchip', label: 'IoT & Data' },
    { id: '2', icon: 'fas fa-brain', label: 'AI & Analytics' },
    { id: '3', icon: 'fas fa-code', label: 'Architecture' },
    { id: '4', icon: 'fas fa-mobile-alt', label: 'HCI & Impact' }
  ]

  return (
    <div className="space-y-8">
      {/* Header Card */}
      <Card className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
            <i className="fas fa-tint text-indigo-600 text-xl"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-indigo-700">Agri-Adapt: Smart Water Management</h2>
            <p className="text-gray-600">Revolutionizing agriculture with AI and IoT</p>
          </div>
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          This section details the "Agri-Adapt" proposal. Explore its core concepts, the system's data-flow architecture, 
          its potential impact, and the individual research components for the four-member team.
        </p>
      </Card>

      {/* Core Concepts */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Core Concepts</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-indigo-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-indigo-700 my-3">Identified Gap & Problem</h3>
            <p className="text-gray-600 text-sm">Smallholder farms are hit hard by water scarcity. Current "smart" solutions are too expensive, complex, and use regional data that misses the micro-climates of small plots.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-indigo-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-indigo-700 my-3">Novelty & IoT Integration</h3>
            <p className="text-gray-600 text-sm">A predictive, self-adjusting system. It fuses data from hyper-local IoT sensors (soil, temp) with an AI model that predicts water loss (ET) 24-48 hours in advance.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-white rounded-xl border border-indigo-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bullseye text-indigo-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-indigo-700 my-3">Overall Project Goal</h3>
            <p className="text-gray-600 text-sm">To design, build, and validate an affordable IoT and AI platform that empowers smallholder farmers to drastically cut water use while maintaining or increasing crop yields.</p>
          </div>
        </div>
      </Card>

      {/* System Architecture */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">System Architecture</h3>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          This diagram illustrates the flow of data and control in the Agri-Adapt system, from on-farm data collection to automated irrigation.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {[
            { icon: 'fas fa-sensor', title: '1. IoT Sensors', desc: 'Soil Moisture, Temp, Humidity sensors on the farm.' },
            { icon: 'fas fa-network-wired', title: '2. Gateway', desc: 'Collects sensor data and sends to cloud.' },
            { icon: 'fas fa-cloud', title: '3. Cloud Platform', desc: 'Ingests data, stores it, and runs the AI model.' },
            { icon: 'fas fa-brain', title: '4. AI Prediction', desc: 'Model predicts crop water needs 24-48h in advance.' },
            { icon: 'fas fa-faucet', title: '5. Actuator Control', desc: 'Cloud sends command back to farm irrigation valves.' }
          ].map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="diagram-step mx-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className={`${step.icon} text-indigo-600`}></i>
                </div>
                <h4 className="font-semibold text-indigo-600">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
              {index < 4 && <div className="diagram-arrow hidden md:block"><i className="fas fa-arrow-right text-indigo-400"></i></div>}
            </div>
          ))}
        </div>
      </Card>

      {/* Impact Chart */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Visualized Potential Impact</h3>
        <Chart id="topic1-impact-chart" type="line" />
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
                    ? 'border-indigo-500 text-indigo-600'
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
              <Chart id="topic1-breakdown-chart" type="doughnut" />
            </div>
          )}

          {activeMember === '1' && (
            <div>
              <h4 className="text-2xl font-semibold text-indigo-700 flex items-center mb-4">
                <i className="fas fa-microchip mr-3"></i>
                Member 1: IoT & Data Acquisition
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Design and Validation of a Low-Cost, Multi-Modal IoT Sensor Network for Micro-Climate Data Acquisition in Rural Farms."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3 flex items-center">
                    <i className="fas fa-bullseye mr-2 text-indigo-500"></i>
                    Key Objectives
                  </h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Research and benchmark sensors for cost vs. accuracy</li>
                    <li>Design power-efficient, weather-resistant sensor node prototype</li>
                    <li>Implement long-range, low-power data transmission protocol</li>
                    <li>Conduct field tests to validate sensor accuracy and durability</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3 flex items-center">
                    <i className="fas fa-project-diagram mr-2 text-indigo-500"></i>
                    Methodology
                  </h5>
                  <div className="space-y-3">
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-indigo-600">Sensor Node (On-Field)</h6>
                      <p className="text-xs text-gray-500">Soil, Temp, Humidity sensors send data</p>
                    </div>
                    <div className="text-center text-indigo-500">↓</div>
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-indigo-600">Transmission (LoRaWAN)</h6>
                      <p className="text-xs text-gray-500">Low-power radio signal transmits data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '2' && (
            <div>
              <h4 className="text-2xl font-semibold text-indigo-700 flex items-center mb-4">
                <i className="fas fa-brain mr-3"></i>
                Member 2: AI & Predictive Analytics
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Developing a Predictive Evapotranspiration (ET) and Crop Water-Stress Model using Machine Learning on Hyper-Local Sensor Data."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Develop data pipeline for time-series sensor data</li>
                    <li>Research ML models for predicting ET and soil moisture</li>
                    <li>Train model to predict water needs 24-48h in advance</li>
                    <li>Validate model accuracy against traditional methods</li>
                  </ul>
                </div>
                <div>
                  <Chart id="topic1-model-chart" type="bar" />
                </div>
              </div>
            </div>
          )}

          {activeMember === '3' && (
            <div>
              <h4 className="text-2xl font-semibold text-indigo-700 flex items-center mb-4">
                <i className="fas fa-code mr-3"></i>
                Member 3: Software Architecture
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "A Scalable, Cloud-Native Microservices Architecture for Real-Time IoT Data Ingestion, Processing, and Irrigation Control."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Design end-to-end system architecture</li>
                    <li>Implement scalable, secure cloud backend</li>
                    <li>Develop secure APIs for data ingestion</li>
                    <li>Engineer real-time control logic</li>
                  </ul>
                </div>
                <div>
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <h6 className="font-semibold text-center mb-2 text-indigo-600">Cloud Platform Architecture</h6>
                    <div className="space-y-2">
                      <div className="p-2 border rounded bg-white text-center text-sm">User App & AI Model</div>
                      <div className="text-center">↓</div>
                      <div className="p-2 border-2 border-indigo-400 rounded bg-white text-center font-semibold">API Gateway</div>
                      <div className="text-center">↓</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 border rounded bg-white text-center text-xs">Auth Service</div>
                        <div className="p-2 border rounded bg-white text-center text-xs">Data Ingestion</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '4' && (
            <div>
              <h4 className="text-2xl font-semibold text-indigo-700 flex items-center mb-4">
                <i className="fas fa-mobile-alt mr-3"></i>
                Member 4: HCI & Impact Analysis
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Usability, Adoption, and Socio-Economic Impact Analysis of a Mobile-First Precision Irrigation Dashboard for Non-Technical Farmers."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Apply HCI principles for farmer-friendly mobile app</li>
                    <li>Design simple, visual interface for low technical literacy</li>
                    <li>Conduct iterative usability testing with farmers</li>
                    <li>Measure real-world impact on water savings</li>
                  </ul>
                </div>
                <div>
                  <div className="phone-mockup">
                    <div className="phone-screen">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-bold text-indigo-700">Agri-Adapt</h5>
                        <span className="text-xs font-bold text-green-600">Online</span>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg mb-4">
                        <h6 className="text-sm font-semibold text-gray-800">Plot 1: Tomatoes</h6>
                        <p className="text-xs text-gray-600">Soil Moisture: <span className="font-bold text-blue-600">65% (Optimal)</span></p>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg mb-4">
                        <h6 className="text-sm font-semibold text-gray-800">Today's Status</h6>
                        <p className="text-xs text-gray-600">Water saved this week: <span className="font-bold text-green-700">750L</span></p>
                      </div>
                      <button className="w-full bg-indigo-600 text-white font-medium py-3 rounded-lg text-sm mt-auto">Manual Control</button>
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

export default Topic1