'use client'
import { useState, Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import AlmaTedFaq from '@/components/AlmaTedFaq'
import { useReveal } from '@/lib/useReveal'

const PHONE = '(267) 361-0516'
const PHONE_HREF = 'tel:+12673610516'
const BLUE = '#003cb5'
const NAVY = '#15274f'
const HEADING = '#0a0a0a'
const BODY = '#364153'
const GOLD = '#fdc700'
const LIGHT_BTN_BG = '#e8f1fa'

interface Props {
  heroFormId: string
  bottomFormId: string
}

function AlmaReview({ name, text }: { name: string; text: string }) {
  const [open, setOpen] = useState(false)
  const LIMIT = 200
  const short = text.length > LIMIT ? text.slice(0, LIMIT).replace(/\s+\S*$/, '') + '...' : text
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ color: GOLD, fontSize: 17, letterSpacing: 2 }}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span style={{ fontWeight: 700, fontSize: 14, color: HEADING }}>{name}</span>
      </div>
      <p style={{ fontSize: 15, color: BODY, lineHeight: 1.7, margin: '0 0 12px' }}>
        {open ? text : short}
      </p>
      {text.length > LIMIT && (
        <button
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', padding: 0, color: HEADING, fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}
        >
          {open ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  )
}

export default function AlmaTedMetaLP({ heroFormId, bottomFormId }: Props) {
  const heroReveal = useReveal<HTMLElement>()
  const problemReveal = useReveal<HTMLElement>()
  const almaTedReveal = useReveal<HTMLElement>()
  const howItWorksReveal = useReveal<HTMLElement>()
  const resultsReveal = useReveal<HTMLElement>()
  const whoIsForReveal = useReveal<HTMLElement>()
  const whyUsReveal = useReveal<HTMLElement>()
  const reviewsReveal = useReveal<HTMLElement>()
  const doctorReveal = useReveal<HTMLElement>()
  const faqReveal = useReveal<HTMLElement>()
  const finalCtaReveal = useReveal<HTMLElement>()

  return (
    <>
      <Suspense fallback={null}><GclidCapture /></Suspense>

      {/* Nav */}
      <nav style={{ background: '#000', padding: '14px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <a href="/" style={{ display: 'block', flexShrink: 0 }}>
            <img
              src="https://start.phillyhairmd.com/wp-content/uploads/2025/12/Vector.png"
              alt="Precision Hair Restoration"
              style={{ height: 34, width: 'auto' }}
            />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#hero-form"
              style={{
                background: LIGHT_BTN_BG,
                color: '#000',
                padding: '10px 20px',
                borderRadius: 40,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Book Your Consultation
            </a>
            <a href={PHONE_HREF} style={{ color: '#fff', fontSize: 15, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              {PHONE}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroReveal.ref} className={heroReveal.className} style={{ background: '#fff', padding: '56px 24px 48px' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', alignItems: 'start', gap: 48 }}>
          <div>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: HEADING, lineHeight: 1.2, margin: '0 0 16px' }}>
              Non-Surgical Hair Restoration for Men &amp; Women
            </h1>
            <p style={{ fontSize: 16, color: BODY, margin: '0 0 28px', lineHeight: 1.65 }}>
              Visible hair regrowth without surgery, injections, or downtime, using Alma TED&reg; advanced ultrasound technology.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, marginBottom: 28 }}>
              <a
                href="#hero-form"
                style={{
                  background: BLUE, color: '#fff',
                  padding: '14px 26px', borderRadius: 40,
                  fontSize: 13, fontWeight: 700,
                  textDecoration: 'none', whiteSpace: 'nowrap',
                }}
              >
                Book a Consultation
              </a>
              <a
                href={PHONE_HREF}
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: HEADING, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6495 14.5551 13.8197C14.4808 13.9899 14.3718 14.1428 14.2352 14.2686C14.0986 14.3944 13.9373 14.4903 13.7616 14.5502C13.5859 14.6101 13.3997 14.6327 13.2147 14.6167C11.1636 14.3934 9.19352 13.6899 7.46668 12.5633C5.86054 11.5354 4.49459 10.1695 3.46668 8.56334C2.33608 6.82805 1.63239 4.84869 1.41335 2.78667C1.39735 2.60301 1.4197 2.41839 1.47902 2.24354C1.53834 2.06869 1.63328 1.90783 1.75798 1.77125C1.88267 1.63467 2.03448 1.52544 2.20382 1.45047C2.37317 1.3755 2.55636 1.33646 2.74168 1.336H4.74168C5.06525 1.33285 5.37884 1.44923 5.6238 1.66294C5.86877 1.87665 6.02859 1.17205 6.07335 1.49334C6.15721 2.13039 6.31282 2.75585 6.53668 3.35734C6.62575 3.59667 6.64663 3.85607 6.59693 4.10668C6.54723 4.35729 6.42897 4.58911 6.25601 4.77534L5.40668 5.62467C6.36026 7.30431 7.7357 8.67976 9.41535 9.63334L10.2647 8.78401C10.4509 8.61105 10.6827 8.49279 10.9333 8.44309C11.1839 8.39338 11.4434 8.41426 11.6827 8.50333C12.2842 8.72719 12.9096 8.8828 13.5467 8.96667C13.8714 9.01186 14.1687 9.17462 14.383 9.42391C14.5972 9.6732 14.7136 9.99226 14.7107 10.32L14.6667 11.28Z" fill={BLUE} />
                </svg>
                Or call {PHONE}
              </a>
            </div>

            {/* Trust badges */}
            <div className="trust-grid" style={{ marginBottom: 32 }}>
              {['Non-surgical', 'In-office treatment', 'Men & women', 'Medical professionals'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <path d="M27 6L12 21L5 14" stroke={BLUE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: 14, color: BODY }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card + before/after */}
          <div>
            <div id="hero-form" style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '24px', marginBottom: 20 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: HEADING, margin: '0 0 8px' }}>Request a call back</p>
              <GhlForm formId={heroFormId} height={400} formName="Banner Form - Alma Meta" />
            </div>
            <img
              src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Container.png"
              alt="Before and after Alma TED treatment"
              style={{ width: '100%', borderRadius: 16, display: 'block', marginBottom: 8 }}
            />
            <p style={{ textAlign: 'center', fontSize: 12, color: '#99a1af', margin: 0 }}>Individual results vary</p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section ref={problemReveal.ref} className={problemReveal.className} style={{ background: '#fff', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: HEADING, margin: '0 0 24px', lineHeight: 1.25 }}>
            Tired of Watching Your Hair Thin?
          </h2>
          <p style={{ fontSize: 15, color: BODY, margin: '0 0 16px', lineHeight: 1.75 }}>
            Hair loss affects both men and women, and it can impact confidence, appearance, and how you feel every day.
          </p>
          <p style={{ fontSize: 15, color: BODY, margin: '0 0 16px', lineHeight: 1.75 }}>
            Many people delay treatment because they don&apos;t want surgery, injections, or long recovery times.
          </p>
          <p style={{ fontSize: 16, color: HEADING, fontWeight: 600, margin: 0, lineHeight: 1.75 }}>
            Now there&apos;s a non-surgical option designed to stimulate hair regrowth naturally.
          </p>
        </div>
      </section>

      {/* What Is Alma TED */}
      <section ref={almaTedReveal.ref} className={almaTedReveal.className} style={{ background: '#000', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1100, margin: '0 auto', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>
              What Is Alma TED&reg; Hair Restoration?
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', margin: '0 0 24px', lineHeight: 1.7 }}>
              Alma TED&reg; (TransEpidermal Delivery) is an advanced, non-invasive hair restoration treatment that uses ultrasound energy and air pressure to deliver a growth-supporting serum deep into the scalp.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
              {['Needle-free', 'Non-surgical', 'Comfortable', 'No downtime'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{
                    flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 24, height: 24, background: GOLD, borderRadius: '50%',
                  }}>
                    <svg width="11" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 1L5 9L1 5" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 15, color: '#fff' }}>{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#hero-form"
              style={{
                display: 'inline-block',
                background: BLUE, color: '#fff',
                padding: '14px 26px', borderRadius: 40,
                fontSize: 13, fontWeight: 700,
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}
            >
              Book a Consultation
            </a>
          </div>
          <div>
            <img
              src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Image-Alma-TED-device.png"
              alt="Alma TED device"
              style={{ width: '100%', borderRadius: 16, display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howItWorksReveal.ref} className={howItWorksReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            How It Works
          </h2>
          <div className="three-col" style={{ marginBottom: 24 }}>
            {[
              { title: 'Ultrasound Energy', desc: 'Creates temporary micro-channels in the scalp' },
              { title: 'Air Pressure Delivery', desc: 'Delivers the hair growth serum' },
              { title: 'Follicle Stimulation', desc: 'Stimulates thicker, healthier hair growth' },
            ].map(({ title, desc }, i) => (
              <div key={title} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 80, height: 80, margin: '0 auto 16px', borderRadius: '50%',
                  background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, fontWeight: 800, color: '#fff',
                }}>
                  {i + 1}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: HEADING, margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#6a7282', fontStyle: 'italic', margin: 0 }}>
            Results vary by individual and hair loss condition.
          </p>
        </div>
      </section>

      {/* Real Patient Results */}
      <section ref={resultsReveal.ref} className={resultsReveal.className} style={{ background: '#eee', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            Real Patient Results
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 20 }}>
            <img src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Container-1.png" alt="Patient before and after Alma TED treatment" style={{ width: '100%', borderRadius: 12, display: 'block' }} />
            <img src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Container-2.png" alt="Patient before and after Alma TED treatment" style={{ width: '100%', borderRadius: 12, display: 'block' }} />
          </div>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#99a1af', margin: 0 }}>
            Individual results vary. Images represent real patients and are not a guarantee of outcome.
          </p>
        </div>
      </section>

      {/* Who Is a Good Candidate */}
      <section ref={whoIsForReveal.ref} className={whoIsForReveal.className} style={{ background: '#fff', padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: HEADING, margin: '0 0 28px' }}>
            Who Is a Good Candidate?
          </h2>
          <div style={{ textAlign: 'left', display: 'inline-block', marginBottom: 28, maxWidth: 540 }}>
            {[
              'Men or women with thinning hair or hair loss',
              'Individuals seeking non-surgical hair restoration',
              'Those not ready for hair transplant surgery',
              'Patients looking for visible improvement without downtime',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{
                  flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 24, height: 24, background: GOLD, borderRadius: '50%',
                }}>
                  <svg width="11" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L5 9L1 5" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span style={{ fontSize: 15, color: HEADING, lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#99a1af', margin: 0 }}>
            A consultation is required to determine candidacy.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyUsReveal.ref} className={whyUsReveal.className} style={{ background: '#eee', paddingBottom: 64 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            Why Choose Us
          </h2>
          <div className="three-col" style={{ marginBottom: 48 }}>
            {[
              { title: 'Medical Expertise', desc: 'All treatments are performed in-office under medical supervision.' },
              { title: 'Advanced Technology', desc: 'We offer Alma TED®, an FDA-cleared device used worldwide.' },
              { title: 'Personalized Care', desc: 'Every treatment plan begins with a one-on-one consultation.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 64, height: 64, margin: '0 auto 16px', borderRadius: '50%',
                  background: NAVY, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 29C22.6274 29 28 23.6274 28 17C28 10.3726 22.6274 5 16 5C9.37258 5 4 10.3726 4 17C4 23.6274 9.37258 29 16 29Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 11V17L20 19" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: HEADING, margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
          <img
            src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Image-Modern-medical-clinic.png"
            alt="Precision Hair Restoration modern medical clinic"
            style={{ width: '100%', borderRadius: 16, display: 'block', maxHeight: 420, objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Reviews */}
      <section ref={reviewsReveal.ref} className={reviewsReveal.className} style={{ background: '#eee', padding: '64px 24px' }}>
        <div className="reviews-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AlmaReview
            name="Sandra P."
            text="I visited Precision Hair Restoration in October 2024 after dealing with traction alopecia for about two years and trying several non-invasive options. I scheduled a consultation with Dr. Raffi to better understand what care options might be appropriate for me. From the beginning, Dr. Raffi took the time to listen to my concerns and explain the process in a way that made me feel comfortable and respected. I appreciated how thoughtful the care team was, especially their experience working with textured hair, which helped put me at ease. Over time, I began noticing positive changes that felt very natural. Friends and family commented on how good it looked, which meant a lot to me. Dr. Raffi and Michele made the entire experience feel supportive and professional, and I'm very grateful for their care."
          />
          <AlmaReview
            name="Neil Shives"
            text="After an accident in 2021, I experienced an area where hair no longer grew the same way. I contacted Precision Hair Restoration and scheduled a complimentary consultation to see what options might be available. Michele was welcoming and helpful from the start, and Dr. Raffi Barsoumian took the time to carefully evaluate my situation and explain what to expect. I appreciated how clearly everything was communicated and how supported I felt throughout the process. The follow-up care and communication were excellent, and over time I noticed meaningful improvements that made a real difference for me. The entire team was professional, responsive, and easy to work with. I'm thankful for the care I received and would recommend them to anyone seeking guidance for hair loss concerns."
          />
          <AlmaReview
            name="David P."
            text="I chose Precision Hair Restoration after doing my research and meeting with Dr. Raffi Barsoumian for a consultation. I was initially nervous, but the team was professional, organized, and reassuring from the very beginning. Dr. Barsoumian and his staff explained everything clearly and made the experience far more comfortable than I expected. The care and attention throughout the process gave me confidence, and recovery felt manageable. Overall, it was a positive experience, and I appreciated the professionalism and support provided by the entire team."
          />
        </div>
      </section>

      {/* Doctor Bio */}
      <section ref={doctorReveal.ref} className={doctorReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1100, margin: '0 auto', gap: 56, alignItems: 'start' }}>
          <div>
            <img
              src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Rectangle-43-1.png"
              alt="Dr. Raffi Barsoumian"
              style={{ width: '100%', borderRadius: 16, display: 'block' }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 800, color: HEADING, margin: '0 0 4px' }}>
              Dr. Raffi Barsoumian
            </h2>
            <p style={{ fontSize: 15, fontWeight: 600, color: BLUE, margin: '0 0 20px' }}>
              Double Fellowship Trained Surgeon Specializing in Hair Restoration
            </p>
            <p style={{ fontSize: 16, color: BODY, margin: '0 0 12px', lineHeight: 1.75 }}>
              Dr. Raffi Barsoumian completed advanced fellowship training at Nassau University Medical Center and North Shore-Long Island Jewish Health System. He brings extensive clinical experience and a detail-oriented approach to the evaluation and management of hair loss conditions.
            </p>
            <p style={{ fontSize: 16, color: BODY, margin: '0 0 12px', lineHeight: 1.75 }}>
              Dr. Barsoumian provides comprehensive consultations for men and women experiencing alopecia and other forms of hair thinning. He develops personalized, non-surgical treatment plans based on each patient&apos;s pattern, history, and stage of hair loss. His focus is on education, transparency, and helping patients understand their options for managing hair loss.
            </p>
            <p style={{ fontSize: 16, color: BODY, margin: 0, lineHeight: 1.75 }}>
              He is an active member of professional organizations dedicated to advancing hair restoration medicine and remains committed to maintaining high standards of patient care and clinical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqReveal.ref} className={faqReveal.className} style={{ background: '#eee', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            Frequently Asked Questions
          </h2>
          <AlmaTedFaq />
        </div>
      </section>

      {/* Final CTA + Bottom Form */}
      <section ref={finalCtaReveal.ref} className={finalCtaReveal.className} style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto 40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: HEADING, margin: '0 0 16px' }}>
            Ready to Restore Your Hair Without Surgery?
          </h2>
          <p style={{ fontSize: 15, color: BODY, margin: '0 0 24px', lineHeight: 1.65 }}>
            Schedule your consultation today and take the first step toward thicker, healthier hair.
          </p>
          <a
            href={PHONE_HREF}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              color: BLUE,
              fontSize: 16, fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Call {PHONE}
          </a>
          <p style={{ color: '#6a7282', fontSize: 13, margin: '20px 0 0' }}>or fill out the form below</p>
        </div>
        <div style={{ maxWidth: 640, margin: '0 auto', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '28px 24px' }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: HEADING, margin: '0 0 16px' }}>
            Request a Consultation
          </h3>
          <GhlForm formId={bottomFormId} height={400} formName="Footer Form - Alma Meta" />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#000', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          <div style={{ background: '#1e1e1e', borderRadius: 10, padding: 24, textAlign: 'center', maxWidth: 960 }}>
            <p style={{ fontSize: 15, color: '#d1d5dc', lineHeight: 1.65, margin: '0 0 8px' }}>
              Results vary by individual. No medical treatment guarantees results. Alma TED&reg; is a non-surgical option and may not be suitable for everyone. Consultation required.
            </p>
            <p style={{ fontSize: 15, color: '#d1d5dc', lineHeight: 1.65, margin: 0 }}>
              Images shown are real patients. This page is for informational purposes only.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 14, color: '#99a1af', margin: '0 0 4px' }}>
              &copy; 2026 Precision Hair Restoration
            </p>
            <p style={{ fontSize: 14, margin: 0 }}>
              <span style={{ color: '#99a1af' }}>Licensed Medical Practice</span>
              {' | '}
              <a href="/privacy-policy" style={{ color: '#99a1af', textDecoration: 'none' }}>Privacy Policy</a>
              {' | '}
              <a href="/cookie-policy" style={{ color: '#99a1af', textDecoration: 'none' }}>Cookie Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
