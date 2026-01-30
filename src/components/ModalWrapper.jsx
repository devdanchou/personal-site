import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";

const ModalWrapper = ({ isOpen, onCloseClick, children }) => {
  const backgroundDivRef = useRef();

  if (!isOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <motion.div
        ref={backgroundDivRef}
        className="fixed top-0 left-0 flex justify-end items-start w-full h-full bg-black/90 backdrop-blur-sm z-50 pl-20"
        onClick={(e) => {
          if (e.target === backgroundDivRef.current) {
            onCloseClick();
          }
        }}
      >
        <motion.button
          className="absolute top-0 right-1 p-4 z-50"
          onClick={onCloseClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        >
          <i className="flex items-center justify-center fa-solid fa-xmark text-slate-700 text-4xl font-normal hover:text-slate-500"></i>
        </motion.button>
        {children}
      </motion.div>
    </RemoveScroll>
  );
};

export default ModalWrapper;
