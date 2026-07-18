import type { Metadata } from 'next'
import PrecisionMetaLP from '@/components/PrecisionMetaLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.phillyhairmd.com/og/m-meta.webp", width: 1200, height: 630, alt: "Hair restoration consultation at Precision Hair Restoration" }] },
  twitter: { card: "summary_large_image", images: ["https://more.phillyhairmd.com/og/m-meta.webp"] },
  title: 'See If Hair Restoration Is Right For You | Precision Hair Restoration',
  description: 'A private, personalized consultation to evaluate your hair loss, treatment options, and expected results, guided by experienced medical professionals.',
  robots: 'noindex, nofollow',
}

export default function MMeta() {
  return (
    <PrecisionMetaLP
      heroFormId="E1g7zPhfMDaFD7Lvz4hz"
      bottomFormId="s6rXVyHtAJU4rcSBmgpq"
    />
  )
}
