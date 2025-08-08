import { getLogo } from "../services/logo";
import { getScroll } from "../services/scroll";

const logo = getLogo();
const scroll = getScroll;
const Menu = () => {
  return (
    <header>
      <div className="header-brand">
        <img className="logo" src={logo.urlImage} alt={logo.nome} />
        VerticalDrones
      </div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a onClick={(e) => scroll(e, "menu-bt")} className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a onClick={(e) => scroll(e, "beneficios")} className="nav-link">
              Beneficios
            </a>
          </li>
          <li className="nav-item">
            <a onClick={(e) => scroll(e, "footer")} className="nav-link">
              Contato
            </a>
          </li>
        </ul>
        <a href="https://wa.me/553192116990?text=Olá,%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20um%20orçamento" target="_blank" className="nav-tell">
          Solicite um Orçamento
        </a>
      </nav>
    </header>
  );
};
export default Menu;
