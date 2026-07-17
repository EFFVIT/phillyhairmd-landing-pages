import DniSwap from '@/components/DniSwap'
import Script from 'next/script'
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
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TG4Z4QP5');`,
          }}
        />
        <Script
          id="ghl-chat-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=document.createElement('script');s.src='https://widgets.leadconnectorhq.com/loader.js';s.setAttribute('data-resources-url','https://widgets.leadconnectorhq.com/chat-widget/loader.js');s.setAttribute('data-widget-id','6683f4961123b126099a8638');document.head.appendChild(s);})();`,
          }}
        />
      </head>
      <body>
        <DniSwap />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG4Z4QP5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
