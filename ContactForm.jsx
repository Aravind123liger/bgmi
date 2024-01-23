// ContactForm.js

import React from 'react';
import './ContactStyles.scss';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <h2>Hospital Contact</h2>
      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6589.385205924663!2d77.0140421140341!3d10.8821371250638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85aaaedfbba6f%3A0xc9f8d55c7c27b355!2sKarpagam%20Hospital!5e0!3m2!1sen!2sin!4v1704262250403!5m2!1sen!2sin"
           width="100%"
          height="100%"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-info">
        <p className="info">Hospital Name: Karpagam Hospital</p>
        <p className="info">Address: 123 Hospital St, Othakalmandapam, Coimbatore</p>
        <p className="info">Phone: +1234567890</p>
        {/* Add more contact information if needed */}
      </div>
    </div>
  );
};

export default ContactForm;
