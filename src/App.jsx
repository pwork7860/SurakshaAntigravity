import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import StatsStrip from './components/StatsStrip'
import Services from './pages/Services'
import Expertise from './pages/Expertise'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="relative font-sans selection:bg-brand-accent selection:text-white bg-brand-bg text-brand-text min-h-screen">
      <Navbar />
      <main>
        <Home />
        <About />
        <StatsStrip />
        <Services />
        <Expertise />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
