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
      <div className="header">
        <div className="container">
          <div className="header-text">
            <div className="title">
              <h1>RK COOL CENTER</h1>
              <div className="cut"></div>
            </div>
            <p className="subtitle">AC & Refrigerator Solutions</p>
          </div>
          <img src="./hero.png" alt="hero" loading="lazy"/>
        </div>
        <div className="contact-btn">
          <CustomButton handleClick={() => (modalOpen ? close() : open())}>
            Contact Us
          </CustomButton>
        </div>
        <div className="msg" id="before-services">
          <p>We provide our services across Delhi NCR only</p>
        </div>
      </div>

      <AnimatePresence
        initial={false}
        mode='wait'
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
