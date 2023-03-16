import React, { useState } from 'react';
import './styles/Contact.css';
import { Footer } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //sending logic
    console.log(`Sending email with name: ${name}, email: ${email}, message: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
<div className="bodys">
  <h1>Contactați-ne</h1>
  <div className="image-container">
    <img src="https://picsum.photos/300/300?random=1" alt="random" />
    <img src="https://picsum.photos/300/300?random=2" alt="random" />
    <img src="https://picsum.photos/300/300?random=3" alt="random" />
  </div>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="name">
        <FontAwesomeIcon icon={faUser} />
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Nume"
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">
        <FontAwesomeIcon icon={faEnvelope} />
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">
        <FontAwesomeIcon icon={faComment} />
      </label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Mesaj"
      />
    </div>
    <button type="submit">Trimite</button>
  </form>
  <Footer />
</div>

  );
}

export default Contact;
