import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { fineartSlide } from './image_data'

const variants = {
  enter: () => {
    return {
      zIndex: 0,
      opacity: 0
    };
  },
  center: () => {
    return {
      zIndex: 1,
      opacity: 1
    };
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0
    };
  }
};

export const FineArt = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, fineartSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={fineartSlide[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { type: "spring", duration: 0 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      <div className="next" onClick={() => paginate(1)}>
        {<img src="../assets/slidebtn.svg" />}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {<img src="../assets/slidebtn.svg" />}
      </div>
    </>
  );
};

export default () => {
  return [ FineArt ]
};


const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};