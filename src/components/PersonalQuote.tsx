const PersonalQuote = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: '#1B2A4A' }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative line */}
          <div className="flex justify-center mb-8">
            <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #C5A55A, transparent)' }} />
          </div>

          <blockquote className="font-serif text-xl md:text-2xl lg:text-[26px] text-white/90 leading-relaxed italic mb-8">
            «Sé lo que es no sentirse vista. Tras una despedida, entré en una depresión profunda donde me sentí invisible e inválida. Pasé por procesos duros que ahora me permiten entender lo que sufren muchas personas. Por eso acompaño desde mi propia vivencia.»
          </blockquote>

          <div className="flex justify-center mb-4">
            <div className="h-px w-10" style={{ background: '#C5A55A' }} />
          </div>

          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#C5A55A] font-semibold mb-2">
            Sandra Tello
          </p>
          <p className="font-sans text-[11px] text-white/40 leading-relaxed">
            Graduada en Derecho y ADE · Máster en Marketing · Mediadora
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalQuote;
