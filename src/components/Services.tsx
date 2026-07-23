import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Globe, Megaphone, Search, ShieldCheck, Pen, Smartphone, BarChart2, Video, Mail, type LucideIcon
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'High-converting, mobile-first websites designed to turn visitors into customers and establish your digital presence.',
    accent: '#1DB954',
  },
  {
    icon: Megaphone,
    title: 'Social Media Marketing',
    description: 'Strategic campaigns across Instagram, TikTok, Twitter, and LinkedIn that build community and drive measurable ROI.',
    accent: '#1DB954',
  },
  {
    icon: Search,
    title: 'SEO & Content Strategy',
    description: 'Data-driven SEO and compelling content that ranks you higher, drives organic traffic, and establishes authority.',
    accent: '#1DB954',
  },
  {
    icon: BarChart2,
    title: 'Paid Advertising (PPC)',
    description: 'Precision-targeted Google and Meta ad campaigns that maximize every shilling of your advertising budget.',
    accent: '#1DB954',
  },
  {
    icon: Pen,
    title: 'Brand Identity & Design',
    description: 'Logos, brand guides, and visual systems that communicate your story and resonate with your target audience.',
    accent: '#1DB954',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Scalable mobile and web applications built on modern stacks — designed for performance and growth.',
    accent: '#1DB954',
  },
  {
    icon: Video,
    title: 'Video & Motion Content',
    description: 'Scroll-stopping video production, reels, and motion graphics that captivate audiences across every platform.',
    accent: '#1DB954',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Automated, personalized email sequences that nurture leads and build lasting customer relationships.',
    accent: '#1DB954',
  },
  {
    icon: ShieldCheck,
    title: 'Digital Ecosystem Audit',
    description: 'Comprehensive analysis of your entire digital presence — uncovering gaps and growth opportunities.',
    accent: '#1DB954',
  },
];

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
              <ServiceCard key={service.title} service={service} Icon={Icon} delay={i * 0.06} />
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
  delay,
}: {
  service: (typeof services)[number];
  Icon: LucideIcon;
  delay: number;
}) {
  const { ref } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="animate-on-scroll glass-card rounded-2xl p-6 group cursor-default"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-spotify-green/10 group-hover:bg-spotify-green/20 transition-colors duration-300">
        <Icon size={22} className="text-spotify-green" />
      </div>
      <h3 className="text-white font-bold text-lg mb-2 group-hover:text-spotify-green transition-colors duration-200">
        {service.title}
      </h3>
      <p className="text-spotify-subdued text-sm leading-relaxed">
        {service.description}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-spotify-green text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span>Learn more</span>
        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
      </div>
    </div>
  );
}
