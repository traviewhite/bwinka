import { easeIn, easeInOut, easeOut } from '@popmotion/popcorn'

export const fadeIn = {
  initial: {
    y: 20,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
      ease: easeOut
    }
  }
}
export const fadeInLeft = {
  initial: {
    x: 10,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: .3,
      ease: easeInOut
    }
  }
}
export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}