'use client';

import { useEffect, useRef, useState, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function FadeInSection({ children, className = '', ...props }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = ['fade-section', isVisible && 'visible', className]
    .filter(Boolean)
    .join(' ');

  return (
    <section ref={ref} className={classes} {...props}>
      {children}
    </section>
  );
}
