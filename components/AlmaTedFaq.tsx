'use client'
import { useState } from 'react'

const HEADING = '#0a0a0a'
const BODY = '#364153'

const faqs = [
  { q: 'Is Alma TED surgery?', a: 'No. Alma TED is completely non-surgical.' },
  { q: 'Does it involve injections?', a: 'No. Alma TED® does not involve injections or needles.' },
  { q: 'When will I see results?', a: 'Hair tends to grow only about 1 inch per month so it may take 3-6 months from the first treatment for noticeable results.' },
  { q: 'Is it for men and women?', a: 'Yes, both men and women can undergo Alma TED® treatment, assuming the individual is a good candidate for it.' },
  { q: 'How long does a treatment take?', a: 'An Alma TED® treatment session is fairly fast, about 20-30 minutes, because it doesn’t require any special preparation time. So it’s easy to fit into most schedules.' },
  { q: 'Is there any downtime?', a: 'Alma TED® treatments do not require any downtime, though we do ask that you avoid showering for 4 hours after treatment.' },
]

export default function AlmaTedFaq() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {faqs.map((item, i) => (
        <div key={i} style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              padding: '20px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              textAlign: 'left',
              gap: 16,
            }}
          >
            <span style={{ color: HEADING, fontSize: '1.05rem', fontWeight: 500, fontFamily: 'Poppins, sans-serif', lineHeight: 1.4 }}>
              {item.q}
            </span>
            <span style={{ color: HEADING, fontSize: '1.4rem', fontWeight: 300, flexShrink: 0, lineHeight: 1, minWidth: 20, textAlign: 'center' }}>
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <div style={{ padding: '0 24px 20px', color: BODY, lineHeight: 1.75, fontSize: '0.95rem' }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
