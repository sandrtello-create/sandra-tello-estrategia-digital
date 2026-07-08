import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Experiencia", value: 20, suffix: "", prefix: "+", description: "años en negocio y marketing" },
  { label: "Formación", value: 500, suffix: "", prefix: "+", description: "profesionales formados en IA y marca personal" },
  { label: "Uno a uno", value: 30, suffix: "", prefix: "+", description: "profesionales acompañados 1:1" },
];

const useCountUp = (target: number, isVisible: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
};

const StatCard = ({ stat, isVisible, delay }: { stat: typeof stats[0]; isVisible: boolean; delay: number }) => {
  const count = useCountUp(stat.value, isVisible);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div
      className="relative p-3 md:p-5 backdrop-blur-sm transition-all duration-700"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        background: "linear-gradient(135deg, rgba(203,170,96,0.08), rgba(255,255,255,0.02))",
        border: "1px solid",
        borderImage: "linear-gradient(135deg, rgba(203,170,96,0.4), rgba(203,170,96,0.1)) 1",
      }}
    >
      <p className="text-[10px] font-sans uppercase tracking-[0.2em] gold-gradient-text mb-3 font-semibold">{stat.label}</p>
      <p className="font-serif text-2xl sm:text-3xl md:text-5xl font-semibold gold-gradient-text leading-none mb-2">
        {stat.prefix}{count}{stat.suffix}
      </p>
      <p className="text-white/45 text-[10px] md:text-xs font-sans leading-relaxed">{stat.description}</p>
    </div>
  );
};

const CredibilityStats = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statsRef} className="mt-16 pt-8 border-t border-white/10">
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} isVisible={statsVisible} delay={i * 200} />
        ))}
      </div>
    </div>
  );
};

export default CredibilityStats;