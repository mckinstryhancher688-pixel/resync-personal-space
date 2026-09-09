'use client';
import { motion, useReducedMotion } from 'framer-motion';
export function Entrance({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return <motion.div initial={false} animate={{ opacity: reduce ? 1 : [0.96, 1], y: reduce ? 0 : [5, 0] }} transition={{ duration: reduce ? 0 : 0.35 }} className="entrance">{children}</motion.div>;
}
