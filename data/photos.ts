export type Photo = { id: string; src: string; alt: string; caption: string; note: string; shape: string; position?: string };
// Images reused from the earlier personal site. Captions/ownership/dates are unconfirmed.
// Optimized copies live in public/images; original files remain in the earlier project.
export const photos: Photo[] = [
  { id: 'mountain-hero', src: '/images/mountain-air.webp', alt: 'A hazy sunset over hills, a lake and a distant city', caption: 'Somewhere beyond the screen', note: 'A place to get a little lost', shape: 'wide' },
  { id: 'desk', src: '/images/desk-notes.webp', alt: 'A quiet desk with a computer and everyday objects', caption: 'One more small idea', note: 'A desk, a thought, a beginning', shape: 'desk' },
  { id: 'bookshop', src: '/images/studio-space.webp', alt: 'An airy bookstore with a suspended wooden aircraft above readers and books', caption: 'Between pages', note: 'Room for another story', shape: 'tall' },
  { id: 'gallery', src: '/images/gallery-light.webp', alt: 'An outdoor painting on an easel overlooking the same city skyline', caption: 'A different way of seeing', note: 'Room to think', shape: 'landscape' },
  { id: 'shop', src: '/images/street-corner.webp', alt: 'Clothing, shoes and cameras displayed in a small shop', caption: 'The things around us', note: 'Taking the long way', shape: 'small' },
];
