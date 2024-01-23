import "./FooterStyles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Medicare</h1>
          <p>Choose a Doctors.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-whatsapp-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Center Of Excellence</h4>
          <a href="/">Heart Center</a>
          <a href="/">Neurology</a>
          <a href="/">Nephrology</a>
          <a href="/">Transplantation</a>
        </div>
        <div>
          <h4>Patient Care</h4>
          <a href="/">24x7 Emergency Care</a>
          <a href="/">International Patients</a>
          <a href="/">Insurance</a>
          <a href="/">Master Health Checkup</a>
        </div>
        <div>
          <h4>Consultants</h4>
          <a href="/">Doctors Contact Number</a>
          <a href="/">Medi City Center</a>
          <a href="/">Medi Speciality Hospital</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
