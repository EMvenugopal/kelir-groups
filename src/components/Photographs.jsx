import { motion } from 'framer-motion'

const onsiteImages = [
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.55 (1).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.55 (2).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.55.jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.56 (2).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.56.jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.57 (1).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.57 (2).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.57.jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.58 (1).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.58 (2).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.58.jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.59 (1).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.59 (2).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.13.59.jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.14.00 (1).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.14.00 (2).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.14.00.jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.14.01 (1).jpeg',
  '/photos/onsite/WhatsApp Image 2026-08-19 at 16.14.01.jpeg',
]

const offsiteImages = [
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.10 (1).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.10.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.11 (1).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.11 (2).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.11.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.12 (1).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.12 (2).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.12.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.13.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.14.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.15.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.16 (1).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.16.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.17.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.19 (1).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.19 (2).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.19.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.20.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.21 (1).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.21.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-14 at 00.24.22.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-22 at 10.11.37.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-22 at 10.11.37 (1).jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-22 at 10.11.38.jpeg',
  '/photos/offsite/WhatsApp Image 2026-08-22 at 10.11.38 (1).jpeg',
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
