import { getModal } from "../services/modal";
import { useState } from "react";

const Modal = getModal;
const Conteudo = () => {
  const [ModalAberto, setModalAberto] = useState(false);
  const fecharModal = () => {
    setModalAberto(false);
  };
  return (
    <>
      <div id="menu-bt" className="hero-section">
        <div className="hero-bg">
          <div className="hero-div">
            <h2 id="menu" className="hero-title">
              Mapeamento de Terrenos de Alta Precisão com Drones
            </h2>
            <p className="hero-subtitle">
              Transforme a forma como você enxerga seu projeto. Obtenha dados topográficos e aéreos detalhados, de forma rápida e segura. <br />
              Topografia de precisão, dados confiáveis para o seu projeto. A topografia tradicional é um processo demorado e intensivo, que exige grandes equipes e expõe profissionais a riscos. Com os drones da JVLVerticalDrones, a topografia de precisão é revolucionada, oferecendo uma coleta de
              dados rápida, segura e com acurácia centimétrica, essencial para o sucesso de qualquer projeto..
            </p>
          </div>
        </div>
        <div className="hero-div">
          <h2 className="hero-title">Precisão e Profissionalismo.</h2>
          <p className="hero-subtitle">Para garantir resultados impecáveis em cada projeto, utilizamos uma combinação de hardware e software de ponta, conhecida por sua confiabilidade e precisão no mercado.</p>
        </div>
        <div className="hero-cta">
          <a
            id="beneficios"
            href="https://wa.me/553192116990?text=Olá,%20VerticalDrones!%20Entrei%20em%20contato%20através%20do%20seu%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20os%20serviços%20de%20mapeamento%20com%20drones."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary">
            Solicite um Orçamento
          </a>
          <button onClick={() => setModalAberto(true)} className="btn-secondary">
            Último Projeto
          </button>
        </div>
        <div className="hero-bg">
          <div className="hero-div">
            <h2 className="hero-title">Dji Air 2s: Excelência em Captura de Dados.</h2>
            <p className="hero-subtitle">
              Nosso equipamento principal é o drone Dji Air 2s, uma aeronave renomada por sua capacidade de captura de imagens de alta resolução. Com uma câmera de 20MP e um sensor de 1 polegada, ele nos permite coletar dados visuais com detalhes nítidos e precisão excepcional. Sua autonomia de voo
              e seus sensores avançados garantem a segurança e a eficiência em campo, mesmo em ambientes complexos.
            </p>
          </div>

          <div className="stats-section">
            <div className="stat-card">
              <div className="stat-number">30% Redução de custo</div>
              <div className="stat-label">Menos tempo de campo, menos mão de obra.</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Velocidade e Eficiência</div>
              <div className="stat-label">Reduza drasticamente o tempo de campo e acelere o cronograma do seu projeto.</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Segurança Máxima</div>
              <div className="stat-label"> Evite a necessidade de equipe em áreas de difícil acesso ou perigosas.</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Precisão Impecável</div>
              <div className="stat-label"> Obtenha dados topográficos com margem de erro mínima, ideais para projetos de engenharia, mineração e agricultura.</div>
            </div>
          </div>
        </div>
        <div className="hero-div">
          <h2 className="hero-title">Agisoft Metashape: O Poder da Fotogrametria.</h2>
          <p className="hero-subtitle">Após a coleta dos dados, o processamento é feito com o software líder de mercado Agisoft Metashape. Esta ferramenta de fotogrametria profissional nos permite transformar milhares de imagens de alta resolução em produtos geoespaciais precisos, como:</p>
        </div>
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-number">Modelos 3D realistas</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Mapas 2D ortomosaicos com precisão centimétrica</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Nuvens de pontos densas</div>
          </div>
        </div>
      </div>

      <footer id="footer" className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>JVLVerticalDrones</h3>
            <p>Mapeando o futuro com precisão e segurança.</p>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>
              Email:{" "}
              <a href="mailto:jvlverticaldrones@gmail.com" target="_blank" rel="noopener noreferrer">
                jvlverticaldrones@gmail.com
              </a>
            </p>
            <p>
              Telefone:{" "}
              <a href="tel:+55 (31) 9211-6990" target="_blank" rel="noopener noreferrer">
                +55 (31) 9211-6990
              </a>
            </p>
          </div>

          <div className="footer-social">
            <h4>Siga-nos</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/jvlverticaldrones" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram">
                  <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z"
                      fill="#ffffffff"
                    />
                  </svg>
                </i>
              </a>
              <a href="https://www.youtube.com/@JVLVerticalDrones" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook">
                  <svg fill="#ffffffff" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
                    <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z" />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2025 JVLVerticalDrones. Todos os direitos reservados.</p>
        </div>
      </footer>
      {ModalAberto && <Modal fecharModal={fecharModal} />}
    </>
  );
};

export default Conteudo;
