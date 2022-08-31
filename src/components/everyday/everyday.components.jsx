import "./everyday.styles.scss";
import { motion } from "framer-motion";
import SubHeading from "../subheading/subheading.component";

export default function EverydaySection() {
  return (
    <div className="everyday-section">
      <div className="subheading-container">
        <SubHeading highlight={"#FE706299"}>Contact Us Anytime</SubHeading>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="image">
            <motion.img
              src="./24x7.png"
              alt=""
              initial={{ scale: 0.7 }}
              whileInView={{ scale: [1.2, 0.9, 1] }}
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
              We are available at your service 24 hours a day 7 days a week just
              one phone Call away{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
