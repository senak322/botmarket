import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
  const { user, onClose } = useTelegram();
  return (
    <header className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span className="username">{user}</span>
    </header>
  );
};

export default Header;
