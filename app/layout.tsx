import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/toaster"
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Zelalem Zerihun | Mobile & Web Development Architect',
  description: 'Portfolio of Zelalem Zerihun. Highly motivated mobile and web developer specializing in building scalable, beautiful applications with Flutter, Next.js, and clean architecture.',
  keywords: ['Zelalem Zerihun', 'Flutter Developer', 'Mobile Developer', 'Web Developer', 'Next.js', 'React', 'iOS', 'Android', 'Software Engineer', 'Portfolio'],
  authors: [{ name: 'Zelalem Zerihun' }],
  creator: 'Zelalem Zerihun',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zelalem-zerihun.vercel.app/',
    title: 'Zelalem Zerihun | Mobile & Web Development Architect',
    description: 'Portfolio of Zelalem Zerihun. Highly motivated mobile and web developer specializing in building scalable, beautiful applications.',
    siteName: 'Zelalem Zerihun Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zelalem Zerihun | Mobile & Web Development Architect',
    description: 'Highly motivated mobile and web developer specializing in building scalable, beautiful applications.',
    creator: '@zelalem_zerihun',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
