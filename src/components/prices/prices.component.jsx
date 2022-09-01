import "./prices.styles.scss";
import SubHeading from "../subheading/subheading.component";
import { motion } from "framer-motion";

const PricesSection = () => {
  return (
    <section className="prices-section">
      <div className="subheading-container">
        <SubHeading highlight={"#FFC10099"}>Reasonable Pricing</SubHeading>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="image">
            <motion.img
              className="main-img"
              src="./money.png"
              alt=""
              // initial={{ scale: 0.7 }}
              // whileInView={{ scale: [1.2, 0.9, 1] }}
              // transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
            />
            <motion.img
              className="ellipse one"
              src="./offer.png"
              alt="money"
              initial={{ scale: 0.1 }}
              whileInView={{ scale: 0.5 }}
              transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
            />
            <motion.img
              className="ellipse two"
              src="./Ellipse 7.png"
              alt=""
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 0.5 }}
              transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
            />
          </div>
          <motion.div
            className="info"
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <p>Get regular offers and discounts like no others</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
