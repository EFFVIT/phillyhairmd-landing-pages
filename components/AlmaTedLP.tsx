'use client'
import { useState, Suspense } from 'react'
import GhlForm from '@/components/GhlForm'
import GclidCapture from '@/components/GclidCapture'
import { useReveal } from '@/lib/useReveal'

const PHONE = '(267) 214-5624'
const PHONE_HREF = 'tel:+12672145624'
const BLUE = '#003cb5'
const NAVY = '#15274f'
const HEADING = '#101828'
const BODY = '#475467'
const CHARCOAL = '#2e2f2a'
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

export default function AlmaTedLP({ heroFormId, bottomFormId }: Props) {
  const heroReveal = useReveal<HTMLElement>()
  const problemReveal = useReveal<HTMLElement>()
  const whatIsReveal = useReveal<HTMLElement>()
  const expectReveal = useReveal<HTMLElement>()
  const rightForYouReveal = useReveal<HTMLElement>()
  const careLedReveal = useReveal<HTMLElement>()
  const doctorReveal = useReveal<HTMLElement>()
  const reviewsReveal = useReveal<HTMLElement>()
  const bottomFormReveal = useReveal<HTMLElement>()

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
          {/* Left: heading, CTAs, trust badges, form */}
          <div>
            <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: HEADING, lineHeight: 1.2, margin: '0 0 16px' }}>
              Non-Invasive Hair Loss Support with Alma TED&reg;
            </h1>
            <p style={{ fontSize: 16, color: BODY, margin: '0 0 28px', lineHeight: 1.65 }}>
              A needle-free, in-office option designed to support scalp health for adults experiencing hair thinning or hair loss.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
              <a
                href="#hero-form"
                style={{
                  background: BLUE, color: '#fff',
                  padding: '14px 26px', borderRadius: 40,
                  fontSize: 13, fontWeight: 700,
                  textDecoration: 'none', whiteSpace: 'nowrap',
                }}
              >
                Book an In-Office Consultation
              </a>
              <a
                href={PHONE_HREF}
                style={{
                  border: `2px solid ${CHARCOAL}`, color: CHARCOAL,
                  padding: '14px 22px', borderRadius: 40,
                  fontSize: 13, fontWeight: 600,
                  textDecoration: 'none', whiteSpace: 'nowrap',
                }}
              >
                Or Call {PHONE}
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: BODY }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 18 22" fill="none">
                  <path d="M16.815 11.8136C16.815 16.8128 13.315 19.3124 9.155 20.7621C8.93717 20.8359 8.70054 20.8324 8.485 20.7521C4.315 19.3124 0.815002 16.8128 0.815002 11.8136V4.81478C0.815002 4.54961 0.920359 4.2953 1.1079 4.10779C1.29543 3.92029 1.54979 3.81495 1.815 3.81495C3.815 3.81495 6.315 2.61515 8.055 1.0954C8.26686 0.914434 8.53636 0.815002 8.815 0.815002C9.09365 0.815002 9.36315 0.914434 9.575 1.0954C11.325 2.62515 13.815 3.81495 15.815 3.81495C16.0802 3.81495 16.3346 3.92029 16.5221 4.10779C16.7096 4.2953 16.815 4.54961 16.815 4.81478V11.8136Z" stroke="#2563EB" strokeWidth="1.63" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Licensed medical providers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: BODY }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 23 32" fill="none" opacity="0.7">
                  <path d="M10.8334 10.8563V14.5771" stroke="#2563EB" strokeWidth="1.16276" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.7501 18.298H8.91672" stroke="#2563EB" strokeWidth="1.16276" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.7501 22.0187H8.91672" stroke="#2563EB" strokeWidth="1.16276" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.7501 12.7167H8.91672" stroke="#2563EB" strokeWidth="1.16276" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5833 16.4375H18.5C19.0083 16.4375 19.4958 16.6335 19.8553 16.9824C20.2147 17.3313 20.4167 17.8045 20.4167 18.2979V23.8791C20.4167 24.3726 20.2147 24.8458 19.8553 25.1947C19.4958 25.5436 19.0083 25.7396 18.5 25.7396H3.16667C2.65834 25.7396 2.17082 25.5436 1.81138 25.1947C1.45193 24.8458 1.25 24.3726 1.25 23.8791V15.5073C1.25 15.0139 1.45193 14.5407 1.81138 14.1918C2.17082 13.8429 2.65834 13.6469 3.16667 13.6469H5.08333" stroke="#2563EB" strokeWidth="1.16276" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5834 25.7396V8.99585C16.5834 8.50244 16.3814 8.02924 16.022 7.68034C15.6626 7.33144 15.175 7.13544 14.6667 7.13544H7.00004C6.49171 7.13544 6.0042 7.33144 5.64475 7.68034C5.28531 8.02924 5.08337 8.50244 5.08337 8.99585V25.7396" stroke="#2563EB" strokeWidth="1.16276" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>In-office care</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: BODY }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 15 20" fill="none" opacity="0.7">
                  <path d="M12.5 7L5.625 13.8L2.5 10.7" stroke="#2563EB" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>No surgery &bull; No injections</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: BODY }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" viewBox="0 0 19 30" fill="none" opacity="0.7">
                  <path d="M14.3858 10.0401C14.3858 14.0064 10.0007 18.1371 8.52824 19.4129C8.39106 19.5164 8.22408 19.5724 8.05245 19.5724C7.88082 19.5724 7.71383 19.5164 7.57666 19.4129C6.10416 18.1371 1.71912 14.0064 1.71912 10.0401C1.71912 8.3547 2.38638 6.7383 3.57411 5.5465C4.76184 4.3547 6.37274 3.6852 8.05245 3.6852C9.73215 3.6852 11.3431 4.3547 12.5308 5.5465C13.7185 6.7383 14.3858 8.3547 14.3858 10.0401Z" stroke="#2563EB" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.05243 12.4233C9.36411 12.4233 10.4274 11.3564 10.4274 10.0402C10.4274 8.7241 9.36411 7.6571 8.05243 7.6571C6.74075 7.6571 5.67743 8.7241 5.67743 10.0402C5.67743 11.3564 6.74075 12.4233 8.05243 12.4233Z" stroke="#2563EB" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Serving Greater Philadelphia</span>
              </div>
            </div>

            {/* Hero form */}
            <div id="hero-form">
              <p style={{ fontSize: 13, fontWeight: 600, color: HEADING, margin: '0 0 8px' }}>Request a call back</p>
              <GhlForm formId={heroFormId} height={400} formName="Banner Form - Alma Google" />
            </div>
          </div>

          {/* Right: device image */}
          <div style={{ paddingTop: 12 }}>
            <img
              src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Image-Modern-medical-clinic-interior.png"
              alt="Alma TED device in clinical setting"
              style={{ width: '100%', borderRadius: 16, display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section ref={problemReveal.ref} className={problemReveal.className} style={{ background: BLUE, padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#fff', margin: '0 0 24px', lineHeight: 1.25 }}>
            Concerned About Hair Thinning, But Not Ready for Surgery or Injections?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', margin: '0 0 16px', lineHeight: 1.75 }}>
            Hair thinning and hair loss can feel frustrating and overwhelming. Many people delay taking action because they don&apos;t want invasive procedures, needles, or extended downtime, yet still want to speak with a medical professional about their options.
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.9)', margin: 0, lineHeight: 1.75 }}>
            If you&apos;re looking for a non-invasive, in-office approach focused on scalp and hair health, appropriate options may be discussed during a consultation.
          </p>
        </div>
      </section>

      {/* What Is Alma TED */}
      <section ref={whatIsReveal.ref} className={whatIsReveal.className} style={{ background: '#eeeeee', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1100, margin: '0 auto', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, margin: '0 0 16px' }}>
              What Is Alma TED&reg;?
            </h2>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 12px', lineHeight: 1.7 }}>
              Alma TED&reg; (TransEpidermal Delivery) is a non-invasive technology designed to assist with the topical application of a scalp-supporting serum.
            </p>
            <p style={{ fontSize: 15, color: BODY, margin: '0 0 24px', lineHeight: 1.7 }}>
              The treatment is performed in-office by trained providers and does not involve needles, injections, or surgical procedures.
            </p>
            <div style={{ background: '#f9f9f9', border: '2px solid #dfdfdf', borderRadius: 10, padding: '16px 20px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                <path d="M10 18.3333C14.6024 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6024 1.66663 10 1.66663C5.39763 1.66663 1.66667 5.39759 1.66667 9.99996C1.66667 14.6023 5.39763 18.3333 10 18.3333Z" stroke="#2563EB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 13.3333V10" stroke="#2563EB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 6.66663H10.0083" stroke="#2563EB" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p style={{ margin: 0, fontSize: 14, color: HEADING, lineHeight: 1.6 }}>
                A consultation with a licensed medical professional is required to determine whether this option is appropriate for you.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Image-Medical-device-technology.png"
              alt="Alma TED medical device"
              style={{ width: '100%', borderRadius: 16, display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section ref={expectReveal.ref} className={expectReveal.className} style={{ background: '#fff', paddingBottom: 64 }}>
        <img
          src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Image-Professional-medical-consultation.png"
          alt="Doctor consulting with patient"
          style={{ width: '100%', display: 'block', maxHeight: 320, objectFit: 'cover' }}
        />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            What to Expect During Your Visit
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            {([
              { num: '1', title: 'Private, one-on-one consultation', desc: 'Discuss your concerns with a licensed medical professional in a comfortable setting.' },
              { num: '2', title: 'Scalp evaluation and discussion of concerns', desc: 'Your provider will assess your scalp health and discuss appropriate options.' },
              { num: '3', title: 'In-office Alma TED® session using non-invasive technology', desc: 'If appropriate, experience the needle-free treatment during your visit.' },
              { num: '4', title: 'Most patients are able to return to normal activities shortly after their visit', desc: 'Resume your day shortly after your visit.' },
            ] as const).map(({ num, title, desc }) => (
              <div key={num} style={{ background: '#F9FAFB', borderRadius: 12, padding: '22px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  flexShrink: 0, width: 42, height: 42,
                  background: '#F6F8FB', border: '1px solid #E5E7EB', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 800, color: '#475467', fontFamily: 'Lato, sans-serif',
                }}>
                  {num}
                </div>
                <div>
                  <h3 style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 700, color: HEADING }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: BODY, lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: 16, color: HEADING, fontWeight: 600, margin: 0 }}>
            No surgery. No injections. Minimal disruption to daily activities.
          </p>
        </div>
      </section>

      {/* Is This Option Right for You */}
      <section ref={rightForYouReveal.ref} className={rightForYouReveal.className} style={{ background: BLUE, padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#fff', margin: '0 0 12px' }}>
            Is This Option Right for You?
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', margin: '0 0 28px' }}>
            Alma TED&reg; may be suitable for:
          </p>
          <div style={{ textAlign: 'left', display: 'inline-block', marginBottom: 32, maxWidth: 540 }}>
            {[
              'Adults experiencing hair thinning or general hair loss',
              'Individuals who prefer in-office care under medical supervision',
              'Those wanting to avoid surgical or injectable procedures',
              'People seeking professional guidance on scalp and hair health',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <span style={{
                  flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 24, height: 24, background: GOLD, borderRadius: '50%',
                }}>
                  <svg width="11" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L5 9L1 5" stroke="#101828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span style={{ fontSize: 15, color: '#fff', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            Suitability is determined during an in-person consultation.
          </p>
        </div>
      </section>

      {/* Care Led */}
      <section ref={careLedReveal.ref} className={careLedReveal.className} style={{ background: '#fff', paddingBottom: 64 }}>
        <img
          src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Image-Healthcare-clinic-interior.png"
          alt="Precision Hair Restoration clinic interior"
          style={{ width: '100%', display: 'block', maxHeight: 320, objectFit: 'cover' }}
        />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px 0' }}>
          <h2 style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 800, color: HEADING, textAlign: 'center', margin: '0 0 40px' }}>
            Care Led by Licensed Medical Professionals
          </h2>
          <div className="three-col">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M0 14C0 6.26801 6.26801 0 14 0H50C57.732 0 64 6.26801 64 14V50C64 57.732 57.732 64 50 64H14C6.26801 64 0 57.732 0 50V14Z" fill="#15274F" fillOpacity="0.082" />
                    <path d="M42.6667 33.3333C42.6667 39.9999 38 43.3333 32.4533 45.2666C32.1629 45.365 31.8474 45.3603 31.56 45.2533C26 43.3333 21.3333 39.9999 21.3333 33.3333V23.9999C21.3333 23.6463 21.4738 23.3072 21.7239 23.0571C21.9739 22.8071 22.3131 22.6666 22.6667 22.6666C25.3333 22.6666 28.6667 21.0666 30.9867 19.0399C31.2691 18.7986 31.6285 18.666 32 18.666C32.3715 18.666 32.7309 18.7986 33.0133 19.0399C35.3467 21.0799 38.6667 22.6666 41.3333 22.6666C41.687 22.6666 42.0261 22.8071 42.2762 23.0571C42.5262 23.3072 42.6667 23.6463 42.6667 23.9999V33.3333Z" stroke="#15274F" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Medical Oversight',
                desc: 'All consultations and services are provided in-office by licensed clinicians.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M0 14C0 6.26801 6.26801 0 14 0H50C57.732 0 64 6.26801 64 14V50C64 57.732 57.732 64 50 64H14C6.26801 64 0 57.732 0 50V14Z" fill="#15274F" fillOpacity="0.082" />
                    <path d="M37.3334 44V41.3333C37.3334 39.9188 36.7715 38.5623 35.7713 37.5621C34.7711 36.5619 33.4145 36 32 36H24C22.5855 36 21.229 36.5619 20.2288 37.5621C19.2286 38.5623 18.6667 39.9188 18.6667 41.3333V44" stroke="#15274F" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 30.6667C30.9455 30.6667 33.3334 28.2789 33.3334 25.3333C33.3334 22.3878 30.9455 20 28 20C25.0545 20 22.6667 22.3878 22.6667 25.3333C22.6667 28.2789 25.0545 30.6667 28 30.6667Z" stroke="#15274F" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.3333 30.6667L40 33.3333L45.3333 28" stroke="#15274F" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Personalized Evaluation',
                desc: 'Each patient is evaluated individually to discuss appropriate options.',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <path d="M0 14C0 6.26801 6.26801 0 14 0H50C57.732 0 64 6.26801 64 14V50C64 57.732 57.732 64 50 64H14C6.26801 64 0 57.732 0 50V14Z" fill="#15274F" fillOpacity="0.082" />
                    <path d="M42.6667 29.3332C42.6667 35.9905 35.2814 42.9238 32.8014 45.0652C32.5703 45.2389 32.2891 45.3328 32 45.3328C31.711 45.3328 31.4297 45.2389 31.1987 45.0652C28.7187 42.9238 21.3334 35.9905 21.3334 29.3332C21.3334 26.5042 22.4572 23.7911 24.4576 21.7907C26.458 19.7903 29.1711 18.6665 32 18.6665C34.829 18.6665 37.5421 19.7903 39.5425 21.7907C41.5429 23.7911 42.6667 26.5042 42.6667 29.3332Z" stroke="#15274F" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M32 33.3335C34.2091 33.3335 36 31.5426 36 29.3335C36 27.1244 34.2091 25.3335 32 25.3335C29.7909 25.3335 28 27.1244 28 29.3335C28 31.5426 29.7909 33.3335 32 33.3335Z" stroke="#15274F" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Local, Trusted Care',
                desc: 'Serving patients in Philadelphia, PA',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: HEADING, margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 15, color: BODY, margin: 0, lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Bio */}
      <section ref={doctorReveal.ref} className={doctorReveal.className} style={{ background: '#fff', padding: '64px 24px', borderTop: '1px solid #E5E7EB' }}>
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

      {/* Reviews */}
      <section ref={reviewsReveal.ref} className={reviewsReveal.className} style={{ background: '#F3F4F6', padding: '64px 24px' }}>
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

      {/* Bottom Form */}
      <section ref={bottomFormReveal.ref} className={bottomFormReveal.className} style={{ background: '#000', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1100, margin: '0 auto', alignItems: 'start', gap: 48 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 800, color: '#fff', margin: '0 0 16px' }}>
              Take the Next Step
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', margin: '0 0 24px', lineHeight: 1.65 }}>
              Schedule an in-office consultation to speak with a licensed provider about non-invasive hair loss support options.
            </p>
            <a
              href={PHONE_HREF}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: LIGHT_BTN_BG, color: '#000',
                padding: '12px 24px', borderRadius: 40,
                fontSize: 16, fontWeight: 600,
                textDecoration: 'none',
                marginBottom: 32,
              }}
            >
              Or Call {PHONE}
            </a>
            <img
              src="https://start.phillyhairmd.com/wp-content/uploads/2026/02/Image-Dr.-Sarah-Mitchell.png"
              alt="Patient at Precision Hair Restoration"
              style={{ width: '100%', borderRadius: 16, display: 'block' }}
            />
          </div>
          <div style={{ background: '#fff', borderRadius: 16, padding: '28px 24px' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: HEADING, margin: '0 0 16px' }}>
              Request a Consultation
            </h3>
            <GhlForm formId={bottomFormId} height={510} formName="Footer Form - Alma Google" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#fff', borderTop: '1px solid #E5E7EB', padding: '40px 24px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="footer-grid" style={{ marginBottom: 28 }}>
            <div>
              <p style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.65, margin: '0 0 8px', maxWidth: 560 }}>
                This service is provided in-office by licensed medical professionals. This non-invasive service is designed to support scalp health and address concerns related to hair thinning. Individual experiences may vary. A consultation is required to determine suitability.
              </p>
              <p style={{ fontSize: 12, color: '#6B7280', lineHeight: 1.65, margin: 0 }}>
                This page is for informational purposes only and does not constitute medical advice.
              </p>
            </div>
            <div style={{ textAlign: 'right', minWidth: 190 }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: HEADING, margin: '0 0 4px' }}>Precision Hair Restoration</p>
              <p style={{ fontSize: 12, color: '#6B7280', margin: '0 0 2px' }}>1608 Walnut St, Suite 1701</p>
              <p style={{ fontSize: 12, color: '#6B7280', margin: '0 0 2px' }}>Philadelphia, PA 19103</p>
              <a href={PHONE_HREF} style={{ fontSize: 12, color: '#6B7280', textDecoration: 'none' }}>{PHONE}</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: 16, textAlign: 'center' }}>
            <p style={{ fontSize: 12, color: '#9CA3AF', margin: '0 0 4px' }}>
              &copy; 2026 Precision Hair Restoration
            </p>
            <p style={{ fontSize: 12, margin: 0 }}>
              <a href="/privacy-policy" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Privacy Policy</a>
              {' | '}
              <a href="/cookie-policy" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Cookie Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
