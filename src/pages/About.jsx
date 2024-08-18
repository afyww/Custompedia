import Aboutus from "../components/About/Aboutus";
import Company from "../components/About/Company";
import Hero from "../components/About/Hero";
import Ready from "../components/About/Ready";
import Why from "../components/About/Why";
import Nineyears from "../components/About/Nineyears";
import Workus from "../components/About/Workus";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Whatsapp from "../components/Whatsapp";
import Serviceus from "../components/About/Serviceus";
import What from "../components/About/What";

function About() {
  return (
    <main>
      <Navbar />
      <div>
        <Whatsapp />
        <Hero />
        <Aboutus />
        <Nineyears />
        <Why />
        <What />
        {/* <Company /> */}
        <Workus />
        <Ready />
      </div>
      <Footer />
    </main>
  );
}

export default About;
