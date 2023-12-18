import "./index.css";
import Button from "../Button/Button";

const Header = () => {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  });

  const onClose = () => {
    tg.close();
  };
  return (
    <div className="header">
      <Button onClick={onClose}>Close</Button>
      <span className="username"></span>
    </div>
  );
};

export default Header;
