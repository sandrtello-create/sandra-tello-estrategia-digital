import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path: string; // ruta relativa, p.ej. "/", "/sobre-mi"
  type?: "website" | "article" | "profile";
  image?: string; // URL absoluta opcional
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Metadatos SEO por ruta. Se inyectan en <head> tras la hidratación,
 * lo que cubre Googlebot. Para previsualizaciones sociales fiables por
 * ruta se necesitaría SSR; los OG genéricos de index.html cubren el
 * fallback.
 */
const SEO = ({ title, description, path, type = "website", image, jsonLd }: SEOProps) => {
  const url = path;
  const schemas = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
