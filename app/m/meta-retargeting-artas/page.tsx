import type { Metadata } from 'next'
import PrecisionMetaRetargetingLP from '@/components/PrecisionMetaRetargetingLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.phillyhairmd.com/og/m-meta-retargeting-artas.webp", width: 1200, height: 630, alt: "ARTAS hair restoration consultation at Precision Hair Restoration" }] },
  twitter: { card: "summary_large_image", images: ["https://more.phillyhairmd.com/og/m-meta-retargeting-artas.webp"] },
  title: 'ARTAS® Hair Restoration | Precision Hair Restoration',
  description: 'Worried about surgery or shaving? Get clarity in 60 seconds. Your consultation determines whether ARTAS®, manual FUE, or a hybrid approach fits your pattern.',
  robots: 'noindex, nofollow',
}

export default function MMetaRetargetingArtas() {
  return (
    <PrecisionMetaRetargetingLP
      heroFormId="yPFqCHYLkxaxVcbAJJXd"
      bottomFormId="84bal4w8TIhgLWUwSvrO"
      variant="artas"
    />
  )
}
