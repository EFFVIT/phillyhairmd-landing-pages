import type { Metadata } from 'next'
import AlmaTedMetaLP from '@/components/AlmaTedMetaLP'

export const metadata: Metadata = {
  openGraph: { images: [{ url: "https://more.phillyhairmd.com/og/m-alma-ted.webp", width: 1200, height: 630, alt: "Alma TED non-invasive treatment at Precision Hair Restoration" }] },
  twitter: { card: "summary_large_image", images: ["https://more.phillyhairmd.com/og/m-alma-ted.webp"] },
  title: 'Alma TED Hair Restoration | Non-Surgical, No Needles | Precision',
  robots: 'noindex, nofollow',
}

export default function MAlmaTed() {
  return (
    <AlmaTedMetaLP
      heroFormId="FFKGKuhEKn5QNb5e94oF"
      bottomFormId="bMIL7C8yQ7O5fp6Rne7r"
    />
  )
}
