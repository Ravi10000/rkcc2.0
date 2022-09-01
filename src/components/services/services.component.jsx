import "./services.styles.scss";
import SubHeading from "../subheading/subheading.component";

const Services = () => {
  return (
    <section className="services">
      <div className="subheading-container" id="services">
        <SubHeading>Services</SubHeading>
      </div>
      <div className="services-list-container">
        <ul className="services-list">
          <li>
            <div className="list-item">
              <div className="bullet"></div>
              <p>New Air Conditioners Installation </p>
            </div>
          </li>
          <li>
            <div className="list-item">
              <div className="bullet"></div>
              <p>Re-Installation of Air Conditioners</p>
            </div>
          </li>
          <li>
            <div className="list-item">
              <div className="bullet"></div>
              <p>ACs & Refrigerators Repair</p>
            </div>
          </li>
          <li>
            <div className="list-item">
              <div className="bullet"></div>
              <p>Solving Your Quries</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="info">
        <p>
          Quality service available at your doorstep with just one phone call
        </p>
      </div>
    </section>
  );
};

export default Services;
