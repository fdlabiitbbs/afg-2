import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='text-white'>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  )
}
