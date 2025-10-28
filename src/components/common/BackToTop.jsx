import React, { useState, useEffect } from 'react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 320) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`back-top ${isVisible ? 'show' : ''} bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white shadow-lg`}
      aria-label="Back to top"
      title="Back to top"
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
      <span className="sr-only">Back to top</span>
    </button>
  )
}

export default BackToTop