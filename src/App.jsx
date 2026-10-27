import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Gallery from './components/Gallery'
import WhyVisit from './components/WhyVisit'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <WhyVisit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
