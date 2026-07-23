import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@mtaanimarketing.co.ke', href: 'mailto:hello@mtaanimarketing.co.ke' },
  { icon: Phone, label: 'Phone / WhatsApp', value: '+254 700 000 000', href: 'tel:+254700000000' },
  { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya', href: '#' },
];

export default function Contact() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: leftRef } = useScrollAnimation('left');
  const { ref: rightRef } = useScrollAnimation('right');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  };

  return (
    <section id="contact" className="relative py-28 bg-spotify-dark-elevated overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spotify-green/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-spotify-green/5 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="animate-on-scroll text-center mb-14">
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-title mb-4">
            Ready to Build Your{' '}
            <span className="gradient-text">Digital Ecosystem?</span>
          </h2>
          <p className="text-spotify-subdued text-lg max-w-2xl mx-auto">
            Tell us about your business and goals — we'll craft a tailored strategy to get you there.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left – contact info */}
          <div ref={leftRef} className="animate-on-scroll-left lg:col-span-2 space-y-5">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-4 glass-card rounded-2xl p-5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-spotify-green/10 flex items-center justify-center group-hover:bg-spotify-green/20 transition-colors">
                  <Icon size={19} className="text-spotify-green" />
                </div>
                <div>
                  <p className="text-spotify-subdued text-xs font-medium uppercase tracking-wider">{label}</p>
                  <p className="text-white text-sm font-semibold mt-0.5">{value}</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-white/20 group-hover:text-spotify-green transition-colors" />
              </a>
            ))}

            {/* Social proof */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex -space-x-2">
                  {['#1DB954', '#16a34a', '#15803d'].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-spotify-dark-elevated flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                      {['K', 'M', 'A'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-white/70 text-sm">120+ satisfied clients</span>
              </div>
              <p className="text-spotify-subdued text-xs leading-relaxed">
                "Mtaani transformed our online presence. Within 3 months, our leads doubled." — Kariuki, Founder
              </p>
            </div>
          </div>

          {/* Right – form */}
          <div ref={rightRef} className="animate-on-scroll-right lg:col-span-3">
            <div className="glass-card rounded-2xl p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-spotify-green/15 flex items-center justify-center mx-auto mb-5">
                    <Send size={28} className="text-spotify-green" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-spotify-subdued">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-spotify-subdued uppercase tracking-wider mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-spotify-green focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-spotify-subdued uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-spotify-green focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-spotify-subdued uppercase tracking-wider mb-2">Service Interested In</label>
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-spotify-green transition-all duration-200 appearance-none"
                    >
                      <option value="" className="bg-spotify-dark-highlight">Select a service...</option>
                      <option value="social" className="bg-spotify-dark-highlight">Social Media Marketing</option>
                      <option value="seo" className="bg-spotify-dark-highlight">SEO & Content</option>
                      <option value="paid" className="bg-spotify-dark-highlight">Paid Advertising</option>
                      <option value="web" className="bg-spotify-dark-highlight">Website Development</option>
                      <option value="brand" className="bg-spotify-dark-highlight">Brand Identity</option>
                      <option value="ecosystem" className="bg-spotify-dark-highlight">Full Ecosystem</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-spotify-subdued uppercase tracking-wider mb-2">Tell Us About Your Goals</label>
                    <textarea
                      rows={4}
                      required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Briefly describe your business and what you're looking to achieve..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-spotify-green focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full btn-primary justify-center py-4 text-base ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-spotify-black/30 border-t-spotify-black rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send size={16} />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
