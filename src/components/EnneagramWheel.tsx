import { useState } from "react";
import img1 from "@/assets/enneagram-1-reformador.png";
import img2 from "@/assets/enneagram-2-ayudador.png";
import img3 from "@/assets/enneagram-3-triunfador.png";
import img4 from "@/assets/enneagram-4-individualista.png";
import img5 from "@/assets/enneagram-5-investigador.png";
import img6 from "@/assets/enneagram-6-leal.png";
import img7 from "@/assets/enneagram-7-entusiasta.png";
import img8 from "@/assets/enneagram-8-desafiador.png";
import img9 from "@/assets/enneagram-9-pacificador.png";

const types = [
  { num: 1, name: "Reformador", trait: "Perfeccionista, ético", image: img1, archetype: "estratega" as const },
  { num: 2, name: "Ayudador", trait: "Generoso, posesivo", image: img2, archetype: "comunicador" as const },
  { num: 3, name: "Triunfador", trait: "Adaptable, ambicioso", image: img3, archetype: "estratega" as const },
  { num: 4, name: "Individualista", trait: "Expresivo, temperamental", image: img4, archetype: "visionario" as const },
  { num: 5, name: "Investigador", trait: "Perceptivo, reservado", image: img5, archetype: "estratega" as const },
  { num: 6, name: "Leal", trait: "Comprometido, ansioso", image: img6, archetype: "comunicador" as const },
  { num: 7, name: "Entusiasta", trait: "Versátil, disperso", image: img7, archetype: "visionario" as const },
  { num: 8, name: "Desafiador", trait: "Seguro, confrontador", image: img8, archetype: "estratega" as const },
  { num: 9, name: "Pacificador", trait: "Receptivo, complaciente", image: img9, archetype: "comunicador" as const },
];

export type ArchetypeKey = "estratega" | "comunicador" | "visionario" | null;

interface EnneagramWheelProps {
  onHoverChange?: (archetype: ArchetypeKey) => void;
}

const EnneagramWheel = ({ onHoverChange }: EnneagramWheelProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const cx = 250;
  const cy = 250;
  const outerR = 220;
  const innerR = 140;
  const segments = 9;
  const angleStep = (2 * Math.PI) / segments;
  const startOffset = -Math.PI / 2 - angleStep / 2;

  const handleHover = (index: number | null) => {
    setHovered(index);
    onHoverChange?.(index !== null ? types[index].archetype : null);
  };

  const getSegmentPath = (index: number) => {
    const a1 = startOffset + index * angleStep;
    const a2 = a1 + angleStep;
    const x1o = cx + outerR * Math.cos(a1);
    const y1o = cy + outerR * Math.sin(a1);
    const x2o = cx + outerR * Math.cos(a2);
    const y2o = cy + outerR * Math.sin(a2);
    const x1i = cx + innerR * Math.cos(a2);
    const y1i = cy + innerR * Math.sin(a2);
    const x2i = cx + innerR * Math.cos(a1);
    const y2i = cy + innerR * Math.sin(a1);
    return `M${x1o},${y1o} A${outerR},${outerR} 0 0,1 ${x2o},${y2o} L${x1i},${y1i} A${innerR},${innerR} 0 0,0 ${x2i},${y2i} Z`;
  };

  const getLabelPos = (index: number) => {
    const a = startOffset + (index + 0.5) * angleStep;
    const r = (outerR + innerR) / 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <svg viewBox="0 0 500 500" className="w-full max-w-[480px] lg:max-w-[560px]">
        {types.map((t, i) => {
          const isHovered = hovered === i;
          const pos = getLabelPos(i);
          return (
            <g
              key={i}
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={() => handleHover(null)}
              className="cursor-pointer"
            >
              <path
                d={getSegmentPath(i)}
                className="transition-all duration-300"
                fill={isHovered ? "hsl(var(--accent))" : `hsl(var(--primary) / ${0.6 + (i % 3) * 0.15})`}
                stroke="hsl(var(--background))"
                strokeWidth="2"
              />
              <text
                x={pos.x}
                y={pos.y - 6}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[13px] font-bold pointer-events-none"
                fill={isHovered ? "hsl(var(--primary))" : "hsl(var(--accent))"}
              >
                {t.num}
              </text>
              <text
                x={pos.x}
                y={pos.y + 8}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[9px] font-medium pointer-events-none uppercase tracking-wider"
                fill={isHovered ? "hsl(var(--primary))" : "hsl(var(--primary-foreground) / 0.9)"}
              >
                {t.name}
              </text>
            </g>
          );
        })}
        {/* Center */}
        <circle cx={cx} cy={cy} r={innerR - 4} fill="hsl(var(--background))" />
        <text x={cx} y={cy - 10} textAnchor="middle" className="text-[14px] font-serif font-semibold" fill="hsl(var(--primary))">
          Eneagrama
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle" className="text-[11px]" fill="hsl(var(--muted-foreground))">
          9 perfiles
        </text>
      </svg>

      {/* Tooltip with character image */}
      <div className="h-20 flex items-center justify-center">
        {hovered !== null && (
          <div className="flex items-center gap-4 animate-fade-in-up">
            <img
              src={types[hovered].image}
              alt={types[hovered].name}
              className="h-20 w-20 object-contain rounded-full border-2 border-accent/30"
            />
            <div>
              <p className="font-semibold text-primary text-sm">
                Tipo {types[hovered].num}: {types[hovered].name}
              </p>
              <p className="text-xs text-muted-foreground">{types[hovered].trait}</p>
            </div>
          </div>
        )}
        {hovered === null && (
          <p className="text-xs text-muted-foreground/60 italic">Pasa el cursor para explorar cada tipo</p>
        )}
      </div>
    </div>
  );
};

export default EnneagramWheel;
