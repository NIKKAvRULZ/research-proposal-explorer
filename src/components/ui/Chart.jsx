import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line, Bar, Doughnut, Radar, PolarArea } from 'react-chartjs-2'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
)

const Chart = ({ id, type, data, options, className = '' }) => {
  // Default chart data based on type and id
  const getDefaultData = () => {
    const baseData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }
      ]
    }

    // Custom data based on chart ID
    switch (id) {
      case 'topic1-impact-chart':
        return {
          labels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4', 'Wk 5', 'Wk 6', 'Wk 7', 'Wk 8'],
          datasets: [
            {
              label: 'Traditional Irrigation (L/day)',
              data: [100, 110, 105, 115, 120, 110, 125, 130],
              borderColor: 'rgba(107, 114, 128, 1)',
              backgroundColor: 'rgba(107, 114, 128, 0.1)',
              fill: false,
              tension: 0.3
            },
            {
              label: 'Agri-Adapt (L/day)',
              data: [75, 78, 72, 80, 85, 76, 88, 92],
              borderColor: 'rgba(79, 70, 229, 1)',
              backgroundColor: 'rgba(79, 70, 229, 0.1)',
              fill: true,
              tension: 0.3
            }
          ]
        }
      
      case 'topic1-breakdown-chart':
        return {
          labels: ['IoT & Data Acquisition', 'AI & Predictive Analytics', 'Software Architecture', 'HCI & Impact Analysis'],
          datasets: [
            {
              label: 'Research Component Weight',
              data: [25, 25, 25, 25],
              backgroundColor: [
                'rgba(79, 70, 229, 0.85)',
                'rgba(99, 102, 241, 0.85)',
                'rgba(129, 140, 248, 0.85)',
                'rgba(165, 180, 252, 0.85)'
              ],
              borderColor: '#ffffff',
              borderWidth: 2
            }
          ]
        }

      case 'topic1-model-chart':
        return {
          labels: ['RMSE (Water Demand)', 'MAE (ET)', 'Prediction Horizon (Hours)'],
          datasets: [
            {
              label: 'Baseline Regional Model',
              data: [0.8, 0.6, 24],
              backgroundColor: 'rgba(107, 114, 128, 0.6)',
            },
            {
              label: 'Agri-Adapt Local ML Model',
              data: [0.35, 0.2, 48],
              backgroundColor: 'rgba(79, 70, 229, 0.8)',
            }
          ]
        }

      case 'topic2-impact-chart':
        return {
          labels: ['12 AM', '6 AM', '12 PM', '6 PM', '12 AM'],
          datasets: [
            {
              label: 'Normal Activity Baseline',
              data: [10, 15, 30, 40, 10],
              borderColor: 'rgba(13, 148, 136, 1)',
              backgroundColor: 'rgba(13, 148, 136, 0.1)',
              fill: true,
              tension: 0.3
            },
            {
              label: 'Anomaly Day Activity',
              data: [10, 15, 5, 5, 10],
              borderColor: 'rgba(236, 72, 153, 1)',
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
              fill: true,
              tension: 0.3
            }
          ]
        }

      case 'topic2-breakdown-chart':
        return {
          labels: ['IoT & Data Harmonization', 'AI & Federated Machine Learning', 'Software Architecture & Security', 'HCI, Ethics, & Validation'],
          datasets: [
            {
              label: 'Research Component Weight',
              data: [25, 25, 25, 25],
              backgroundColor: [
                'rgba(13, 148, 136, 0.85)',
                'rgba(20, 184, 166, 0.85)',
                'rgba(45, 212, 191, 0.85)',
                'rgba(94, 234, 212, 0.85)'
              ],
              borderColor: '#ffffff',
              borderWidth: 2
            }
          ]
        }

      case 'topic3-impact-chart':
        return {
          labels: ['Functional Correctness', 'Security', 'Performance', 'Maintainability'],
          datasets: [
            {
              label: 'LLM Generated Code (Baseline)',
              data: [70, 50, 60, 65],
              backgroundColor: 'rgba(107, 114, 128, 0.2)',
              borderColor: 'rgb(107, 114, 128)',
              pointBackgroundColor: 'rgb(107, 114, 128)',
              pointBorderColor: '#fff',
            },
            {
              label: 'Post-Crucible LLM Generated Code',
              data: [90, 85, 75, 80],
              backgroundColor: 'rgba(245, 158, 11, 0.2)',
              borderColor: 'rgb(245, 158, 11)',
              pointBackgroundColor: 'rgb(245, 158, 11)',
              pointBorderColor: '#fff',
            }
          ]
        }

      case 'topic3-breakdown-chart':
        return {
          labels: ['Component I: Requirements as Code', 'Component II: Code Generation Crucible', 'Component III: Self-Healing Testing', 'Component IV: Developer-AI Symbiosis'],
          datasets: [
            {
              label: 'Research Component Weight',
              data: [25, 25, 25, 25],
              backgroundColor: [
                'rgba(245, 158, 11, 0.85)',
                'rgba(251, 191, 36, 0.85)',
                'rgba(253, 224, 71, 0.85)',
                'rgba(254, 243, 199, 0.85)'
              ],
              borderColor: '#ffffff',
              borderWidth: 2
            }
          ]
        }

      case 'topic3-hci-chart':
        return {
          labels: ['Mental Demand', 'Physical Demand', 'Temporal Demand', 'Effort', 'Frustration'],
          datasets: [
            {
              label: 'Developers without AI Tools',
              data: [75, 20, 80, 85, 70],
              backgroundColor: 'rgba(107, 114, 128, 0.6)',
            },
            {
              label: 'Developers with AI Tools (LLM-SDLC)',
              data: [40, 15, 35, 50, 25],
              backgroundColor: 'rgba(245, 158, 11, 0.8)',
            }
          ]
        }

      case 'topic4-impact-chart':
        return {
          labels: ['Baseline Implementation', 'Green Pattern Optimization 1', 'Green Pattern Optimization 2', 'Optimized Language'],
          datasets: [
            {
              label: 'Energy Consumption (Joules)',
              data: [1500, 1150, 950, 750],
              backgroundColor: [
                'rgba(168, 85, 247, 0.8)',
                'rgba(192, 132, 252, 0.8)',
                'rgba(221, 214, 254, 0.8)',
                'rgba(79, 70, 229, 0.8)'
              ],
            }
          ]
        }

      case 'topic4-breakdown-chart':
        return {
          labels: ['Component I: Green Profiler', 'Component II: Carbon-Aware DevOps', 'Component III: Green Coding Patterns Study', 'Component IV: Cloud Carbon Estimator'],
          datasets: [
            {
              label: 'Toolkit Component Weight',
              data: [25, 25, 25, 25],
              backgroundColor: [
                'rgba(168, 85, 247, 0.85)',
                'rgba(192, 132, 252, 0.85)',
                'rgba(221, 214, 254, 0.85)',
                'rgba(126, 34, 206, 0.85)'
              ],
              borderColor: '#ffffff',
              borderWidth: 2
            }
          ]
        }

      case 'topic4-green-chart':
        return {
          labels: ['JSON Parsing', 'Database Connection', 'Optimized Loop', 'Caching Strategy'],
          datasets: [
            {
              label: 'Energy Cost (Relative)',
              data: [50, 90, 30, 25],
              backgroundColor: [
                'rgba(168, 85, 247, 0.6)',
                'rgba(192, 132, 252, 0.6)',
                'rgba(221, 214, 254, 0.6)',
                'rgba(79, 70, 229, 0.6)'
              ],
            }
          ]
        }

      case 'topic4-carbon-chart':
        return {
          labels: ['12 AM', '6 AM', '12 PM', '6 PM', '12 AM'],
          datasets: [
            {
              label: 'Carbon Intensity (gCO2e/kWh)',
              data: [350, 450, 500, 250, 300],
              borderColor: 'rgba(168, 85, 247, 1)',
              backgroundColor: 'rgba(168, 85, 247, 0.1)',
              fill: true,
              tension: 0.4
            }
          ]
        }

      case 'topic5-impact-chart':
        return {
          labels: ['Efficiency', 'Security Level', 'Scalability', 'Trust & Immutability'],
          datasets: [
            {
              label: 'Traditional Centralized System',
              data: [90, 70, 85, 40],
              backgroundColor: 'rgba(107, 114, 128, 0.6)',
              borderColor: 'rgb(107, 114, 128)',
              borderWidth: 1
            },
            {
              label: 'Blockchain Systems',
              data: [45, 95, 60, 95],
              backgroundColor: 'rgba(236, 72, 153, 0.6)',
              borderColor: 'rgb(236, 72, 153)',
              borderWidth: 1
            }
          ]
        }

      case 'topic5-breakdown-chart':
        return {
          labels: ['Quantum Software Engineering', 'Blockchain-Integrated Systems', 'Edge Computing Architecture', 'Advanced Human-AI Collaboration'],
          datasets: [
            {
              label: 'Research Component',
              data: [25, 25, 25, 25],
              backgroundColor: [
                'rgba(236, 72, 153, 0.85)',
                'rgba(219, 39, 119, 0.85)',
                'rgba(190, 24, 93, 0.85)',
                'rgba(157, 23, 77, 0.85)'
              ],
              borderColor: '#ffffff',
              borderWidth: 2
            }
          ]
        }

      case 'topic5-blockchain-chart':
        return {
          labels: ['Transaction Speed', 'Security Level', 'Scalability', 'Development Complexity'],
          datasets: [
            {
              label: 'Traditional Systems',
              data: [85, 70, 90, 40],
              backgroundColor: 'rgba(107, 114, 128, 0.6)',
            },
            {
              label: 'Blockchain Systems',
              data: [45, 95, 60, 80],
              backgroundColor: 'rgba(236, 72, 153, 0.6)',
            }
          ]
        }

      case 'topic5-collab-chart':
        return {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
          datasets: [
            {
              label: 'Traditional Development',
              data: [65, 68, 70, 72, 75, 78],
              borderColor: 'rgba(107, 114, 128, 1)',
              backgroundColor: 'rgba(107, 114, 128, 0.1)',
              fill: true,
              tension: 0.3
            },
            {
              label: 'Human-AI Collaboration',
              data: [70, 75, 82, 85, 88, 92],
              borderColor: 'rgba(236, 72, 153, 1)',
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
              fill: true,
              tension: 0.3
            }
          ]
        }

      case 'topic6-impact-chart':
        return {
          labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
          datasets: [
            {
              label: 'Traditional Ride-Sharing',
              data: [20, 25, 30, 35, 38, 40],
              borderColor: 'rgba(107, 114, 128, 1)',
              backgroundColor: 'rgba(107, 114, 128, 0.1)',
              fill: false,
              tension: 0.3
            },
            {
              label: 'Community Mobility',
              data: [10, 25, 45, 65, 80, 90],
              borderColor: 'rgba(6, 182, 212, 1)',
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              fill: true,
              tension: 0.3
            }
          ]
        }

      case 'topic6-breakdown-chart':
        return {
          labels: ['Trust & Identity', 'AI Matching', 'System Architecture', 'Incentives & Strategy'],
          datasets: [
            {
              label: 'Research Component',
              data: [25, 25, 25, 25],
              backgroundColor: [
                'rgba(6, 182, 212, 0.85)',
                'rgba(8, 145, 178, 0.85)',
                'rgba(14, 116, 144, 0.85)',
                'rgba(21, 94, 117, 0.85)'
              ],
              borderColor: '#ffffff',
              borderWidth: 2
            }
          ]
        }

      case 'topic6-reward-chart':
        return {
          labels: ['Efficiency (40%)', 'Trust (35%)', 'Fairness (25%)'],
          datasets: [
            {
              label: 'Reward Function Weights',
              data: [40, 35, 25],
              backgroundColor: [
                'rgba(6, 182, 212, 0.8)',
                'rgba(8, 145, 178, 0.8)',
                'rgba(14, 116, 144, 0.8)'
              ],
              hoverOffset: 4
            }
          ]
        }

      default:
        return baseData
    }
  }

  // Default options based on chart type
  const getDefaultOptions = () => {
    const baseOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart'
        },
      },
    }

    // Custom options based on chart ID
    switch (id) {
      case 'topic1-impact-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Water Consumption (L/day)' }
            }
          }
        }
      
      case 'topic1-model-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Metric Value' }
            }
          }
        }

      case 'topic2-impact-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              max: 50,
              title: { display: true, text: 'Activity Index (Motions/Hour)' }
            }
          }
        }

      case 'topic3-impact-chart':
        return {
          ...baseOptions,
          scales: {
            r: {
              angleLines: { color: 'rgba(107, 114, 128, 0.1)' },
              grid: { color: 'rgba(107, 114, 128, 0.1)' },
              pointLabels: { font: { size: 14 } },
              suggestedMin: 0,
              suggestedMax: 100,
              ticks: { display: false }
            }
          },
          plugins: {
            ...baseOptions.plugins,
            title: { display: true, text: 'LLM Code Quality Improvement (Scale: 0-100)' }
          }
        }

      case 'topic3-hci-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: 'NASA-TLX Score (Higher is Worse)' }
            }
          }
        }

      case 'topic4-impact-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Relative Energy Consumption (Joules)' }
            },
            x: { ticks: { autoSkip: false } }
          },
          plugins: { ...baseOptions.plugins, legend: { display: false } }
        }

      case 'topic4-carbon-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: 'Carbon Intensity' }
            }
          },
          plugins: { ...baseOptions.plugins, legend: { display: false } }
        }

      case 'topic5-impact-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: 'Performance Score' }
            }
          },
          plugins: {
            ...baseOptions.plugins,
            title: { display: true, text: 'Blockchain vs Traditional Systems Comparison' }
          }
        }

      case 'topic5-blockchain-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: 'Performance Score' }
            }
          },
          plugins: {
            ...baseOptions.plugins,
            title: { display: true, text: 'Blockchain vs Traditional Systems Comparison' }
          }
        }

      case 'topic5-collab-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: 'Productivity Score' }
            }
          },
          plugins: {
            ...baseOptions.plugins,
            title: { display: true, text: 'Productivity Growth: Human-AI Collaboration vs Traditional' }
          }
        }

      case 'topic6-impact-chart':
        return {
          ...baseOptions,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: 'Adoption Rate (%)' }
            }
          },
          plugins: {
            ...baseOptions.plugins,
            title: { display: true, text: 'Projected Adoption Curve' }
          }
        }

      default:
        return baseOptions
    }
  }

  const chartData = data || getDefaultData()
  const chartOptions = options || getDefaultOptions()

  // Detect dark mode (class on documentElement or prefers-color-scheme)
  const isDark = typeof window !== 'undefined' && (
    document.documentElement.classList.contains('dark') ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  // Apply dark/light friendly colors for axes, grid and legend
  const textColor = isDark ? '#dbeafe' : '#0f172a'
  const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)'

  const applyThemeToOptions = (opts) => {
    const merged = JSON.parse(JSON.stringify(opts || {}))

    // Plugins: title & legend
    merged.plugins = merged.plugins || {}
    merged.plugins.legend = merged.plugins.legend || {}
    merged.plugins.legend.labels = merged.plugins.legend.labels || {}
    merged.plugins.legend.labels.color = merged.plugins.legend.labels.color || textColor

    if (merged.plugins.title) {
      merged.plugins.title.color = merged.plugins.title.color || textColor
    }

    // Scales: x and y
    merged.scales = merged.scales || {}
    const applyScale = (scale) => {
      if (!scale) return
      scale.ticks = scale.ticks || {}
      scale.ticks.color = scale.ticks.color || textColor
      scale.grid = scale.grid || {}
      scale.grid.color = scale.grid.color || gridColor
    }

    if (merged.scales.x) applyScale(merged.scales.x)
    if (merged.scales.y) applyScale(merged.scales.y)
    if (merged.scales.r) {
      merged.scales.r.angleLines = merged.scales.r.angleLines || {}
      merged.scales.r.angleLines.color = merged.scales.r.angleLines.color || gridColor
      merged.scales.r.grid = merged.scales.r.grid || {}
      merged.scales.r.grid.color = merged.scales.r.grid.color || gridColor
      merged.scales.r.pointLabels = merged.scales.r.pointLabels || {}
      merged.scales.r.pointLabels.color = merged.scales.r.pointLabels.color || textColor
    }

    return merged
  }

  const themedOptions = applyThemeToOptions(chartOptions)

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={chartData} options={themedOptions} />
      case 'bar':
        return <Bar data={chartData} options={themedOptions} />
      case 'doughnut':
        return <Doughnut data={chartData} options={themedOptions} />
      case 'radar':
        return <Radar data={chartData} options={themedOptions} />
      case 'polarArea':
        return <PolarArea data={chartData} options={themedOptions} />
      default:
        return <Bar data={chartData} options={themedOptions} />
    }
  }

  return (
    <div className={`chart-container ${className}`}>
      {renderChart()}
    </div>
  )
}

export default Chart