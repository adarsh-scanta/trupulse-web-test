'use client'

import { ThemeProvider } from 'next-themes'
import siteMetadata from '@/data/siteMetadata'
import { Lora } from 'next/font/google';


export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme} enableSystem>
      {children}
    </ThemeProvider>
  )
}
