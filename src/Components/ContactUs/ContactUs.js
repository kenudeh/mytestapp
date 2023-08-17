import React, { useState } from "react";
import CompanyInformation from '../CompanyInformation/CompanyInformation';
import Form from './Form';
import classes from './ContactUs.module.css';
import image from './../../Images/AboutUs.jpg'




const FORM_ENDPOINT = "https://public.herotofu.com/v1/16b63670-3c29-11ee-9864-53603e081af4";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <div className={classes.Container}>
        <h2>Thank you!</h2>
        <p>We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className={classes.Header} style={{ backgroundImage: `url(${image})`, 
          backgroundRepeat:"no-repeat", backgroundSize: "cover", 
          backgroundPosition: "center"}}>
        <div>
          <h2>Contact Us</h2>
          <h3>We're only a call or email away! All inquiries are treated with utmost priority</h3>
        </div>
        <Form FORM_ENDPOINT={FORM_ENDPOINT} handleSubmit={handleSubmit}/>
        <CompanyInformation />
    </div>
  );
};

export default ContactUs;