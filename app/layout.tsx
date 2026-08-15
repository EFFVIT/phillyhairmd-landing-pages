import DniSwap from '@/components/DniSwap'
import Script from 'next/script'
import GaTag from '@/components/GaTag'
import Fab from '@/components/fab/Fab'
import './globals.css'

const OG_IMAGE = 'https://phillyhairmd.com/wp-content/uploads/phillyhairmd-og.png'

export const metadata = {
  openGraph: {
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'PhillyHair MD — Hair Restoration Philadelphia' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ghl-chat-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.createElement('script');s.src='https://widgets.leadconnectorhq.com/loader.js';s.setAttribute('data-resources-url','https://widgets.leadconnectorhq.com/chat-widget/loader.js');s.setAttribute('data-widget-id','6683f4961123b126099a8638');document.head.appendChild(s);})();`,
          }}
        />
      </head>
      <body>
          <GaTag />
        <Fab client="precision" />
        <DniSwap />
        {children}
      </body>
    </html>
  )
}
