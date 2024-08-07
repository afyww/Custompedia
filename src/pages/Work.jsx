import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Serviceus from '../components/Works/Serviceus'
import Serviceus2 from '../components/Works/Serviceus2'
import Whatsapp from '../components/Whatsapp'
import { useEffect } from 'react'

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Navbar />
    <div>
      <Whatsapp />
      <Serviceus />
      <Serviceus2 />
    </div>
    <Footer />
    </main>
  )
}

export default Services
