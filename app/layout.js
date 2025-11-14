import "./globals.css";

export const metadata = {
  title: "Digital Luxe Goddess Academy | Goddess Empowerment",
  description:
    "Digital Luxe Goddess Academy helps women build aligned digital income with boundaries, healing, and simple online systems. Serving Baton Rouge and clients across the United States.",
  openGraph: {
    title: "Digital Luxe Goddess Academy | Goddess Empowerment",
    description:
      "Programs, journals, and resources for women rebuilding their life, money, and online presence — without oversharing or burning out.",
    type: "website",
    url: "https://your-vercel-domain.com"
  },
  metadataBase: new URL("https://your-vercel-domain.com")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* SEO: Structured data for Google */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digital Luxe Goddess Academy",
              alternateName: "Goddess Empowerment",
              url: "https://your-vercel-domain.com",
              sameAs: [
                "https://beacons.ai/digitalluxegoddess",
                "https://shop.beacons.ai/digitalluxegoddess/55bb08a3-f5ae-4d8c-a513-b1795bbb944c",
                "https://shop.beacons.ai/digitalluxegoddess/ee1e3726-952e-4f81-bbc6-2a70975855b8",
                "https://the-goddess-empowerment.printify.me/"
                // add Instagram / TikTok URLs here when you’re ready
              ],
              areaServed: [
                "Baton Rouge, Louisiana",
                "Prairieville, Louisiana",
                "Gonzales, Louisiana",
                "Denham Springs, Louisiana",
                "United States"
              ],
              description:
                "Digital Luxe Goddess Academy offers empowerment education, digital products, 1:1 alignment mentorship, and creator resources for women building safe, sustainable online income.",
              founder: {
                "@type": "Person",
                name: "Courtnei",
                jobTitle: "Founder",
                gender: "Female"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
