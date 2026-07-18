'use client'
import { Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import { useReveal } from '@/lib/useReveal'

// Recreation of start.phillyhairmd.com/meta/ (paid-social consult LP) on the fleet.
// Consult-first (Layer 1) — Precision is Layer 1 only, no exceptions. Source copy
// reproduced verbatim. NO Meta pixel on this page (medical form page, H-26 HIPAA
// carve-out); attribution rides server-side CAPI. Brand tokens locked to Precision.

const PHONE = '(267) 361-0516'
const PHONE_HREF = 'tel:+12673610516'
const BLUE = '#164996'
const NAVY = '#15274f'
const GOLD = '#fdc700'
const HEADING = '#0a0a0a'
const BODY = '#364153'
const LIGHT_BTN_BG = '#e8f1fa'
const LOGO_WHITE = '/img/m/logo-white.webp'

interface Props {
  heroFormId: string
  bottomFormId: string
}

const Check = () => (
  <span style={{
    flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 24, height: 24, background: GOLD, borderRadius: '50%',
  }}>
    <svg width="11" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L5 9L1 5" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

export default function PrecisionMetaLP({ heroFormId, bottomFormId }: Props) {
  const heroReveal = useReveal<HTMLElement>()
  const notSalesReveal = useReveal<HTMLElement>()
  const permanentReveal = useReveal<HTMLElement>()
  const howReveal = useReveal<HTMLElement>()
  const incentiveReveal = useReveal<HTMLElement>()
  const finalReveal = useReveal<HTMLElement>()

  return (
    <>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* Nav */}
      <header style={{
        background: '#000', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, padding: '14px 24px',
      }}>
        <a href="/" style={{ display: 'block', flexShrink: 0 }}>
          <img src={LOGO_WHITE} alt="Precision Hair Restoration" style={{ height: 38, width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="#hero-form" style={{
            background: LIGHT_BTN_BG, color: '#000', fontWeight: 700, borderRadius: 24,
            textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap', padding: '10px 20px', fontSize: 14,
          }}>
            BOOK A CONSULT
          </a>
          <a href={PHONE_HREF} style={{ color: '#fff', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroReveal.ref} className={heroReveal.className} style={{ background: '#fff', padding: '56px 24px 48px' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', alignItems: 'start', gap: 48 }}>
          <div>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, color: HEADING, lineHeight: 1.2, margin: '0 0 16px' }}>
              See If Hair Restoration Is Right For You&mdash;Before You Commit to Surgery
            </h1>
            <p style={{ fontSize: 16, color: BODY, margin: '0 0 28px', lineHeight: 1.65 }}>
              A private, personalized consultation to evaluate your hair loss, treatment options, and expected results&mdash;guided by experienced medical professionals.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, marginBottom: 28 }}>
              <a href="#hero-form" style={{ background: BLUE, color: '#fff', padding: '14px 26px', borderRadius: 40, fontSize: 13, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '0.04em' }}>
                BOOK A CONSULT
              </a>
              <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8, color: HEADING, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6495 14.5551 13.8197C14.4808 13.9899 14.3718 14.1428 14.2352 14.2686C14.0986 14.3944 13.9373 14.4903 13.7616 14.5502C13.5859 14.6101 13.3997 14.6327 13.2147 14.6167C11.1636 14.3934 9.19352 13.6899 7.46668 12.5633C5.86054 11.5354 4.49459 10.1695 3.46668 8.56334C2.33608 6.82805 1.63239 4.84869 1.41335 2.78667C1.39735 2.60301 1.4197 2.41839 1.47902 2.24354C1.53834 2.06869 1.63328 1.90783 1.75798 1.77125C1.88267 1.63467 2.03448 1.52544 2.20382 1.45047C2.37317 1.3755 2.55636 1.33646 2.74168 1.336H4.74168C5.06525 1.33285 5.37884 1.44923 5.6238 1.66294C5.86877 1.87665 6.02859 2.17205 6.07335 2.49334C6.15721 3.13039 6.31282 3.75585 6.53668 4.35734C6.62575 4.59667 6.64663 4.85607 6.59693 5.10668C6.54723 5.35729 6.42897 5.58911 6.25601 5.77534L5.40668 6.62467C6.36026 8.30431 7.7357 9.67976 9.41535 10.6333L10.2647 9.78401C10.4509 9.61105 10.6827 9.49279 10.9333 9.44309C11.1839 9.39338 11.4434 9.41426 11.6827 9.50333C12.2842 9.72719 12.9096 9.8828 13.5467 9.96667C13.8714 10.0119 14.1687 10.1746 14.383 10.4239C14.5972 10.6732 14.7136 10.9923 14.7107 11.32L14.6667 11.28Z" fill={NAVY} />
                </svg>
                Or call {PHONE}
              </a>
            </div>
            <div className="trust-grid" style={{ marginBottom: 8 }}>
              {['Real procedures', 'Personalized care', 'Real patients', 'Performed in-clinic'].map(label => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Check />
                  <span style={{ fontSize: 14, color: BODY }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card + results image */}
          <div>
            <div id="hero-form" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '24px', marginBottom: 20 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: HEADING, margin: '0 0 12px' }}>Every treatment plan is customized&mdash;no templates, no shortcuts.</p>
              <GhlForm formId={heroFormId} height={420} formName="Banner Form - META LEAD GEN" />
            </div>
            <img src="/img/m/meta-hero.webp" alt="Precision Hair Restoration results" style={{ width: '100%', borderRadius: 16, display: 'block', marginBottom: 8 }} />
            <p style={{ textAlign: 'center', fontSize: 12, color: '#99a1af', margin: 0 }}>Individual results vary</p>
          </div>
        </div>
      </section>

      {/* This Is Not a Sales Appointment */}
      <section ref={notSalesReveal.ref} className={notSalesReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, color: BLUE, margin: '0 0 12px' }}>
            This Is Not a Sales Appointment
          </h2>
          <p style={{ fontSize: 15, color: BODY, margin: '0 auto 36px', maxWidth: 640, lineHeight: 1.7 }}>
            A comprehensive medical consultation focused on your health, eligibility, and long-term success.
          </p>
          <div className="two-col" style={{ gap: 20, textAlign: 'left' }}>
            {[
              ['Medical Eligibility', 'Determine whether you’re medically eligible'],
              ['Review Options', 'Review surgical and non-surgical options'],
              ['Realistic Outcomes', 'Understand realistic outcomes and timelines'],
              ['Safety & Planning', 'Discuss recovery, safety, and long-term planning'],
            ].map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 14, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '20px 22px' }}>
                <Check />
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>{t}</h3>
                  <p style={{ fontSize: 14, color: BODY, margin: 0, lineHeight: 1.6 }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Permanent */}
      <section ref={permanentReveal.ref} className={permanentReveal.className} style={{ background: BLUE, padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 700, color: '#fff', margin: '0 0 20px', lineHeight: 1.25 }}>
            Hair Restoration Is Permanent&mdash;Mistakes Are Too
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px', lineHeight: 1.75 }}>
            Hair restoration isn&apos;t cosmetic filler. It&apos;s a permanent medical procedure that requires careful planning and skilled execution.
          </p>
          <p style={{ fontSize: 16, color: '#fff', fontWeight: 600, margin: 0, lineHeight: 1.75 }}>
            This consultation exists to help you avoid rushed decisions, over-harvesting, and unnatural results&mdash;and to determine whether treatment makes sense for you at all.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howReveal.ref} className={howReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            How It Works
          </h2>
          <div className="three-col" style={{ marginBottom: 28 }}>
            {[
              ['1', 'Request a Consultation', 'Submit a short, private form.'],
              ['2', 'Speak With a Patient Advisor', 'Review your goals and next steps.'],
              ['3', 'In-Clinic Evaluation', 'Confirm candidacy and personalized options.'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: '50%', background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800 }}>
                  {n}
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: HEADING, margin: '0 0 8px' }}>{t}</h3>
                <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.55 }}>{d}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginBottom: 16 }}>
            <a href="#final-form" style={{ display: 'inline-block', background: BLUE, color: '#fff', padding: '15px 32px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}>
              BOOK A CONSULT
            </a>
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: '#6a7282', fontStyle: 'italic', margin: '0 0 24px' }}>
            No obligation. Private and confidential.
          </p>
          <div style={{ textAlign: 'center' }}>
            <a href="#final-form" style={{ display: 'inline-block', background: NAVY, color: '#fff', padding: '15px 32px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}>
              See If I&rsquo;m a Candidate
            </a>
          </div>
        </div>
      </section>

      {/* Incentive */}
      <section ref={incentiveReveal.ref} className={incentiveReveal.className} style={{ background: NAVY, padding: '48px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(20px, 2.6vw, 26px)', fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>
            Limited Consultation Incentive Available
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.7 }}>
            Qualified candidates may be eligible for preferred pricing during their consultation.
          </p>
        </div>
      </section>

      {/* Final CTA + form */}
      <section ref={finalReveal.ref} className={finalReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: HEADING, margin: '0 0 16px', lineHeight: 1.2 }}>
              If You&apos;re Going to Do This, Do It Informed
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={PHONE_HREF} style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>{PHONE}</a>
              <a href="mailto:visit@phillyhairmd.com" style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>visit@phillyhairmd.com</a>
              <span style={{ color: BODY, fontSize: 15 }}>1608 Walnut St, Suite 1701 Philadelphia, 19103</span>
            </div>
          </div>
          <div id="final-form" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '24px' }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: HEADING, margin: '0 0 12px' }}>Check My Eligibility</p>
            <GhlForm formId={bottomFormId} height={440} formName="Footer Form - META LEAD GEN" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#000', color: 'rgba(255,255,255,0.7)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 20 }}>
            <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/cookie-policy" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, textDecoration: 'none' }}>Cookie Policy</a>
          </div>
          <p style={{ fontSize: 12, lineHeight: 1.7, margin: '0 0 16px' }}>
            <strong style={{ color: '#fff' }}>Medical Disclaimer:</strong> This website provides general information
            about hair restoration procedures. It is not intended to be a substitute for professional medical advice,
            diagnosis, or treatment. Individual results may vary. Not all candidates are eligible for treatment. A
            medical consultation is required to determine candidacy.
          </p>
          <p style={{ fontSize: 12, margin: 0 }}>&copy; 2026 Precision Hair Restoration. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
