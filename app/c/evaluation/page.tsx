import type { Metadata } from 'next'
import PrecisionLP from '@/components/PrecisionLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.phillyhairmd.com/og/c-evaluation.webp", width: 1200, height: 630, alt: "Consult-first hair loss evaluation at Precision Hair Restoration in Philadelphia" }] },
  twitter: { card: "summary_large_image", images: ["https://more.phillyhairmd.com/og/c-evaluation.webp"] },
  title: 'Hair Loss Evaluation Philadelphia | Precision',
  robots: 'noindex, nofollow',
}

export default function CEvaluation() {
  return (
    <PrecisionLP
      heroFormId="0CikkitkuxraQeuF59Ia"
      bottomFormId="3EQzlbCsAi3pImhG1pVH"
    />
  )
}
