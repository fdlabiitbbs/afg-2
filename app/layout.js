import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Applied Fluids Group',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {/* <Navbar /> */}
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  )
}
