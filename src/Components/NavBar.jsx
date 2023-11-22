import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="site-nav">
      <Link className="nav-item" to="#">
        Menú
      </Link>
      <Link className="nav-item" to="#">
        Eventos Privados
      </Link>
      <Link className="nav-item" to="#">
        Pedidos
      </Link>
      <Link className="nav-item" to="#">
        Nuestra Historia
      </Link>
    </nav>
  );
}
