import type { Metadata } from 'next'
import PrecisionMetaRetargetingLP from '@/components/PrecisionMetaRetargetingLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.phillyhairmd.com/og/m-meta-retargeting.webp", width: 1200, height: 630, alt: "Hair restoration candidacy consultation at Precision Hair Restoration" }] },
  twitter: { card: "summary_large_image", images: ["https://more.phillyhairmd.com/og/m-meta-retargeting.webp"] },
  title: 'Still Considering Hair Restoration? | Precision Hair Restoration',
  description: 'Worried about surgery or shaving? Check your candidacy in 60 seconds. Precision Hair Restoration protects your donor area and plans for natural-looking results.',
  robots: 'noindex, nofollow',
}

export default function MMetaRetargeting() {
  return (
    <PrecisionMetaRetargetingLP
      heroFormId="yPFqCHYLkxaxVcbAJJXd"
      bottomFormId="84bal4w8TIhgLWUwSvrO"
      variant="rt"
    />
  )
}
