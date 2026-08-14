/**
 * Photo registry — photos organized by year and category.
 *
 * USAGE: Drop your photos in public/photos/.
 * The src path is relative to public/ — so "photos/foo.jpg"
 * maps to public/photos/foo.jpg
 */

const categories = [
  'All',
  'Hospitality',
  'F&B',
  'Portrait',
  'Street',
  'Landscape',
  'Architecture',
  'Travel',
  'Studio',
  'Nature',
  'Corporate',
  'Events',
  'Brand',
]

const years = [
  'All',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
]

/**
 * Photo entries.
 * Each photo has: id, src, title, category, year, description (optional)
 */
const photos = [
  // ===== 2007-2008: Jugo Foods Era =====
  { id: 1, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.10 (1).jpeg', title: 'Corporate Kitchen', category: 'Corporate', year: '2007', era: 'beginnings' },
  { id: 2, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.10.jpeg', title: 'Chennai Streets', category: 'Street', year: '2007', era: 'beginnings' },
  { id: 3, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.11 (1).jpeg', title: 'Team Lunch', category: 'Corporate', year: '2008', era: 'beginnings' },

  // ===== 2009-2014: Growing Today Era =====
  { id: 4, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.11 (2).jpeg', title: 'Central Kitchen', category: 'Corporate', year: '2011', era: 'founding' },
  { id: 5, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.11.jpeg', title: 'Bengaluru Skyline', category: 'Landscape', year: '2012', era: 'founding' },
  { id: 6, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.12 (1).jpeg', title: 'Corporate Event', category: 'Events', year: '2013', era: 'founding' },

  // ===== 2015-2018: Scaling Era =====
  { id: 7, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.12 (2).jpeg', title: 'Facility Operations', category: 'Corporate', year: '2015', era: 'scaling' },
  { id: 8, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.12.jpeg', title: 'BBQ Setup', category: 'F&B', year: '2017', era: 'scaling' },

  // ===== 2018-2021: The Twisted Desi =====
  { id: 9, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.13.jpeg', title: 'Restaurant Interior', category: 'Brand', year: '2019', era: 'entrepreneurial' },
  { id: 10, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.14.jpeg', title: 'Food Plating', category: 'F&B', year: '2020', era: 'entrepreneurial' },

  // ===== 2019-2025: Global Era =====
  { id: 11, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.15.jpeg', title: 'Singapore', category: 'Travel', year: '2020', era: 'global' },
  { id: 12, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.16 (1).jpeg', title: 'Remote Work', category: 'Corporate', year: '2021', era: 'global' },

  // ===== 2025-Present: Kelir Group =====
  { id: 13, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.16.jpeg', title: 'Kelir Studio', category: 'Brand', year: '2025', era: 'present' },
  { id: 14, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.17 (1).jpeg', title: 'Brand Shoot', category: 'Studio', year: '2025', era: 'present' },
  { id: 15, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.17 (2).jpeg', title: 'Vision', category: 'Landscape', year: '2025', era: 'present' },

  // ===== Additional photos =====
  { id: 16, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.17.jpeg', title: 'Hospitality Detail', category: 'Hospitality', year: '2025', era: 'present' },
  { id: 17, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.18.jpeg', title: 'Street Frames', category: 'Street', year: '2025', era: 'present' },
  { id: 18, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.19 (1).jpeg', title: 'Architectural Lines', category: 'Architecture', year: '2025', era: 'present' },
  { id: 19, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.19 (2).jpeg', title: 'Traveller\'s Eye', category: 'Travel', year: '2025', era: 'present' },
  { id: 20, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.19.jpeg', title: 'Nature Study', category: 'Nature', year: '2025', era: 'present' },
  { id: 21, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.20.jpeg', title: 'Event Moments', category: 'Events', year: '2025', era: 'present' },
  { id: 22, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.21 (1).jpeg', title: 'F&B Craft', category: 'F&B', year: '2025', era: 'present' },
  { id: 23, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.21.jpeg', title: 'Portrait Session', category: 'Portrait', year: '2025', era: 'present' },
  { id: 24, src: 'photos/WhatsApp Image 2026-08-14 at 00.24.22.jpeg', title: 'Beyond Borders', category: 'Travel', year: '2025', era: 'present' },
]

export { categories, years }
export default photos
