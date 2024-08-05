import Hero from '../components/Home/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contactus from '../components/Contactus'
import Workus from '../components/Home/Workus'
import Motion from '../components/Home/Motion'
import OurNetwork from '../components/Home/OurNetwork'
import Quote1 from '../components/Home/Quote1'
import OurServices from '../components/Home/OurServices'
import Whatsapp from '../components/Whatsapp'
import Runningtext from '../components/Home/Runningtext'
import AboutUs from '../components/Home/AboutUs'

function Home() {
    return (
        <main className='flex flex-col'>
            <Navbar />
            <div className='w-full mx-auto'>
                <Whatsapp />
                <Hero />
                <Runningtext />
                <AboutUs />
                <Motion />
                <Quote1 />
                <OurNetwork />
                <OurServices />
                <Workus />
                <Contactus />
            </div>
            <Footer />
        </main>
    )
}

export default Home
