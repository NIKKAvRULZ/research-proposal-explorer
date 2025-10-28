// This hook is no longer needed since we're handling charts in the Chart component
export const useCharts = () => {
  return {
    charts: {},
    initTopic1Charts: () => {},
    initTopic2Charts: () => {},
  }
}