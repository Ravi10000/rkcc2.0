import "./certified.styles.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SubHeading from "../subheading/subheading.component";

const CertifiedSection = () => {
  const containerRef = useRef(null);
  return (
    <div className="certified-section" ref={containerRef}>
      <div className="subheading-container">
        <SubHeading highlight={"#53C178BF"}>
          Certified and Trained Technicians
        </SubHeading>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="images-certified">
            <motion.img
              className="ellipse one"
              src="./Ellipse 3.png"
              alt=""
              initial={{ scale: 0.1 }}
              whileInView={{ scale: .75 }}
              transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
            />
            <motion.img
              className="main-img"
              src="./chaman and aman jd 1.png"
              alt="technicians"
              // initial={{ scale: 0.7 }}
              // whileInView={{ scale: [1.2, 0.9, 1] }}
              // transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
              // viewport={{ root: containerRef }}
            />
            <motion.img
              className="ellipse two"
              src="./Ellipse 4.png"
              alt=""
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 0.7 }}
              transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
            />
          </div>
          <motion.div
            className="info"
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <p>
              Our experienced & certified technicians makes no mistakes or mess
              while working and finish work quickly
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CertifiedSection;
