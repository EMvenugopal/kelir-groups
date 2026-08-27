import { Helmet } from 'react-helmet-async'

const siteName = 'Kelir Group of Companies'
const baseUrl = 'https://kelirgroups.com'
const defaultImage = `${baseUrl}/photos/kr2.webp`

export default function SEO({
  title,
  description,
  url,
  image,
  type = 'website',
  keywords,
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} — Functional Foods & Nutrition`
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const img = image || defaultImage

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
