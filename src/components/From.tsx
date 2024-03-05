import React, { useState } from "react";
import "./From.css";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" disabled={message.length <= 10}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
