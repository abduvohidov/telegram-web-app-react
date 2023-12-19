import "./index.css";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className="header">
      <p className="username">username: {user?.username}</p>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
};

export default Header;
