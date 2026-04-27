import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fullfitness77.com'),
  applicationName: 'FullFitness77',
  title: {
    default: 'FullFitness77 | Gimnasio en Adeje, Tenerife',
    template: '%s | FullFitness77',
  },
  description: 'Gimnasio profesional en Adeje, Tenerife, con musculación, cardio, clases grupales y entrenamiento personal. Abierto todos los días. Cuota mensual 38€.',
  keywords: [
    'gimnasio Adeje',
    'FullFitness77',
    'fitness Tenerife',
    'gimnasio Tenerife Sur',
    'musculación Adeje',
    'entrenamiento personal Adeje',
    'clases grupales Tenerife',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FullFitness77 | Gimnasio en Adeje, Tenerife',
    description: 'Entrena en FullFitness77: gimnasio en Adeje con musculación, cardio, clases grupales y entrenamiento personal.',
    url: '/',
    siteName: 'FullFitness77',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/mas-que-un-gimnasio.png',
        width: 750,
        height: 750,
        alt: 'FullFitness77 gimnasio en Adeje, Tenerife',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FullFitness77 | Gimnasio en Adeje, Tenerife',
    description: 'Gimnasio profesional en Adeje, Tenerife. Musculación, cardio, clases grupales y entrenamiento personal.',
    images: ['/images/mas-que-un-gimnasio.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${oswald.variable} ${inter.variable} font-sans antialiased bg-background`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
