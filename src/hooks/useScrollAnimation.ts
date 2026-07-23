import { useEffect, useRef } from 'react';

type Direction = 'up' | 'left' | 'right';

export function useScrollAnimation(direction: Direction = 'up') {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cls =
      direction === 'left'
        ? 'animate-on-scroll-left'
        : direction === 'right'
        ? 'animate-on-scroll-right'
        : 'animate-on-scroll';

    el.classList.add(cls);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [direction]);

  return { ref };
}
