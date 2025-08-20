import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';
import ScrollAnimator from './components/client/ScrollAnimator'; // Nova klijentska komponenta

export default function Home() {
  return (
    <main className="flex min-h-screen bg-salon-white flex-col" lang="sr">
      <ScrollAnimator />
      <Navbar />
      <div className="flex-1 md:ml-16">
        <Hero />
        <About />
        <Team />
        <Gallery />
        <Products />
        <Pricing />
        <Reviews />
        <Contact />
        <Map />
        <Footer />
      </div>
    </main>
  );
}
