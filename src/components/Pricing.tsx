import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for small businesses',
    price: { monthly: 25000, annual: 20000 },
    currency: 'KSh',
    features: [
      'Social Media Management (2 platforms)',
      'Monthly content calendar',
      '8 branded posts per month',
      'Basic analytics report',
      'WhatsApp Business setup',
      'Email support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    tagline: 'For growing brands',
    price: { monthly: 55000, annual: 45000 },
    currency: 'KSh',
    features: [
      'Social Media Management (4 platforms)',
      'Monthly content calendar + strategy',
      '20 branded posts per month',
      'Paid ad management (up to KSh 50k spend)',
      'SEO audit & optimization',
      'Website landing page',
      'Weekly analytics reports',
      'Dedicated account manager',
    ],
    cta: 'Most Popular',
    featured: true,
  },
  {
    name: 'Ecosystem',
    tagline: 'Full digital ecosystem',
    price: { monthly: 120000, annual: 100000 },
    currency: 'KSh',
    features: [
      'Everything in Growth',
      'Full website development',
      'Unlimited content creation',
      'Paid ads across all channels',
      'Video & motion content',
      'Email marketing automation',
      'Brand identity system',
      'Real-time dashboard access',
      'Priority support & strategy calls',
    ],
    cta: 'Scale Your Business',
    featured: false,
  },
];

function formatPrice(val: number) {
  return val.toLocaleString('en-KE');
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { ref: headerRef } = useScrollAnimation();

  return (
    <section id="pricing" className="relative py-28 bg-spotify-dark-elevated overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-spotify-green/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-12">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="section-title mb-4">
            Transparent Pricing,{' '}
            <span className="gradient-text">Real Value</span>
          </h2>
          <p className="text-spotify-subdued text-lg max-w-2xl mx-auto mb-8">
            Choose the package that fits your growth stage. All plans include onboarding, monthly strategy calls, and transparent reporting.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !annual ? 'bg-spotify-green text-spotify-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                annual ? 'bg-spotify-green text-spotify-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Annual
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${annual ? 'bg-spotify-black/20 text-spotify-black' : 'bg-spotify-green/20 text-spotify-green'}`}>
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} annual={annual} delay={i * 0.1} />
          ))}
        </div>

        <p className="text-center text-spotify-subdued text-sm mt-8">
          All prices in Kenyan Shillings (KSh). Custom enterprise packages available.{' '}
          <a href="#contact" className="text-spotify-green hover:underline">Contact us</a>.
        </p>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  annual,
  delay,
}: {
  plan: (typeof plans)[number];
  annual: boolean;
  delay: number;
}) {
  const { ref } = useScrollAnimation();
  const price = annual ? plan.price.annual : plan.price.monthly;

  return (
    <div
      ref={ref}
      className={`animate-on-scroll relative rounded-2xl flex flex-col overflow-hidden transition-all duration-500 ${
        plan.featured
          ? 'green-glow border border-spotify-green/50 bg-gradient-to-b from-spotify-dark-highlight to-spotify-dark-elevated scale-[1.02]'
          : 'glass-card'
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {plan.featured && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-spotify-green via-spotify-green-light to-spotify-green" />
      )}

      <div className="p-7 flex-1">
        {plan.featured && (
          <div className="inline-flex items-center gap-1.5 bg-spotify-green/15 text-spotify-green text-xs font-bold px-3 py-1 rounded-full mb-4">
            <Zap size={11} />
            Most Popular
          </div>
        )}

        <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
        <p className="text-spotify-subdued text-sm mb-6">{plan.tagline}</p>

        <div className="mb-7">
          <span className="text-spotify-subdued text-sm">{plan.currency} </span>
          <span className="text-4xl font-black text-white">{formatPrice(price)}</span>
          <span className="text-spotify-subdued text-sm"> / mo</span>
          {annual && (
            <p className="text-spotify-green text-xs mt-1 font-medium">
              Billed annually — save KSh {formatPrice((plan.price.monthly - plan.price.annual) * 12)}/yr
            </p>
          )}
        </div>

        <ul className="space-y-3">
          {plan.features.map(f => (
            <li key={f} className="flex items-start gap-3 text-sm text-white/75">
              <Check size={15} className="text-spotify-green flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-7 pt-0">
        <a
          href="#contact"
          className={`block text-center py-3.5 rounded-full font-bold text-sm transition-all duration-200 ${
            plan.featured
              ? 'bg-spotify-green text-spotify-black hover:bg-spotify-green-light hover:shadow-lg hover:shadow-spotify-green/30'
              : 'border border-white/20 text-white hover:border-spotify-green hover:text-spotify-green'
          }`}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  );
}
