import React, { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/common/Header'
import Navigation from './components/common/Navigation'
import Footer from './components/common/Footer'
import BackToTop from './components/common/BackToTop'
import HomePage from './components/home/HomePage'
import Topic1 from './components/topics/Topic1'
import Topic2 from './components/topics/Topic2'
import Topic3 from './components/topics/Topic3'
import Topic4 from './components/topics/Topic4'
import Topic5 from './components/topics/Topic5'
import Topic6 from './components/topics/Topic6'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onTopicSelect={setCurrentPage} />
      case 'topic1':
        return <Topic1 />
      case 'topic2':
        return <Topic2 />
      case 'topic3':
        return <Topic3 />
      case 'topic4':
        return <Topic4 />
      case 'topic5':
        return <Topic5 />
      case 'topic6':
        return <Topic6 />
      default:
        return <HomePage onTopicSelect={setCurrentPage} />
    }
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="container mx-auto px-4 py-8">
          {renderPage()}
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App