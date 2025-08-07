import Menu from "../components/home";
import Conteudo from "../components/conteudo";
import React from "react";
import droneImage from "./assets/drone.jpg";

function App() {
  return (
    <>
      <Menu />
      <Conteudo />
      <img className="bg-imagem" src={droneImage} alt="drone" />
    </>
  );
}

export default App;
