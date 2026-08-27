import { motion } from 'framer-motion'
import SEO from './SEO.jsx'

const onsiteImages = [
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.55 (1).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.55.webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.56 (2).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.56.webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.57 (1).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.57 (2).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.57.webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.58 (1).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.58 (2).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.58.webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.59 (1).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.59 (2).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.59.webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.14.00 (1).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.14.00 (2).webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.14.00.webp',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.14.01.webp',
  '/photos/onsite/WhatsApp1 Image 2026-08-19 at 16.13.55.webp',
]

const offsiteImages = [
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.10.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.11 (1).webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.11 (2).webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.11.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.12 (1).webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.12 (2).webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.12.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.13.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.14.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.15.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.17.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.19 (1).webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.19 (2).webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.19.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.20.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.21 (1).webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.21.webp',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.22.webp',
  '/photos/offsite/WhatsApp Image 2026-08-19 at 02.52.08 (1).webp',
  '/photos/offsite/WhatsApp Image 2026-08-19 at 02.52.08 (2).webp',
  '/photos/offsite/WhatsApp Image 2026-08-19 at 02.52.08 (3).webp',
  '/photos/offsite/WhatsApp Image 2026-08-19 at 02.52.08 (4).webp',
  '/photos/offsite/WhatsApp Image 2026-08-19 at 02.52.08 (5).webp',
  '/photos/offsite/WhatsApp Image 2026-08-19 at 02.52.08 (6).webp',
  '/photos/offsite/WhatsApp Image 2026-08-19 at 02.52.08 (7).webp',
  '/photos/offsite/WhatsApp Image 2026-08-19 at 02.52.08.webp',
  '/photos/offsite/WhatsApp Image 2026-08-22 at 10.11.37.webp',
  '/photos/offsite/WhatsApp Image 2026-08-22 at 10.11.37 (1).webp',
  '/photos/offsite/WhatsApp Image 2026-08-22 at 10.11.38.webp',
  '/photos/offsite/WhatsApp Image 2026-08-22 at 10.11.38 (1).webp',
]

function MasonryGallery({ images }) {
  return (
    <div className="photo-masonry">
      {images.map((src, i) => (
        <motion.div
          key={src}
          className="photo-masonry-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
        >
          <img src={src} alt="" loading="lazy" />
        </motion.div>
      ))}
    </div>
  )
}

export default function Photographs() {
  return (
    <section className="photographs-page">
      <SEO
        title="Photographs"
        description="Gallery of Kelir Group of Companies — onsite operations, offsite events, team activities, and behind-the-scenes from our food manufacturing journey."
        url="/photographs"
        keywords="Kelir Group photos, food manufacturing, onsite, offsite, team, gallery"
      />
      <div className="container">
        <motion.h2
          className="section-title center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Photographs
        </motion.h2>

        <div className="photo-columns">
          <div className="photo-col">
            <h3 className="photo-col-title">Onsite Pictures</h3>
            <MasonryGallery images={onsiteImages} />
          </div>
          <div className="photo-col">
            <h3 className="photo-col-title">Offsite Pictures</h3>
            <MasonryGallery images={offsiteImages} />
          </div>
        </div>
      </div>
    </section>
  )
}
