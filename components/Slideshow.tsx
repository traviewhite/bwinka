import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import { bwinkaSlide, eiuSlide, eiuSlide2, eiuSlide3, macSlide, blueroomSlide, portlandSlide, 
  postersSlide, calendarSlide, ancientvillageSlide,  } from './image_data'

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
}

export const SlideshowBwinka = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, bwinkaSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={bwinkaSlide[imageIndex]}
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
  )
}

export const SlideshowEIU = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, eiuSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={eiuSlide[imageIndex]}
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
  )
}
export const SlideshowEIU2 = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, eiuSlide2.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={eiuSlide2[imageIndex]}
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
  )
}
export const SlideshowEIU3 = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, eiuSlide3.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={eiuSlide3[imageIndex]}
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
  )
}
export const SlideshowMac = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, macSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={macSlide[imageIndex]}
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
  )
}
export const SlideshowBlueroom = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, blueroomSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={blueroomSlide[imageIndex]}
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
  )
}
export const SlideshowPortland = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, portlandSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={portlandSlide[imageIndex]}
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
  )
}
export const SlideshowPosters = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, postersSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={postersSlide[imageIndex]}
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
  )
}
export const SlideshowCalendar = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, calendarSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={calendarSlide[imageIndex]}
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
  )
}
export const SlideshowAncientVillage = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, ancientvillageSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={ancientvillageSlide[imageIndex]}
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
  )
}
export const SlideshowIllustration = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, calendarSlide.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={calendarSlide[imageIndex]}
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
  )
}


export default () => {
  return [SlideshowBwinka, SlideshowEIU, SlideshowEIU2, SlideshowEIU3, 
    SlideshowMac, SlideshowBlueroom, SlideshowPortland, SlideshowPosters,
    SlideshowCalendar, SlideshowAncientVillage, SlideshowIllustration ]
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
}