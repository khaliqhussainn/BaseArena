import { motion } from "framer-motion";

const RippleEffect = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          opacity: 0,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default RippleEffect;
