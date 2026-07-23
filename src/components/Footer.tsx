import { Instagram, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const companyLinks = ['About Us', 'Our Process', 'Case Studies', 'Blog', 'Careers'];
const supportLinks = ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Service'];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-spotify-dark-base border-t border-white/5">
      {/* Top CTA band */}
      <div className="relative overflow-hidden py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-spotify-green/10 via-spotify-green/5 to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-spotify-green/5 blur-3xl -translate-y-1/2" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Let's Build Something{' '}
            <span className="gradient-text">Remarkable.</span>
          </h2>
          <p className="text-spotify-subdued text-lg mb-8 max-w-xl mx-auto">
            Your digital ecosystem awaits. Let's create a system that works for you around the clock.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/#contact" className="btn-primary text-base px-8 py-4">
              Start Your Project
            </Link>
            <a href="https://wa.me/254700000000" className="btn-outline text-base px-8 py-4">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo-sample-1.png" alt="Mtaani Marketing" className="h-10 w-10 object-contain rounded-full" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-wider uppercase">Mtaani</span>
                <span className="text-spotify-green text-[10px] font-semibold tracking-[0.25em] uppercase">Marketing</span>
              </div>
            </div>
            <p className="text-spotify-subdued text-sm leading-relaxed mb-6 max-w-xs">
              A Nairobi-based digital marketing agency building interconnected digital ecosystems that generate measurable value for our clients.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-spotify-green hover:border-spotify-green/30 transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-spotify-subdued text-sm hover:text-spotify-green transition-colors duration-150"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-spotify-subdued text-sm hover:text-spotify-green transition-colors duration-150">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support column */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-spotify-subdued text-sm hover:text-spotify-green transition-colors duration-150">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-spotify-subdued text-xs">
            © {new Date().getFullYear()} Mtaani Marketing. All rights reserved. Nairobi, Kenya.
          </p>
          <button
            onClick={scrollTop}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-spotify-green hover:border-spotify-green/30 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
