import "./home.styles.scss";
import Header from "../../components/header/header.component";
import Services from "../../components/services/services.component";
import CertifiedSection from "../../components/certified/certified.component";
import PricesSection from "../../components/prices/prices.component";
import EverydaySection from "../../components/everyday/everyday.components";
import Address from "../../components/address/address.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import FormAndComments from "../../components/form-and-comments/form-and-comments.component";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="homepage">
      <ScrollToTop />
      <Header />
      <Services />
      <motion.p
        className="question"
        initial={{ scale: 0.5, opacity: .5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        Why us, you ask?
      </motion.p>
      <motion.p
        className="answer"
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: .2 }}
      >
        Let's find out the answer
      </motion.p>
      <CertifiedSection />
      <PricesSection />
      <EverydaySection />
      <Address />
      <FormAndComments />
    </div>
  );
}
