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
/* COLLAPSED TO THE /c PREFIX 2026-08-25, on Joe's call during the fleet sweep.

   The enumerated list this replaces (Mike, 2026-08-18) was correct for the
   routes that existed when it was written and had already gone stale: it named
   /c/consult, /c/evaluation and /c/hair-restoration, while the app also serves
   /c/alma-ted and /c/hair-transplant. Both were verified FIRING GA4 live on
   2026-08-25, on health-intent pages, because they were simply not on the list.
   That is H-45 exactly, and it is the argument for a prefix over a list: every
   /c route in this app mounts a consult form, so the prefix and the
   health-intent set are the same set, and adding a route no longer requires
   remembering this file.

   THE FOUR LEGACY NON-/c ROUTES BELOW ARE DELIBERATELY KEPT. They sit outside
   /c, so collapsing to the prefix alone would silently re-expose them, which
   would make this edit a loosening wearing the costume of a simplification
   (H-38). */
const HEALTH_INTENT_ROUTES = [
  '/c',
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
