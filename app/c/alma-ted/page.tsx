import type { Metadata } from 'next'
import AlmaTedLP from '@/components/AlmaTedLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.phillyhairmd.com/og/c-alma-ted.webp", width: 1200, height: 630, alt: "Alma TED non-surgical hair restoration at Precision in Philadelphia" }] },
  twitter: { card: "summary_large_image", images: ["https://more.phillyhairmd.com/og/c-alma-ted.webp"] },
  title: 'Non-Invasive Hair Loss Support with Alma TED | Precision',
  robots: 'noindex, nofollow',
}

export default function CAlmaTed() {
  return (
    <AlmaTedLP
      heroFormId="lr4xEv4lKwOuEr9yynNh"
      bottomFormId="GophqcvGTVaYmSnWd4Ph"
    />
  )
}
