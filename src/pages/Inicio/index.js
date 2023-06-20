import Banner from "components/Banner";
import Card from "components/Cards";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import Cabecalho from "components/cabecalho";
import videos from 'json/db.json'
import styles from './Inicio.module.css'
import React from "react";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo> 
        <h1> Um lugar para guardar seus videos e filmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) =>{
          return <Card {...video} key={video.id} />
        })}
      </section>
      <Rodape />
    </>
  );
}