import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const skills = [
  { label: 'Social Media Marketing', value: 92 },
  { label: 'Website Development', value: 90 },
  { label: 'Brand Identity & Design', value: 88 },
  { label: 'SEO & Content Strategy', value: 85 },
  { label: 'Paid Advertising', value: 87 },
  { label: 'Video & Motion Content', value: 82 },
];

const milestones = [
  'Founded in Nairobi, Kenya',
  '120+ businesses transformed',
  'Pan-African digital reach',
  'ROI-first methodology',
];

export default function About() {
  const { ref: headerRef } = useScrollAnimation();
  const { ref: leftRef } = useScrollAnimation('left');
  const { ref: rightRef } = useScrollAnimation('right');
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true); },
      { threshold: 0.3 }
    );
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-28 bg-spotify-dark-elevated overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* BG orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-spotify-green/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <p className="section-label mb-3">About Us</p>
          <h2 className="section-title mb-4">
            Transforming Businesses Through{' '}
            <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-spotify-subdued text-lg max-w-2xl mx-auto">
            We're a Nairobi-based team of strategists, designers, and technologists building digital ecosystems that deliver compounding returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left – story */}
          <div ref={leftRef} className="animate-on-scroll-left space-y-6">
            <div className="glass-card rounded-2xl p-7">
              <p className="text-white/80 text-base leading-loose">
                At <span className="text-spotify-green font-semibold">Mtaani Marketing</span>, we believe that every business — from the corner shop in Westlands to the enterprise in the CBD — deserves a digital presence that works as hard as they do. We don't just build websites or run ads; we architect interconnected digital systems where every touchpoint amplifies the rest.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {milestones.map(m => (
                <div key={m} className="flex items-start gap-3 glass-card rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-spotify-green mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{m}</span>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-7">
              <p className="text-white/80 text-base leading-loose">
                Our ecosystem approach means your social media fuels your SEO, your content drives your paid ads, and your brand identity runs consistently across every channel — creating a flywheel effect that compounds over time.
              </p>
            </div>
          </div>

          {/* Right – skill bars */}
          <div ref={rightRef} className="animate-on-scroll-right">
            <div ref={skillsRef} className="glass-card rounded-2xl p-8 space-y-6">
              <h3 className="text-white font-bold text-xl mb-6">Our Expertise</h3>
              {skills.map((skill, i) => (
                <div key={skill.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 text-sm font-medium">{skill.label}</span>
                    <span className="text-spotify-green text-sm font-bold">{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-spotify-green to-spotify-green-light transition-all duration-1000 ease-out"
                      style={{
                        width: skillsVisible ? `${skill.value}%` : '0%',
                        transitionDelay: `${i * 0.12}s`,
                        boxShadow: skillsVisible ? '0 0 12px rgba(29,185,84,0.5)' : 'none',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
