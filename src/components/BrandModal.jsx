import { motion } from 'framer-motion'

// Brand data keys must EXACTLY match Home.jsx logo keys (case-sensitive, including spaces)
const brandDataMap = {
  JUGO: { name: 'JUGO', description: 'Juice and sandwich brand' },
  POTHIGHAI: { name: 'POTHIGHAI', description: 'Biryani brand' },
  'THE TWISTED DESI': { name: 'THE TWISTED DESI', description: 'Fine dining venture, co-founded 2018–2019.' },
  WILDROOTZ: { name: 'WILDROOTZ', description: 'Wild rice brand' },
  AYURAAR: { name: 'AYURAAR', description: 'Grains and millets brand' },
  BORASS: { name: 'BORASS', description: "Heritage rice & ancient grains — reviving India's rice heritage with premium, nutrient-rich heritage rice products for the modern kitchen." },
  OILVIKA: { name: 'OILVIKA', description: 'Premium cooking oils & functional oils — next-generation cooking oils crafted for health-conscious consumers, combining traditional wisdom with modern nutrition science.' },
  'ARIMA ARIVA': { name: 'ARIMA ARIVA', description: 'Heritage nature wellness brand' },
  ALILAI: { name: 'ALILAI', description: 'Traditional roots brand' },
  'CLOVE & COAST': { name: 'CLOVE & COAST', description: 'Non-veg pickles brand' },
  'KITH & KIN': { name: 'KITH & KIN', description: 'New food brand' },
  OTTIPOP: { name: 'OTTIPOP', description: 'New food brand' },
  'THE TWISTED DESI EXPRESS': { name: 'THE TWISTED DESI EXPRESS', description: 'Quick-service venture, 2019.' },
  YES_CAFE: { name: 'YES CAFÉ', description: 'Café and confectionery brand' },
  YOVEL: { name: 'YOVEL', description: 'Functional foods brand' },
  ZILMIL: { name: 'ZILMIL', description: 'Nutrition products brand' },
  'KELIR GROUP': { name: 'KELIR GROUP', description: 'Food Processing & Nutrition — Managing Director venture, 2025 to present.' },
}

export default function BrandModal({ isOpen, brandKey, logo, onClose }) {
  // If modal not open, no brand key, or brand key not in data map, don't render
  if (isOpen !== true || !brandKey || !(brandKey in brandDataMap)) {
    return null
  }
  
  const data = brandDataMap[brandKey]
  
  const handleClose = () => {
    onClose()
  }
  
  return (
    <motion.div
      className="brand-modal-backdrop"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="brand-modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
      >
        <button className="brand-modal-close" aria-label="Close" onClick={handleClose}>
          ×
        </button>
        {logo && (
          <img className="modal-brand-logo" src={logo} alt={`${data.name} logo`} />
        )}
        <h3 className="modal-brand-title">{data.name}</h3>
        <p className="modal-brand-description">{data.description}</p>
        <button className="btn btn-primary" onClick={handleClose}>Close</button>
      </motion.div>
    </motion.div>
  )
}