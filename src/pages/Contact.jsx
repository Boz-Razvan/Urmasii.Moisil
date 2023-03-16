import { React, useState } from 'react';
import './styles/Contact.css';
import { Footer } from '../components';

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
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
