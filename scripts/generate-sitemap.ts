// Se ejecuta antes de `vite dev` y `vite build` (hooks predev/prebuild).
// Escribe public/sitemap.xml usando las rutas registradas en src/App.tsx.

import { writeFileSync } from "fs";
import { resolve } from "path";

// TODO: sustituir por la URL definitiva del proyecto (dominio de WordPress).
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// Perfiles conocidos — mantener sincronizado con src/data/profiles.ts.
// Se importan dinámicamente para no acoplar tipos de build.
async function loadDynamicEntries(): Promise<SitemapEntry[]> {
  const entries: SitemapEntry[] = [];
  try {
    const profilesMod = await import("../src/data/profiles");
    for (const p of profilesMod.profiles as { slug: string }[]) {
      entries.push({ path: `/perfiles/${p.slug}`, changefreq: "monthly", priority: "0.6" });
    }
  } catch {
    /* ignore */
  }
  try {
    const servicesMod = await import("../src/data/services");
    const svc = servicesMod.servicePortfolios as Record<string, unknown> | { slug: string }[];
    if (Array.isArray(svc)) {
      for (const s of svc) entries.push({ path: `/servicios/${s.slug}`, changefreq: "monthly", priority: "0.7" });
    } else if (svc && typeof svc === "object") {
      for (const slug of Object.keys(svc)) entries.push({ path: `/servicios/${slug}`, changefreq: "monthly", priority: "0.7" });
    }
  } catch {
    /* ignore */
  }
  return entries;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/sobre-mi", changefreq: "monthly", priority: "0.8" },
  { path: "/perfiles", changefreq: "weekly", priority: "0.8" },
];

function build(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n")
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

(async () => {
  const entries = [...staticEntries, ...(await loadDynamicEntries())];
  writeFileSync(resolve("public/sitemap.xml"), build(entries));
  console.log(`sitemap.xml written (${entries.length} entries)`);
})();
