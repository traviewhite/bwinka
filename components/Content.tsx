import * as React from "react";
import { motion } from "framer-motion";






export const ContentPlaceholder = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
    transition={{ duration: 0.2 }}
    className="content-placeholder">
    Hey <img style={{maxWidth: '80vw'}} src="./distressed-poster.png" />
  </motion.div>
);

export default ContentPlaceholder