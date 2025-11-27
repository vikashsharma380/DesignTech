// animations.js

const defaultTransition = { duration: 0.8, ease: "easeOut" };

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...defaultTransition, duration: 1 },
  },
};

export const zoomIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: defaultTransition,
  },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const rotate = {
  hidden: { opacity: 0, rotate: -90 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: defaultTransition,
  },
};

export const bounce = {
  hidden: { scale: 0.8 },
  visible: {
    scale: [1, 1.1, 0.9, 1],
    transition: { duration: 1.2, ease: "easeInOut", repeat: Infinity },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
