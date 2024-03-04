import LinkButtons from "./LinkButtons";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section>
      <h2 id="conatct">Conatct Me</h2>
      <div className="contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <div className="buttonlink">
          <LinkButtons />
        </div>
      </div>
    </section>
  );
};

export default Contact;
