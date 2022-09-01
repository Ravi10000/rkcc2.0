import "./header.styles.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CustomButton from "../custom-button/custom-button.component";
import Modal from "../modal/modal.component";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-text">
            <hgroup className="title">
              <h1>RK COOL CENTER</h1>
              <div className="cut"></div>
            </hgroup>
            <h2 className="subtitle">AC & Refrigerator Solutions</h2>
          </div>
          <motion.img
            src="./hero.png"
            alt="hero"
            // initial={{ rotate: 0 }}
            // whileInView={{ rotate: [0, -5, 5, 0] }}
            // transition={{
            //   duration: 1,
            //   delay: 0.5,
            //   type: "spring",
            //   bounce: 1,
            // }}
          />
        </div>
        <div className="contact-btn">
          <CustomButton handleClick={() => (modalOpen ? close() : open())}>
            Contact Us
          </CustomButton>
        </div>
        <div className="msg" id="before-services">
          <p>We provide our services across Delhi NCR only</p>
        </div>
      </header>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
