import { motion } from "framer-motion";
import "../../styles/components/loadingscreen.scss";

const LoadingScreen = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading-screen"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="title"
      >
        {title}
      </motion.h1>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      ></motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
