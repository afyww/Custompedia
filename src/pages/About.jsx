import Aboutus from '../components/About/Aboutus'
import Nineyears from '../components/About/Company'
import Ready from '../components/About/Ready'
import Workus from '../components/About/Workus'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Whatsapp from '../components/Whatsapp'

function About() {
  return (
    <main>
      <Navbar />
      <div>
        <Whatsapp />
        <Aboutus />
        <Nineyears />
        <Workus />
        <Ready />
      </div>
      <Footer />
    </main>
  )
}

export default About
