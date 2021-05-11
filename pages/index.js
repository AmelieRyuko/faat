import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Style from '../styles/style.css'

const Home = () => (
  <div>
    <Head>
      <title>Connexion</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="../styles/style.css">
  
  <style>
  
      label.jsx-3086735343>input.jsx-3086735343{
        width: 210px;
        height: 22px;
        }

      .hero {
        width: 100%;
        color: #333;
      }

      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }

      .title,
      .description {
        text-align: center;
      }

      #formconnect{
      width : 80%;
      margin : auto;     
      }

      #formconnect input{
        display : block;
      width : 100%
      }
  
  </style>
  
    </Head>

    <Nav />
    <div className="hero">
      <h1 className="title">FAAT</h1>
      </div>
      <form action='home' id='formconnect'>
            <label>
             Nom :
            <input type="text" name="name" required/>
           </label>
            <label>
             prenom :
            <input type="text" name="firstname" required/>
           </label>
             <label>
             mail :
            <input type="mail" name="mail" required/>
           </label>
            <label>
             Mot de passe :
            <input type="password" name="password" required/>
           </label>
          <input type="submit" value="Envoyer" />
    </form>
  
  
  </div>
)

export default Home
