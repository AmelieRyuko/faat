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
