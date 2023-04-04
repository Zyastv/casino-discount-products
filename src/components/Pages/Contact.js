import React, { useState } from "react";
import { Button } from "../Button";
import "../Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <div className='contact-form-container'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='name'
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type='email'
          id='email'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          className='message'
          id='message'
          value={message}
          placeholder='Message'
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <Button
          className='btn'
          buttonStyle='btn--outline--dark'
          buttonSize='btn--medium'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
