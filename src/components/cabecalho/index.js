import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'
import style from "./cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

export default function Cabecalho() {
  return (
    <header className={style.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo Cinetag" />
      </Link>
      <nav>
        <CabecalhoLink url="./">Home</CabecalhoLink>
        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
      </nav>
    </header>
  );
}
