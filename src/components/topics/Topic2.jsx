import React, { useState } from 'react'
import Card from '../ui/Card'
import Chart from '../ui/Chart'

const Topic2 = () => {
  const [activeMember, setActiveMember] = useState('overview')

  const memberTabs = [
    { id: 'overview', icon: 'fas fa-chart-pie', label: 'Overview' },
    { id: '1', icon: 'fas fa-microchip', label: 'IoT & Data' },
    { id: '2', icon: 'fas fa-brain', label: 'AI & ML' },
    { id: '3', icon: 'fas fa-code', label: 'Architecture' },
    { id: '4', icon: 'fas fa-user-shield', label: 'HCI & Ethics' }
  ]

  return (
    <div className="space-y-8">
      {/* Header Card */}
      <Card className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
            <i className="fas fa-shield-alt text-teal-600 text-xl"></i>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-teal-700">Aegis: Proactive Elderly Care</h2>
            <p className="text-gray-600">Privacy-preserving health monitoring with AI</p>
          </div>
        </div>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          This section details the "Aegis" proposal. Explore its privacy-first concepts, the system's edge-computing architecture, 
          its potential for proactive alerts, and the individual research components.
        </p>
      </Card>

      {/* Core Concepts */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Core Concepts</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-exclamation-triangle text-teal-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-teal-700 my-3">Identified Gap & Problem</h3>
            <p className="text-gray-600 text-sm">The elderly "age in place" with risks like falls. "Panic buttons" are reactive, requiring the user to be conscious. A gap exists for a proactive, privacy-preserving system.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-lightbulb text-teal-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-teal-700 my-3">Novelty & IoT Integration</h3>
            <p className="text-gray-600 text-sm">Twofold: (1) Non-invasive sensor fusion (motion, door, smart plug). (2) Privacy-by-Design AI using Federated Learning, where local hub learns user's routine on-device.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-100 transition-all hover:shadow-lg">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-bullseye text-teal-600 text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-teal-700 my-3">Overall Project Goal</h3>
            <p className="text-gray-600 text-sm">To design and evaluate a proactive, privacy-preserving home monitoring system that enhances safety for elderly individuals by detecting routine anomalies and alerting caregivers.</p>
          </div>
        </div>
      </Card>

      {/* System Architecture */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">System Architecture Diagram</h3>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Privacy-first architecture where all personal data and AI training stay within the home, with only alerts and anonymized updates leaving.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {[
            { icon: 'fas fa-sensor', title: '1. Non-Invasive Sensors', desc: 'Motion, Door, Smart Plug, Bed Sensor (No Cameras)' },
            { icon: 'fas fa-server', title: '2. In-Home Edge Hub', desc: 'All sensor data stays here. Federated ML trains locally.' },
            { icon: 'fas fa-exclamation-circle', title: '3. Anomaly Detected?', desc: 'Local AI detects deviation from normal routine' },
            { icon: 'fas fa-cloud', title: '4. Cloud Service', desc: 'Receives only alerts or anonymized model updates' },
            { icon: 'fas fa-bell', title: '5. Caregiver Alert', desc: 'Secure notification sent to caregiver app' }
          ].map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`diagram-step mx-2 ${index === 1 ? 'border-2 border-teal-500' : ''}`}>
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className={`${step.icon} text-teal-600`}></i>
                </div>
                <h4 className="font-semibold text-teal-600">{step.title}</h4>
                <p className="text-xs text-gray-500">{step.desc}</p>
              </div>
              {index < 4 && <div className="diagram-arrow hidden md:block"><i className="fas fa-arrow-right text-teal-400"></i></div>}
            </div>
          ))}
        </div>
      </Card>

      {/* Impact Chart */}
      <Card>
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Visualized Potential Impact</h3>
        <Chart id="topic2-impact-chart" type="line" />
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
                    ? 'border-teal-500 text-teal-600'
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
              <Chart id="topic2-breakdown-chart" type="doughnut" />
            </div>
          )}

          {activeMember === '1' && (
            <div>
              <h4 className="text-2xl font-semibold text-teal-700 flex items-center mb-4">
                <i className="fas fa-microchip mr-3"></i>
                Member 1: IoT & Data Harmonization
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "A Framework for Non-Invasive IoT Sensor Integration and Data Harmonization for Real-Time Elderly Activity Recognition."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Research and integrate non-invasive sensors</li>
                    <li>Develop software framework for real-time data ingestion</li>
                    <li>Design data harmonization model for activity recognition</li>
                    <li>Fuse disparate sensor readings into activity labels</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Data Harmonization Flow</h5>
                  <div className="space-y-3">
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-teal-600">Raw Sensor Data</h6>
                      <p className="text-xs text-gray-500">Motion, door, plug sensor readings</p>
                    </div>
                    <div className="text-center text-teal-500">↓</div>
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-teal-600">Harmonization Engine</h6>
                      <p className="text-xs text-gray-500">Applies rules & context to fuse data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '2' && (
            <div>
              <h4 className="text-2xl font-semibold text-teal-700 flex items-center mb-4">
                <i className="fas fa-brain mr-3"></i>
                Member 2: AI & Federated Machine Learning
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Privacy-Preserving Anomaly Detection in Daily Routines using Federated Learning on Edge-Computed Sensor Data."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Design Federated Learning architecture</li>
                    <li>Develop unsupervised ML model for normal patterns</li>
                    <li>Implement anomaly detection algorithm</li>
                    <li>Evaluate system while proving no raw data leaves device</li>
                  </ul>
                </div>
                <div>
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <h6 className="font-semibold text-center mb-2 text-teal-600">Federated Learning Architecture</h6>
                    <div className="space-y-2">
                      <div className="p-3 border-2 border-teal-400 rounded text-center text-sm">
                        In-Home Edge Hub 1<br/>
                        <small>Local Data → Local Training → Anonymized Updates</small>
                      </div>
                      <div className="text-center">↓ ↑</div>
                      <div className="p-3 bg-teal-600 text-white rounded text-center font-semibold">
                        Central Cloud Server<br/>
                        <small>Aggregates model updates (not data)</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '3' && (
            <div>
              <h4 className="text-2xl font-semibold text-teal-700 flex items-center mb-4">
                <i className="fas fa-code mr-3"></i>
                Member 3: Software Architecture & Security
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Designing a Secure and Resilient Edge-Cloud Architecture for a Real-Time Anomaly Alerting System."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Program edge hub for real-time data processing</li>
                    <li>Engineer secure communication protocol</li>
                    <li>Build cloud-native backend service</li>
                    <li>Implement end-to-end security encryption</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-3">Security Focus</h5>
                  <div className="space-y-3">
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-teal-600">On-Edge Hub</h6>
                      <p className="text-xs text-gray-500">Full Disk Encryption. All raw data processed locally.</p>
                    </div>
                    <div className="text-center text-teal-500">↓</div>
                    <div className="diagram-step text-left p-3">
                      <h6 className="font-semibold text-teal-600">Edge-to-Cloud Link</h6>
                      <p className="text-xs text-gray-500">TLS Encryption. Only alerts sent, no raw data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMember === '4' && (
            <div>
              <h4 className="text-2xl font-semibold text-teal-700 flex items-center mb-4">
                <i className="fas fa-user-shield mr-3"></i>
                Member 4: HCI, Ethics, & Validation
              </h4>
              <p className="text-lg text-gray-600 my-2 italic">
                "Evaluating the Usability, Acceptance, and Ethical Implications of an Ambient In-Home Monitoring System for Caregivers and Elderly Users."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h5 className="font-semibold text-lg mb-3">Key Objectives</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Design caregiver mobile app UI/UX</li>
                    <li>Develop user testing protocols</li>
                    <li>Evaluate system usability and acceptance</li>
                    <li>Analyze ethical challenges and solutions</li>
                  </ul>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="diagram-step text-center p-2 text-xs">
                      <span className="font-semibold text-teal-700">Informed Consent</span>
                    </div>
                    <div className="diagram-step text-center p-2 text-xs">
                      <span className="font-semibold text-teal-700">Data Privacy</span>
                    </div>
                    <div className="diagram-step text-center p-2 text-xs">
                      <span className="font-semibold text-teal-700">User Dignity</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="phone-mockup">
                    <div className="phone-screen">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-bold text-teal-700">Aegis Care</h5>
                        <span className="text-xs font-bold text-green-600">Connected</span>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg mb-4">
                        <h6 className="text-sm font-semibold text-green-800">Mom's Status: OK</h6>
                        <p className="text-xs text-gray-600">Last activity: 10:15 AM (Kitchen)</p>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg mb-4">
                        <h6 className="text-sm font-semibold text-yellow-800">Alert: Anomaly</h6>
                        <p className="text-xs text-gray-600">No movement detected for 90 minutes</p>
                      </div>
                      <button className="w-full bg-teal-600 text-white font-medium py-3 rounded-lg text-sm mb-2">Call Mom</button>
                      <button className="w-full bg-gray-200 text-gray-700 font-medium py-3 rounded-lg text-sm">Dismiss Alert</button>
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

export default Topic2