import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowLeft, Check, ChevronDown } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-spotify-black flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-spotify-subdued mb-8">The service you are looking for does not exist.</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = services.findIndex(s => s.slug === service.slug);
  const nextService = services[(currentIndex + 1) % services.length];
  const Icon = service.icon;

  return (
    <div className="bg-spotify-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${service.accent}15 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${service.accent}08 0%, transparent 40%)`,
            }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-spotify-green/4 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-spotify-subdued hover:text-spotify-green transition-colors text-sm mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            All Services
          </Link>

          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-spotify-green/10">
            <Icon size={30} className="text-spotify-green" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            {service.heroHeadline}
          </h1>
          <p className="text-spotify-subdued text-lg sm:text-xl max-w-2xl leading-relaxed">
            {service.heroSubtext}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-spotify-dark-elevated">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-3">Overview</p>
          <p className="text-white/80 text-lg leading-relaxed">{service.overview}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">What's Included</p>
            <h2 className="section-title">
              Everything You <span className="gradient-text">Get</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-spotify-dark-elevated">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="section-title">
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step, i) => (
              <ProcessCard key={step.step} step={step} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + FAQ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Deliverables */}
            <div>
              <p className="section-label mb-3">Deliverables</p>
              <h2 className="section-title mb-8">
                What You <span className="gradient-text">Receive</span>
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-spotify-green/15 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-spotify-green" />
                    </div>
                    <span className="text-white/80 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <p className="section-label mb-3">FAQ</p>
              <h2 className="section-title mb-8">
                Common <span className="gradient-text">Questions</span>
              </h2>
              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-spotify-dark-elevated">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Get <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-spotify-subdued text-lg mb-8 max-w-xl mx-auto">
            Let's talk about how {service.title.toLowerCase()} can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/#contact" className="btn-primary text-base px-8 py-4">
              Start Your Project
            </Link>
            <Link to="/#services" className="btn-outline text-base px-8 py-4">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>

      {/* Next Service */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to={`/services/${nextService.slug}`}
            className="flex items-center justify-between glass-card rounded-2xl p-6 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-spotify-green/10 flex items-center justify-center">
                <nextService.icon size={22} className="text-spotify-green" />
              </div>
              <div>
                <p className="text-spotify-subdued text-xs font-semibold uppercase tracking-wider mb-1">
                  Next Service
                </p>
                <h3 className="text-white font-bold text-lg group-hover:text-spotify-green transition-colors">
                  {nextService.title}
                </h3>
              </div>
            </div>
            <ArrowRight size={24} className="text-white/30 group-hover:text-spotify-green group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  feature,
  delay,
}: {
  feature: { title: string; description: string };
  delay: number;
}) {
  const { ref } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll glass-card rounded-2xl p-6"
      style={{ transitionDelay: `${delay}s` }}
    >
      <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
      <p className="text-spotify-subdued text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}

function ProcessCard({
  step,
  delay,
}: {
  step: { step: string; title: string; description: string };
  delay: number;
}) {
  const { ref } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className="animate-on-scroll glass-card rounded-2xl p-6"
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="text-spotify-green text-3xl font-black mb-3 block">{step.step}</span>
      <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
      <p className="text-spotify-subdued text-sm leading-relaxed">{step.description}</p>
    </div>
  );
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-white font-semibold text-sm">{faq.question}</span>
        <ChevronDown
          size={18}
          className={`text-spotify-green flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-5 pb-5 text-spotify-subdued text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
}
