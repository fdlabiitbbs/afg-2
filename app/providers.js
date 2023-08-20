'use client'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

export default function Providers({ children }) {
    const [mounted, setMounted] = useState(false)

    // When mounted on client, now we can show the UI
    useEffect(() => {
        setMounted(true), []
    });

    if (!mounted) {
        return <>{children}</>
    }
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}