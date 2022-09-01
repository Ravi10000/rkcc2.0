import "./address.styles.scss";
import SubHeading from "../subheading/subheading.component";

export default function Address() {
  return (
    <section className="address">
      <div className="subheading-container">
        <SubHeading highlight={"#7C8AA9BF"}>Where To Locate Us</SubHeading>
      </div>
      <div className="content-container">
        <h3>Reach Out To Us At</h3>
        <div className="content">
          <div className="address-text">
            <div className="text">
              <p>
                I-86, Street No. 4, Shiv Mandir Road, Hari Nagar Extn., Near
                Luvkush, Jaitpur, Badarpur, New Delhi - 110044
              </p>
            </div>

            <div className="map">
              <iframe
                title="map"
                id="map"
                data-aos="zoom-in"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1810134884627!2d77.3201212156167!3d28.504201182468602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7b8e88edf39%3A0x2672c36de1824363!2sR.k%20Cool%20Center!5e0!3m2!1sen!2sin!4v1638333675441!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
