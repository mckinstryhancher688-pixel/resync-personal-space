import Image from 'next/image';
import { withBasePath } from '@/lib/asset-path';
import type { Photo as PhotoData } from '@/data/photos';
export function Photo({ photo, priority = false, className = '' }: { photo: PhotoData; priority?: boolean; className?: string }) {
  return <figure className={`photo photo-${photo.shape} ${className}`}><div className="photo-frame"><Image src={withBasePath(photo.src)} alt={photo.alt} fill priority={priority} sizes={priority ? '(max-width: 700px) 92vw, 50vw' : '(max-width: 700px) 85vw, 40vw'} style={{ objectPosition: photo.position || 'center' }} /><span className="photo-hover">{photo.note}</span></div><figcaption><span>{photo.caption}</span><span>↗</span></figcaption></figure>;
}

