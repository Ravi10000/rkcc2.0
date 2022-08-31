import "./footer.styles.scss";

import SubHeading from "../subheading/subheading.component";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="subheading-container">
        <SubHeading color="white">Contacts</SubHeading>
      </div>
      <div className="content-container">
        <div className="address-container">
        <p className="contact-address">
          I-86, Street No. 4, Shiv Mandir Road, Hari Nagar Extn., Near Luvkush,
          Jaitpur, Badarpur, New Delhi - 110044
        </p>
        </div>
        <div className="contacts-container">
        <p>
          <span>Phone</span>: <a href="tel:+919560863067">+91 9560863067</a>,{" "}
          <a href="tel:+917678627063">+91 7678627063</a>
        </p>
        <p>
          <span>Email</span>:{" "}
          <a href="mailto:amansoni9210@gmail.com">amansoni9210@gmail.com</a>
        </p>
        <Link to="/about">
          <p className="about-link">About Us</p>
        </Link>
        </div>
      </div>
      <div className="copyright">
        <p>&copy;2014 RK COOL CENTER</p>
        <p>www.rkcoolcenter.com</p>
      </div>
    </div>
  );
}
