import React, { useRef, useState } from 'react';
import styles from './Form.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from "react-icons/fa";

export const Form = ({ contactRef }) => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "" || emailAddress === "" || message === "") {
      alert("Please fill in all fields");
      return;
    }

    const templateParams = {
      from_name: name,
      to_email: emailAddress,
      phone_number: phoneNumber,
      message: message
    };

    emailjs.sendForm('service_1rgmfki', 'template_fbaghva', form.current, 'j4RYljfWMYXqYWw5l')
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setName("");
          setEmailAddress("");
          setPhoneNumber("");
          setMessage("");
        },
        (error) => {
          console.error('Failed to send email:', error.text);
        }
      );
  };

  return (
    <section id='contact' ref={contactRef} className={styles.contact_container}>
      <h2 className={styles.contact_title}>Contact</h2>
      <div className={styles.contact_content}>
        <div className={styles.contact_info}>
          <div className={styles.email}>
            <MdOutlineEmail size={60} />
            <p><a href="mailto:vinicius_nike90@hotmail.com?">vinicius_nike90@hotmail.com</a></p>
          </div>
          <div className={styles.whatsapp}>
            <FaWhatsapp size={60} />
            <p><a href="https://wa.link/x268hy" target='_blank'>+351 969 935 342</a></p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className={styles.contact_form} action='#'>
          <div className={styles.contact_input_box}>
            <input type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder='Email Address' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
          </div>
          <div className={styles.contact_input_box}>
            <input type='text' placeholder='Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
           
          </div>
          <textarea name='' cols='20' rows='8' placeholder='Your Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <input className={styles.contact_btn} type='submit' value='Send Message' />
        </form>
      </div>
    </section>
  );
};
