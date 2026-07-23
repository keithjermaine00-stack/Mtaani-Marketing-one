const clients = [
  'Savanna Tech', 'Nairobi Coffee', 'Maasai Crafts', 'Acacia Bank',
  'Jambo Foods', 'Pulse Fitness', 'Baobab Tours', 'Soko Digital',
  'Twiga Logistics', 'Harambee Studios', 'Kazi Connect', 'Mara Realty',
];

export default function ClientsMarquee() {
  return (
    <section className="relative py-14 bg-spotify-dark-base border-y border-white/5 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-spotify-subdued text-xs font-semibold uppercase tracking-[0.2em]">
          Trusted by ambitious brands across Kenya
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-spotify-dark-base to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-spotify-dark-base to-transparent z-10 pointer-events-none" />

        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="text-white/30 font-bold text-xl lg:text-2xl tracking-tight hover:text-spotify-green/60 transition-colors duration-300 select-none"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
