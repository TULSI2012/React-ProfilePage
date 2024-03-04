import "./LinkButtons.css";

const LinkButtons = () => {
  return (
    <div className="link-buttons">
      <a
        href="https://www.linkedin.com/in/tulsikalola2a888b191/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-button"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/TULSI2012"
        target="_blank"
        rel="noopener noreferrer"
        className="link-button"
      >
        GitHub
      </a>
      <a
        href="/Images/tulsiresume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="link-button"
      >
        Resume
      </a>
    </div>
  );
};

export default LinkButtons;
