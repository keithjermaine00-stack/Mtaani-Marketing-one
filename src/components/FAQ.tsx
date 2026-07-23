import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What exactly is a "digital ecosystem" and why does it matter?',
    a: "A digital ecosystem is when all your online channels — website, social media, SEO, paid ads, email, and content — are designed to work together rather than as separate silos. When they're integrated, each channel amplifies the others, creating compounding growth instead of isolated results.",
  },
  {
    q: 'How long before I start seeing results?',
    a: 'It depends on the channel. Paid advertising can show results within days. SEO typically takes 3–6 months to show significant organic traffic gains. Social media growth and brand awareness build over 2–4 months. We provide transparent monthly reports so you always know exactly where things stand.',
  },
  {
    q: 'Do you work with businesses outside Nairobi?',
    a: "Absolutely. We work with clients across Kenya and the broader East African region. All our reporting, strategy calls, and communication are remote-friendly. If you're based in Mombasa, Kisumu, Nakuru, or anywhere else — we've got you covered.",
  },
  {
    q: 'Can I upgrade or switch plans as my business grows?',
    a: "Yes, always. We encourage it. Your digital strategy should evolve with your business. You can upgrade to a higher tier at any time, and we'll carry forward all the work we've done — no starting from scratch.",
  },
  {
    q: 'What do you need from me to get started?',
    a: "For the first two weeks, you'll spend around 2–3 hours with our team for onboarding — sharing your brand assets, business goals, target audience, and approving the initial strategy. After that, our process is designed to be low-friction on your side while we handle the execution.",
  },
  {
    q: 'How do you measure and report on performance?',
    a: 'We track KPIs specific to each service — reach, impressions, engagement rate, website traffic, conversion rates, cost-per-click, organic keyword rankings, and more. You get a comprehensive monthly report and access to a live dashboard (on Growth and Ecosystem plans) so you can check numbers whenever you want.',
  },
  {
    q: 'Do you offer one-off projects or only retainers?',
    a: "We do both. If you need a one-time brand identity design, website build, or campaign, we can scope that as a project. For ongoing digital marketing, our monthly retainer model is where we deliver the most value — consistency is key in digital marketing.",
  },
];

export default function FAQ() {
  const { ref: headerRef } = useScrollAnimation();

  return (
    <section id="faq" className="relative py-28 bg-spotify-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-14">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="section-title mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-spotify-subdued text-lg max-w-xl mx-auto">
            Everything you need to know about working with Mtaani Marketing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, delay }: { faq: { q: string; a: string }; delay: number }) {
  const [open, setOpen] = useState(false);
  const { ref } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="animate-on-scroll glass-card rounded-2xl overflow-hidden"
      style={{ transitionDelay: `${delay}s` }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
        aria-expanded={open}
      >
        <span className={`text-base font-semibold transition-colors duration-200 ${open ? 'text-spotify-green' : 'text-white group-hover:text-spotify-green'}`}>
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-spotify-subdued transition-transform duration-300 ${open ? 'rotate-180 text-spotify-green' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-6 pb-6 text-spotify-subdued text-sm leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}
