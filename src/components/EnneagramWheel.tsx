import { useState } from "react";

const types = [
  { num: 1, name: "Reformador", trait: "Perfeccionista, ético" },
  { num: 2, name: "Ayudador", trait: "Generoso, posesivo" },
  { num: 3, name: "Triunfador", trait: "Adaptable, ambicioso" },
  { num: 4, name: "Individualista", trait: "Expresivo, temperamental" },
  { num: 5, name: "Investigador", trait: "Perceptivo, reservado" },
  { num: 6, name: "Leal", trait: "Comprometido, ansioso" },
  { num: 7, name: "Entusiasta", trait: "Versátil, disperso" },
  { num: 8, name: "Desafiador", trait: "Seguro, confrontador" },
  { num: 9, name: "Pacificador", trait: "Receptivo, complaciente" },
];

const EnneagramWheel = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const cx = 200;
  const cy = 200;
  const outerR = 170;
  const innerR = 90;
  const segments = 9;
  const angleStep = (2 * Math.PI) / segments;
  const startOffset = -Math.PI / 2 - angleStep / 2;

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
      <svg viewBox="0 0 400 400" className="w-full max-w-[320px] lg:max-w-[360px]">
        {types.map((t, i) => {
          const isHovered = hovered === i;
          const pos = getLabelPos(i);
          return (
            <g
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
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
                className="text-[11px] font-bold pointer-events-none"
                fill={isHovered ? "hsl(var(--primary))" : "hsl(var(--accent))"}
              >
                {t.num}
              </text>
              <text
                x={pos.x}
                y={pos.y + 8}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[7px] font-medium pointer-events-none uppercase tracking-wider"
                fill={isHovered ? "hsl(var(--primary))" : "hsl(var(--primary-foreground) / 0.9)"}
              >
                {t.name}
              </text>
            </g>
          );
        })}
        {/* Center */}
        <circle cx={cx} cy={cy} r={innerR - 4} fill="hsl(var(--background))" />
        <text x={cx} y={cy - 8} textAnchor="middle" className="text-[11px] font-serif font-semibold" fill="hsl(var(--primary))">
          Eneagrama
        </text>
        <text x={cx} y={cy + 8} textAnchor="middle" className="text-[9px]" fill="hsl(var(--muted-foreground))">
          9 perfiles
        </text>
      </svg>

      {/* Tooltip */}
      <div className="h-12 flex items-center justify-center">
        {hovered !== null && (
          <p className="text-sm text-muted-foreground animate-fade-in-up text-center">
            <span className="font-semibold text-primary">Tipo {types[hovered].num}: {types[hovered].name}</span>
            {" — "}{types[hovered].trait}
          </p>
        )}
        {hovered === null && (
          <p className="text-xs text-muted-foreground/60 italic">Pasa el cursor para explorar cada tipo</p>
        )}
      </div>
    </div>
  );
};

export default EnneagramWheel;
