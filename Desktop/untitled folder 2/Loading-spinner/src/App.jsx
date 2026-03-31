import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <div>App</div>
      )}
    </div>
  )
}

export default App