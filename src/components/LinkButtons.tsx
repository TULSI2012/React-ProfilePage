import "./LinkButtons.css";

interface LinkButtonProps {
  url: string;
  label: string;
}

const LinkButtons: React.FC<LinkButtonProps> = ({ url, label }) => {
  return (
    <div className="link-buttons">
      <a href={url} target="_blank" className="link-button">
        {label}
      </a>
    </div>
  );
};

export default LinkButtons;
