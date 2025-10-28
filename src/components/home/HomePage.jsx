import React from 'react'
import HeroSection from './HeroSection'
import TopicCards from './TopicCards'
import ProjectComparison from './ProjectComparison'

const HomePage = ({ onTopicSelect }) => {
  return (
    <div id="page-home" className="space-y-12 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <HeroSection />

        <section aria-labelledby="topics-heading" className="mt-8">
          <h3 id="topics-heading" className="sr-only">Topics</h3>
          <TopicCards onTopicSelect={onTopicSelect} />
        </section>

        <section aria-labelledby="comparison-heading" className="mt-12">
          <h3 id="comparison-heading" className="sr-only">Project comparison</h3>
          <ProjectComparison />
        </section>
      </div>
    </div>
  )
}

export default HomePage