import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';
import SlidernNews from '@/components/SlidernNews';

export default function Home() {
  return (
    <div>
      <Navbar />
      <SlidernNews />
      <HomePage />
      <Footer />
    </div>
  )
}
