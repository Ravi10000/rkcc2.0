import "./about.styles.scss";

import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";
import FormAndComments from "../../components/form-and-comments/form-and-comments.component";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="about-page">
      <ScrollToTop />
      <h1>About Us</h1>

      <div className="content-container">
        <div className="image">
          <motion.img
            src="./group.png"
            alt="group"
            initial={{ scale: 0.3 }}
            whileInView={{ scale: [1.2, 0.9, 1] }}
            transition={{ duration: 0.5, type: "spring" }}
          />
        </div>
        <motion.div
          className="about-text"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: [-50, 50, 0], opacity: [0, .5, 1] }}
          transition={{ duration: 0.5, delay: .5, type: "spring" }}
        >
          <p>we are rkcoolcenter at your service 24 hours and 7 days a week.</p>
          <br />
          <p>
            <span>Out store is situated at:</span>
          </p>
          <p>
            I-86, Street No. 4, Shiv Mandir Road, Hari Nagar Extn., Near
            Luvkush, Jaitpur, Badarpur, New Delhi - 110044
          </p>
          <p>feel free to visit.</p>
          <br />
          <p>we deliver quality service in affordable prices.</p>
          <br />
          <p>
            we've got best professionally tranied technician to get your job
            done quickly.
          </p>
        </motion.div>
      </div>
      <FormAndComments reverse />
    </div>
  );
}
