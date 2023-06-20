import Banner from "components/Banner";
import Rodape from "components/Rodape";
import Cabecalho from "components/cabecalho";
import React from "react";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Rodape />
    </>
  );
}
