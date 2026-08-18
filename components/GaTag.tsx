'use client'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

/* GA4 ONLY. GTM-TG4Z4QP5 was removed from this landing page app on 2026-08-15 at
   Joe's direction. Measured live that day it delivered Microsoft Clarity session
   recording, the Meta pixel, Bing UET and a DoubleClick view-through remarketing
   beacon onto patient-intake pages. Neither Microsoft nor Meta will sign a BAA.

   The container itself was NOT edited, and must not be: Precision's own website
   serves the same container, so editing it would strip that site's own analytics
   and retargeting. Scope is the landing page fleet only.

   allow_google_signals:false is load-bearing. Without it, GA4 linked to Google Ads
   keeps building the same remarketing audiences off the same page views and
   removing the beacon achieves nothing (H-32). */
const GA_ID = 'G-VVX8GPKB58'


/* HEALTH-INTENT ROUTE GATE — added 2026-08-17 with the /c/consult build.

   /c/consult collects a name, email, mobile, a Norwood/Ludwig selection and a
   prior-procedure answer. That is health-intent input in a form, and H-26 /
   §6 failure mode 7 make a browser analytics tag on such a page non-waivable
   at the skill layer; these practices are BAA-covered and Google will not sign
   one for GA4. Server-side delivery would not launder it either (H-32) — the
   restriction follows the data, not the pipe.

   Gate widened 2026-08-18 at mroberts direction to cover all remaining
   health-intent intake routes confirmed firing GA4 page_view hits:
   /c/evaluation, /c/hair-restoration, and the start.phillyhairmd.com
   form fleet. Same rationale as /c/consult — BAA-uncoverable, restriction
   follows the data not the pipe.

   Suppressing a tag on a medical page can only ever reduce exposure, so this
   edit cannot hide a violation. */
const HEALTH_INTENT_ROUTES = [
  '/c/consult',
  '/c/evaluation',
  '/c/hair-restoration',
  '/hair-restoration-google',
  '/alma-google',
  '/artas-google-lead-gen',
  '/neograft-google-lead-gen',
]
const isHealthIntent = (p: string) =>
  HEALTH_INTENT_ROUTES.some((r) => p === r || p.startsWith(r + '/'))

export default function GaTag() {
  const pathname = usePathname() || ''
  if (isHealthIntent(pathname)) return null

  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga4-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js', new Date());
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'granted'});
gtag('config','${GA_ID}',{allow_google_signals:false,allow_ad_personalization_signals:false,anonymize_ip:true});`}
      </Script>
    </>
  )
}
