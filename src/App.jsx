import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Formation from './components/Formation'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-violet-50 via-pink-50 to-white">
     
      <Navbar />
      <main className="pt-20 space-y-20">
        <Intro />
        <Formation />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
