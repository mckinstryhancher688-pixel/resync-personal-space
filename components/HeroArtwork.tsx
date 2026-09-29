'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { Photo } from '@/data/photos';

export function HeroArtwork({ photo }: { photo: Photo }) {
  const target = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 34, reduce ? 0 : -30]);

  return <div className="hero-artwork" ref={target}>
    <motion.div className="hero-artwork-image" style={{ y: imageY }} whileHover={reduce ? undefined : { scale: 1.018, rotate: -0.7 }} transition={{ type: 'spring', stiffness: 150, damping: 22 }}>
      <Image src={photo.src} alt={photo.alt} fill priority sizes="(max-width: 700px) 92vw, 50vw" style={{ objectPosition: photo.position || 'center 60%' }} />
    </motion.div>
    <span className="artwork-index micro">FIG. 01 / A MOVING POINT OF VIEW</span>
    <motion.span className="artwork-orbit" aria-hidden="true" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 42, ease: 'linear', repeat: Infinity }}><i /></motion.span>
    <motion.span className="artwork-note micro" animate={reduce ? undefined : { y: [0, -5, 0] }} transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}>OUT THERE, LOOKING AROUND</motion.span>
  </div>;
}
