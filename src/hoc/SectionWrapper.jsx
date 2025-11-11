import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (WrappedComponent, idName) => {
  const HOC = (props) => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} relative z-0 flex flex-col justify-center items-center`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <div className="w-full max-w-7xl mx-auto flex flex-col items-start">
          <WrappedComponent {...props} />
        </div>
      </motion.section>
    );
  };

  HOC.displayName = `SectionWrapper(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return HOC;
};

export default SectionWrapper