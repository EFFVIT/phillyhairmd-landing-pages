'use client'
import { useState, Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import { useReveal } from '@/lib/useReveal'

// Recreation of start.phillyhairmd.com/meta-retargeting/ and
// /meta-retargeting-artas/ (paid-social retargeting consult funnels) on the fleet.
// Consult-first (Layer 1) — Precision is Layer 1 only, no exceptions. Source copy
// reproduced verbatim (incl. source quirks). ARTAS® = device trademark (FM5):
// manufacturer attribution kept, no added device claims, candidacy-gated framing.
// NO Meta pixel (medical form page, H-26 HIPAA carve-out); attribution via CAPI.

const PHONE = '(267) 361-0516'
const PHONE_HREF = 'tel:+12673610516'
const BLUE = '#164996'
const NAVY = '#15274f'
const GOLD = '#fdc700'
const HEADING = '#0a0a0a'
const BODY = '#364153'
const LIGHT_BTN_BG = '#e8f1fa'
const LOGO_WHITE = '/img/m/logo-white.webp'

const REVIEWS = [
  {
    name: 'Sandra P',
    text: "I visited Precision Hair Restoration in October 2024 after dealing with traction alopecia for about two years and trying several non-invasive options. I scheduled a consultation with Dr. Raffi to better understand what care options might be appropriate for me. From the beginning, Dr. Raffi took the time to listen to my concerns and explain the process in a way that made me feel comfortable and respected. I appreciated how thoughtful the care team was, especially their experience working with textured hair, which helped put me at ease. Over time, I began noticing positive changes that felt very natural. Friends and family commented on how good it looked, which meant a lot to me. Dr. Raffi and Michele made the entire experience feel supportive and professional, and I'm very grateful for their care.",
  },
  {
    name: 'Neil Shives',
    text: "After an accident in 2021, I experienced an area where hair no longer grew the same way. I contacted Precision Hair Restoration and scheduled a complimentary consultation to see what options might be available. Michele was welcoming and helpful from the start, and Dr. Raffi Barsoumian took the time to carefully evaluate my situation and explain what to expect. I appreciated how clearly everything was communicated and how supported I felt throughout the process. The follow-up care and communication were excellent, and over time I noticed meaningful improvements that made a real difference for me. The entire team was professional, responsive, and easy to work with. I'm thankful for the care I received and would recommend them to anyone seeking guidance for hair loss concerns.",
  },
  {
    name: 'David Platt',
    text: "I chose Precision Hair Restoration after doing my research and meeting with Dr. Raffi Barsoumian for a consultation. I was initially nervous, but the team was professional, organized, and reassuring from the very beginning. Dr. Barsoumian and his staff explained everything clearly and made the experience far more comfortable than I expected. The care and attention throughout the process gave me confidence, and recovery felt manageable. Overall, it was a positive experience, and I appreciated the professionalism and support provided by the entire team.",
  },
]

const Check = () => (
  <span style={{
    flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 22, height: 22, background: GOLD, borderRadius: '50%', marginTop: 2,
  }}>
    <svg width="10" height="8" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 1L5 9L1 5" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
)

function Review({ name, text }: { name: string; text: string }) {
  const [open, setOpen] = useState(false)
  const LIMIT = 200
  const short = text.length > LIMIT ? text.slice(0, LIMIT).replace(/\s+\S*$/, '') + '...' : text
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ color: GOLD, fontSize: 17, letterSpacing: 2 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </div>
      <p style={{ fontSize: 15, color: BODY, lineHeight: 1.7, margin: '0 0 12px' }}>{open ? text : short}</p>
      {text.length > LIMIT && (
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', padding: 0, color: HEADING, fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', marginBottom: 12 }}>
          {open ? 'Read Less' : 'Read More'}
        </button>
      )}
      <p style={{ fontWeight: 700, fontSize: 14, color: HEADING, margin: 0 }}>{name}</p>
    </div>
  )
}

const Cta = ({ href, label }: { href: string; label: string }) => (
  <a href={href} style={{ display: 'inline-block', background: BLUE, color: '#fff', padding: '15px 32px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}>
    {label}
  </a>
)

interface Props {
  heroFormId: string
  bottomFormId: string
  variant?: 'rt' | 'artas'
}

export default function PrecisionMetaRetargetingLP({ heroFormId, bottomFormId, variant = 'rt' }: Props) {
  const isArtas = variant === 'artas'
  const heroReveal = useReveal<HTMLElement>()
  const fitReveal = useReveal<HTMLElement>()
  const waitingReveal = useReveal<HTMLElement>()
  const reviewsReveal = useReveal<HTMLElement>()
  const cheaperReveal = useReveal<HTMLElement>()
  const shavingReveal = useReveal<HTMLElement>()
  const candidateReveal = useReveal<HTMLElement>()
  const nextReveal = useReveal<HTMLElement>()
  const decisionReveal = useReveal<HTMLElement>()
  const contactReveal = useReveal<HTMLElement>()
  const finalReveal = useReveal<HTMLElement>()

  return (
    <>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* ARTAS top strip */}
      {isArtas && (
        <div style={{ background: NAVY, color: '#fff', textAlign: 'center', padding: '10px 24px', fontSize: 14 }}>
          We&rsquo;ll confirm if ARTAS&reg; or another method is best for your goals.
        </div>
      )}

      {/* Nav */}
      <header style={{
        background: '#000', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, padding: '14px 24px',
      }}>
        <a href="/" style={{ display: 'block', flexShrink: 0 }}>
          <img src={LOGO_WHITE} alt="Precision Hair Restoration" style={{ height: 38, width: 'auto' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href="#hero-form" style={{ background: LIGHT_BTN_BG, color: '#000', fontWeight: 700, borderRadius: 24, textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap', padding: '10px 20px', fontSize: 14 }}>
            CHECK ELIGIBILITY
          </a>
          <a href={PHONE_HREF} style={{ color: '#fff', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>{PHONE}</a>
        </div>
      </header>

      {/* Hero */}
      <section ref={heroReveal.ref} className={heroReveal.className} style={{ background: '#fff', padding: '56px 24px 48px' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', alignItems: 'start', gap: 48 }}>
          <div>
            <span style={{ display: 'inline-block', background: '#eef4fb', color: NAVY, fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 40, marginBottom: 18 }}>
              {isArtas ? 'ARTAS® Robotic Hair Restoration' : 'Still Considering Hair Restoration?'}
            </span>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, color: HEADING, lineHeight: 1.2, margin: '0 0 16px' }}>
              {isArtas
                ? 'Worried about surgery or shaving? Get clarity in 60 seconds.'
                : 'Worried about surgery or shaving? Get answers in 60 seconds.'}
            </h1>
            <p style={{ fontSize: 16, color: BODY, margin: '0 0 28px', lineHeight: 1.65 }}>
              {isArtas
                ? 'ARTAS-assisted precision helps protect your donor area and plan for natural-looking results —based on your hair loss pattern.'
                : 'Precision Hair Restoration protects your donor area and plans for natural-looking results—based on your hair loss pattern.'}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, marginBottom: 28 }}>
              <a href="#hero-form" style={{ background: BLUE, color: '#fff', padding: '14px 26px', borderRadius: 40, fontSize: 13, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '0.04em' }}>
                CHECK ELIGIBILITY
              </a>
              <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8, color: HEADING, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                Or call {PHONE}
              </a>
            </div>
            <img src={isArtas ? '/img/m/artas-device.webp' : '/img/m/rt-hero.webp'} alt={isArtas ? 'ARTAS robotic hair restoration system' : 'Hair restoration consultation'} style={{ width: '100%', borderRadius: 16, display: 'block', marginBottom: 8 }} />
            <p style={{ textAlign: 'center', fontSize: 12, color: '#99a1af', margin: 0 }}>Individual results vary</p>
          </div>

          {/* Right: hero form */}
          <div>
            <div id="hero-form" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '24px' }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>Check Your Eligibility</p>
              <p style={{ fontSize: 13, color: BODY, margin: '0 0 12px' }}>Confidential &bull; No Obligation &bull; Personalized</p>
              <GhlForm formId={heroFormId} height={440} formName="Banner Form -Meta Retargeting" />
            </div>
          </div>
        </div>
      </section>

      {/* Best For / Not ideal if */}
      <section ref={fitReveal.ref} className={fitReveal.className} style={{ background: '#F9FAFB', padding: '56px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1000, margin: '0 auto', gap: 24 }}>
          {[
            { title: 'Best For', items: ['Early to moderate loss', 'Want natural density', 'Prefer physician planning'], good: true },
            { title: 'Not ideal if:', items: ['Seeking the cheapest option', 'Expect guaranteed density', 'Unwilling to follow long-term plan'], good: false },
          ].map(col => (
            <div key={col.title} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '28px 26px' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: col.good ? BLUE : HEADING, margin: '0 0 16px' }}>{col.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.items.map(it => (
                  <div key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    {col.good ? <Check /> : (
                      <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: '#e5e7eb', color: '#6a7282', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, marginTop: 2 }}>&ndash;</span>
                    )}
                    <span style={{ fontSize: 15, color: BODY, lineHeight: 1.5 }}>&ldquo;{it}&rdquo;</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', fontSize: 14, color: BLUE, fontWeight: 600, margin: '24px 0 0' }}>
          <a href="#hero-form" style={{ color: BLUE, textDecoration: 'none' }}>Not sure? Check candidacy &gt;</a>
        </p>
      </section>

      {/* If You've Been Waiting */}
      <section ref={waitingReveal.ref} className={waitingReveal.className} style={{ background: '#fff', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 700, color: HEADING, margin: '0 0 40px', lineHeight: 1.25 }}>
            If You&rsquo;ve Been Waiting to &ldquo;Think About It&rdquo; &mdash; This Is Why
          </h2>
          <div className="two-col" style={{ gap: 20, textAlign: 'left', marginBottom: 40 }}>
            {[
              'Hair Loss Doesn’t Pause While You Decide',
              'Donor Hair Quality Declines Over Time',
              'Earlier Intevention = More Natural Outcomes',
              'Waiting Limits Future Options',
            ].map(t => (
              <div key={t} style={{ display: 'flex', gap: 12, alignItems: 'center', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 12, padding: '18px 22px' }}>
                <Check />
                <span style={{ fontSize: 16, fontWeight: 600, color: HEADING }}>{t}</span>
              </div>
            ))}
          </div>
          <Cta href="#hero-form" label="See If I&rsquo;m a Candidate" />
        </div>
      </section>

      {/* Reviews */}
      <section ref={reviewsReveal.ref} className={reviewsReveal.className} style={{ background: '#eeeeee', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: HEADING, textAlign: 'center', margin: '0 0 8px' }}>
            Real Patients. Real Experiences.
          </h2>
          <p style={{ fontSize: 15, color: '#555', textAlign: 'center', margin: '0 0 40px' }}>
            Verified patient experiences shared after their visit.
          </p>
          <div className="reviews-grid">
            {REVIEWS.map(r => <Review key={r.name} name={r.name} text={r.text} />)}
          </div>
        </div>
      </section>

      {/* Isn't It Cheaper Somewhere Else */}
      <section ref={cheaperReveal.ref} className={cheaperReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: HEADING, margin: '0 0 24px' }}>
            Isn&rsquo;t It Cheaper Somewhere Else?&rdquo;
          </h2>
          <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: '0 0 16px' }}>Hair restoration is not a commodity</p>
          <p style={{ fontSize: 15, color: BODY, fontWeight: 600, margin: '0 0 10px' }}>Cost reflects:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {['The Surgeon’s Experience', 'Technique selection (FUE vs FUT)', 'Planning and long-term outcome'].map(it => (
              <div key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Check /><span style={{ fontSize: 15, color: BODY, lineHeight: 1.5 }}>{it}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: '0 0 16px' }}>One procedure done right &gt; multiple corrections later</p>
          <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.7 }}>The real cost is choosing wrong&mdash;not choosing carefully.</p>
        </div>
      </section>

      {/* Concerned about shaving */}
      <section ref={shavingReveal.ref} className={shavingReveal.className} style={{ background: '#F9FAFB', padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: HEADING, margin: '0 0 24px' }}>
            Concerned about shaving or downtime?
          </h2>
          <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: '0 0 16px' }}>Not every procedure requires full shaving</p>
          <p style={{ fontSize: 15, color: BODY, fontWeight: 600, margin: '0 0 10px' }}>Modern techniques prioritize:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {[
              isArtas ? 'ARTAS®-assisted graft selection consistency (when appropriate)' : 'Precise graft selection consistency (when appropriate)',
              'Donor preservation-focused planning',
              'Natural growth pattern placement strategy',
              'Technique',
              'Shaving requirements',
              'Expected outcome',
            ].map(it => (
              <div key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Check /><span style={{ fontSize: 15, color: BODY, lineHeight: 1.5 }}>{it}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: BODY, margin: '0 0 24px', lineHeight: 1.7 }}>
            {isArtas
              ? 'Your consultation determines whether ARTAS®, manual FUE, or a hybrid approach fits your pattern.”'
              : 'Your consultation determines the best type of hair restoration procedure for your needs and whether a hybrid approach where a surgical procedure is paired with a non-surgical treatment, all designed specifically for your hair loss pattern.'}
          </p>
          <Cta href="#hero-form" label="Find Out What Applies To Me" />
        </div>
      </section>

      {/* Are You a Candidate / Why ARTAS */}
      <section ref={candidateReveal.ref} className={candidateReveal.className} style={{ background: NAVY, padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>
            {isArtas ? 'Why ARTAS®' : 'Are You a Candidate For Hair Restoration?'}
          </h2>
          {isArtas && (
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', margin: '0 0 20px', fontStyle: 'italic' }}>
              (when you&rsquo;re a match)
            </p>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24, marginTop: isArtas ? 0 : 16 }}>
            {(isArtas
              ? ['Assists with consistent extraction patterns', 'Supports donor-area preservation planning', 'Helps reduce human fatigue variability']
              : ['Your specific type of hair loss will be diagnosed', 'The extent of your current hair loss', 'The amount and quality of your donor hair region']
            ).map(it => (
              <div key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Check /><span style={{ fontSize: 16, color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>{it}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.82)', margin: '0 0 24px', lineHeight: 1.7 }}>
            {isArtas ? 'ARTAS® ' : 'Hair restoration '}isn&rsquo;t for everyone&mdash;your candidacy determines the best method.
          </p>
          <Cta href="#hero-form" label="See If I&rsquo;m a Candidate" />
        </div>
      </section>

      {/* What happens next */}
      <section ref={nextReveal.ref} className={nextReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            What happens next
          </h2>
          <div className="three-col">
            {[
              ['1', 'Review your hair loss pattern + donor supply'],
              ['2', isArtas ? 'Confirm best approach (ARTAS/manual/hybrid)' : 'Confirm the treatment method, alone or hybrid, for your needs'],
              ['3', 'Leave with a realistic plan + timeline (no commitment)'],
            ].map(([n, t]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: '50%', background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800 }}>{n}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: HEADING, margin: 0, lineHeight: 1.45 }}>{t}</h3>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 14, color: '#6a7282', fontWeight: 600, margin: '32px 0 0' }}>
            Consult: ~30 minutes • Plan delivered same day
          </p>
        </div>
      </section>

      {/* Hair Restoration Is a Medical Decision */}
      <section ref={decisionReveal.ref} className={decisionReveal.className} style={{ background: BLUE, padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#fff', margin: '0 0 24px' }}>
            Hair Restoration Is a Medical Decision
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', fontWeight: 600, margin: '0 0 16px' }}>Results depend on:</p>
          <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 10, textAlign: 'left', marginBottom: 28 }}>
            {['Proper diagnosis', 'Long-term planning', 'Ethical candidacy screening', 'Not everyone is an ideal candidate', 'Consultation exists to protect the patient first'].map(it => (
              <div key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Check /><span style={{ fontSize: 15, color: 'rgba(255,255,255,0.92)', lineHeight: 1.5 }}>{it}</span>
              </div>
            ))}
          </div>
          <div>
            <a href="#final-form" style={{ display: 'inline-block', background: '#fff', color: BLUE, padding: '15px 32px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}>
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Contact + planning */}
      <section ref={contactReveal.ref} className={contactReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1050, margin: '0 auto', gap: 48, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: HEADING, margin: '0 0 20px', lineHeight: 1.25 }}>
              Hair loss changes over time&mdash;planning earlier preserves options.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
              {['Donor supply is finite', 'Earlier planning can improve natural coverage strategy', 'A consult clarifies what’s realistic now'].map(it => (
                <div key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Check /><span style={{ fontSize: 15, color: BODY, lineHeight: 1.5 }}>{it}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={PHONE_HREF} style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>{PHONE}</a>
              <a href="mailto:visit@phillyhairmd.com" style={{ color: HEADING, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>visit@phillyhairmd.com</a>
              <span style={{ color: BODY, fontSize: 15 }}>1608 Walnut St, Suite 1701 Philadelphia, 19103</span>
            </div>
          </div>
          <div id="final-form" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '24px' }}>
            <p style={{ fontSize: 15, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>Schedule your Consultation</p>
            <p style={{ fontSize: 13, color: BODY, margin: '0 0 12px' }}>Confidential &bull; No Obligation &bull; Personalized</p>
            <GhlForm formId={bottomFormId} height={440} formName="Footer Form -Meta Retargeting" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={finalReveal.ref} className={finalReveal.className} style={{ background: NAVY, padding: '56px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 700, color: '#fff', margin: '0 0 20px' }}>
            Schedule your Consultation
          </h2>
          <a href="#final-form" style={{ display: 'inline-block', background: '#fff', color: BLUE, padding: '15px 32px', borderRadius: 40, fontSize: 14, fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em', marginBottom: 16 }}>
            See If I&rsquo;m a Candidate
          </a>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', margin: 0 }}>Confidential &bull; No Obligation &bull; Personalized</p>
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
