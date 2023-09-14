import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';
import Corousal from '@/components/Corousal';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Corousal />
      <HomePage />
      <Footer />
    </div>
  )
}
