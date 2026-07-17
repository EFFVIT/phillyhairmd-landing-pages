import type { Metadata } from 'next'
import PrecisionLP from '@/components/PrecisionLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.phillyhairmd.com/og/c-hair-transplant.webp", width: 1200, height: 630, alt: "Hair transplant consultation at Precision Hair Restoration in Philadelphia" }] },
  twitter: { card: "summary_large_image", images: ["https://more.phillyhairmd.com/og/c-hair-transplant.webp"] },
  title: 'Hair Loss Evaluation Philadelphia | Precision Hair Restoration',
  robots: 'noindex, nofollow',
}

export default function CHairTransplant() {
  return (
    <PrecisionLP
      heroFormId="aCtKSLRijbOoLxDgISN1"
      bottomFormId="6kDNsScOD0iXRuzKhXgh"
    />
  )
}
