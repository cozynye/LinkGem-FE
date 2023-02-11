import { useCallback, useEffect, useRef } from 'react';

export const useScrollFadeIn = (
  direction: string,
  duration: number,
  delay: number
) => {
  const element = useRef<any>(null);

  const handleDirection = (name: string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
    }
  };

  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (!current) return;

      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = '1';
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);
  console.log(element);
  console.log(element);
  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};
