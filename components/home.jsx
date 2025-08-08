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
      </nav>
      <a href="https://wa.me/553192116990?text=Olá,%20VerticalDrones!%20Entrei%20em%20contato%20através%20do%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20serviços%20de%20mapeamento%20com%20drones." target="_blank" rel="noopener noreferrer" className="nav-tell">
        Solicite um Orçamento
      </a>
    </header>
  );
};
export default Menu;
