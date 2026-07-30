import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Methodology from './components/Methodology'
import Timeline from './components/Timeline'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <div className="tear-paper-container">
          <img className="tear-paper" src="/images/tear-paper.png" alt="" loading="lazy" />
        </div>
        <About />
        <Works />
        <Methodology />
        <Timeline />
        <Hobbies />
        <Footer />
      </main>
    </div>
  )
}

export default App
