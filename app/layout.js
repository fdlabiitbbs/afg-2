import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Applied Fluids Group',
  description: 'A group focuses on both fundamental and applied aspects of flow control for various applications',
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
