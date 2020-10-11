import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./Content";


const Accordion = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.div className="item2"
        initial={false}
        animate={{ backgroundColor: isOpen ? "#1F1F1F" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div className="section"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Example = () => {
  const [expanded, setExpanded] = useState<false | number>(0);

  return accordionIds.map((i) => (
    <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
  ));
};

const accordionIds = [0, 1, 2, 3];

export default Example
