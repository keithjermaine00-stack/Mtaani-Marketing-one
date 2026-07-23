import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lightbulb, Settings2, LineChart, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Ecosystem Thinking',
    description: 'We design every channel to amplify the others — social, SEO, paid, content, and web working as one interconnected system instead of isolated tactics.',
  },
  {
    number: '02',
    icon: Settings2,
    title: 'Built for Kenya',
    description: 'We understand the Kenyan consumer intimately. Our campaigns speak to real people in real contexts — blending global best practices with local cultural nuance.',
  },
  {
    number: '03',
    icon: LineChart,
    title: 'Measurable ROI First',
    description: 'Every strategy is tied to KPIs that matter. We track, report, and optimize relentlessly — because data is the only honest conversation about results.',
  },
  {
    number: '04',
    icon: HeartHandshake,
    title: 'Long-Term Partnership',
    description: "We're not a vendor, we're a partner. We grow with you — learning your business deeply and evolving your digital strategy as your goals change.",
  },
];

export default function WhyUs() {
  const { ref: headerRef } = useScrollAnimation();

  return (
    <section id="why-us" className="relative py-28 bg-spotify-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spotify-green/20 to-transparent" />

      {/* Decorative grid circle */}
      <div
        className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ border: '80px solid #1DB954' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <p className="section-label mb-3">Why Choose Us</p>
          <h2 className="section-title mb-4">
            Why Brands in Kenya{' '}
            <span className="gradient-text">Trust Mtaani</span>
          </h2>
          <p className="text-spotify-subdued text-lg max-w-2xl mx-auto">
            We combine local insight with global standards to deliver strategies that actually move the needle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.number} reason={reason} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  delay,
}: {
  reason: (typeof reasons)[number];
  delay: number;
}) {
  const { ref } = useScrollAnimation();
  const Icon = reason.icon;

  return (
    <div
      ref={ref}
      className="animate-on-scroll glass-card rounded-2xl p-8 flex gap-6 group"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex-shrink-0">
        <div className="relative">
          <span className="text-6xl font-black text-white/4 leading-none select-none absolute -top-2 -left-1">
            {reason.number}
          </span>
          <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center bg-spotify-green/10 group-hover:bg-spotify-green/20 transition-colors duration-300 mt-3">
            <Icon size={24} className="text-spotify-green" />
          </div>
        </div>
      </div>
      <div className="min-w-0">
        <h3 className="text-white font-bold text-xl mb-3 group-hover:text-spotify-green transition-colors duration-200">
          {reason.title}
        </h3>
        <p className="text-spotify-subdued text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>
    </div>
  );
}
