import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Caregiving from './components/Caregiving'
import Speaking from './components/Speaking'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Caregiving />
        <Speaking />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
