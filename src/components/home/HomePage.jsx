import React from 'react'
import HeroSection from './HeroSection'
import TopicCards from './TopicCards'
import ProjectComparison from './ProjectComparison'

const HomePage = ({ onTopicSelect }) => {
  return (
    <div id="page-home" className="space-y-12">
      <HeroSection />
      <TopicCards onTopicSelect={onTopicSelect} />
      <ProjectComparison />
    </div>
  )
}

export default HomePage