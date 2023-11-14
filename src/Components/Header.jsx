import lupisLogo from "../images/Lupis.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="lupis-container">
        <img className="lupis-logo" src={lupisLogo} alt="lupis-logo" />
      </div>
    </header>
  );
}
