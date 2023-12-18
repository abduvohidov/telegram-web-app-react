import "./index.css";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className="header">
      <Button onClick={onClose}>Close</Button>
      <p className="username">{user?.username}</p>
    </div>
  );
};

export default Header;
