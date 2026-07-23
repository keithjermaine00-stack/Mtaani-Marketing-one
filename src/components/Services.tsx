import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const { ref } = useScrollAnimation();

  return (
    <section id="services" className="relative py-28 bg-spotify-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spotify-green/30 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-spotify-green/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="section-label mb-3">What We Offer</p>
          <h2 className="section-title mb-4">
            Services Built for{' '}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-spotify-subdued text-lg max-w-2xl mx-auto">
            From strategy to execution, we build digital ecosystems that generate measurable value for Kenyan businesses and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ServiceCard key={service.slug} slug={service.slug} title={service.title} description={service.shortDescription} Icon={Icon} delay={i * 0.06} />
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}

function ServiceCard({
  slug,
  title,
  description,
  Icon,
  delay,
}: {
  slug: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  delay: number;
}) {
  const { ref } = useScrollAnimation();

  return (
    <Link
      to={`/services/${slug}`}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      className="animate-on-scroll glass-card rounded-2xl p-6 group block"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-spotify-green/10 group-hover:bg-spotify-green/20 transition-colors duration-300">
        <Icon size={22} className="text-spotify-green" />
      </div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-spotify-green transition-colors duration-200">
        {title}
      </h3>
      <p className="text-spotify-subdued text-sm leading-relaxed">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-spotify-green text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span>Learn more</span>
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  );
}
