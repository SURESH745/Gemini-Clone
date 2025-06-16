import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Mains from './Components/Main/main'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <>
      <Hero />
      <div className="flex">
        <Sidebar />
        <Mains />
      </div>
    </>
  )
}

export default App