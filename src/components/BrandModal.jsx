import { useState } from 'react'
import { motion } from 'framer-motion'

// Brand data keys must EXACTLY match Home.jsx logo keys (case-sensitive, including spaces)
const brandDataMap = {
  JUGO: { name: 'JUGO', description: 'Juice and sandwich brand' },
  POTHIGHAI: { name: 'POTHIGHAI', description: 'Biryani brand' },
  'THE TWISTED DESI': { name: 'THE TWISTED DESI', description: 'Fine dining brand' },
  WILDROOTZ: { name: 'WILDROOTZ', description: 'Wild rice brand' },
  AYURAAR: { name: 'AYURAAR', description: 'Grains and millets brand' },
  BORASS: { name: 'BORASS', description: 'Natural sweeteners brand' },
  OILVIKA: { name: 'OILVIKA', description: 'Premium cooking oils brand' },
  'ARIMA ARIVA': { name: 'ARIMA ARIVA', description: 'Heritage nature wellness brand' },
  ALILAI: { name: 'ALILAI', description: 'Traditional roots brand' },
  'CLOVE & COAST': { name: 'CLOVE & COAST', description: 'Non-veg pickles brand' },
  'KITH & KIN': { name: 'KITH & KIN', description: 'New food brand' },
  'THE TWISTED DESI EXPRESS': { name: 'THE TWISTED DESI EXPRESS', description: 'Quick-serve brand' },
  YES_CAFE: { name: 'YES CAFÉ', description: 'Café and confectionery brand' },
  YOVEL: { name: 'YOVEL', description: 'Functional foods brand' },
  ZILMIL: { name: 'ZILMIL', description: 'Nutrition products brand' },
  'KELIR GROUP': { name: 'KELIR GROUP', description: 'Managing Director brand' },
}

export default function BrandModal({ isOpen, brandKey, onClose }) {
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
    >
      <motion.div className="brand-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="brand-modal-close" aria-label="Close" onClick={handleClose}>
          ×
        </button>
        <h3 className="modal-brand-title">{data.name}</h3>
        <p className="modal-brand-description">{data.description}</p>
        <button className="btn btn-primary" onClick={handleClose}>Close</button>
      </motion.div>
    </motion.div>
  )
}