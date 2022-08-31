import "./navbar.styles.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../custom-button/custom-button.component";
import Modal from "../modal/modal.component";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div className="navbar">
      <div className="left-section">
        <Link to='/'>
        <motion.p
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          www.rkcoolcenter.com
        </motion.p></Link>
      </div>
      <div className="right-section">
        <NavLink to="/">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            Home
          </motion.p>
        </NavLink>
        <NavLink to="/about">
          <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            About
          </motion.p>
        </NavLink>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="/#before-services"
          >
            Services
          </motion.a>
        <CustomButton
          secondary
          handleClick={() => (modalOpen ? close() : open())}
        >
          Contact Us
        </CustomButton>
      </div>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
