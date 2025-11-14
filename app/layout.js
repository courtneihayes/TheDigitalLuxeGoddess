import './globals.css'

export const metadata = {
  title: 'Digital Luxe Goddess | Self-Love Journals & Empowerment Products for Women',
  description: 'Transform your life with empowering self-love journals, affirmations, and goddess energy tools. Digital products and physical journals for women seeking personal growth, manifestation, and feminine empowerment.',
  keywords: 'self-love journal, goddess empowerment, women empowerment products, manifestation journal, affirmations for women, self-care journal, personal growth, feminine energy, digital journals, empowerment workbooks, mindfulness journal, gratitude journal',
  authors: [{ name: 'Digital Luxe Goddess' }],
  creator: 'Digital Luxe Goddess',
  publisher: 'The Goddess Empowerment',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Digital Luxe Goddess | Self-Love Journals & Empowerment Products',
    description: 'Premium self-love journals and empowerment tools for women who are ready to embrace their goddess energy and transform their lives.',
    url: 'https://yourdomain.com',
    siteName: 'Digital Luxe Goddess',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Luxe Goddess - Empowerment Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Luxe Goddess | Self-Love Journals & Empowerment',
    description: 'Transform your life with empowering journals and goddess energy tools.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourdomain.com" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Digital Luxe Goddess',
              description: 'Empowering women through self-love journals and personal growth products',
              url: 'https://yourdomain.com',
              logo: 'https://yourdomain.com/logo.png',
              sameAs: [
                'https://instagram.com/digitalluxegoddess',
                'https://tiktok.com/@digitalluxegoddess',
                'https://beacons.ai/digitalluxegoddess',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: 'English',
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
