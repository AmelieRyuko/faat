import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Se connecter</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <div className="hero">
      <h1 className="title">FAAT</h1>
      </div>
      <form action='home' id='formconnect'>
             <label>
            Pseudonyme:
            <input type="pseudo" name="pseudo" required/>
           </label>
            <label>
             Mot de passe :
            <input type="password" name="password" required/>
           </label>
          <input type="submit" value="Se connecter" />
    </form>
     <style jsx>{`
      
      .hero {
        width: 100%;
        color: black;
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
        width : 35%;
        margin : auto;     
      }
      #formconnect input{
        display : block;
        width : 50%
        line-height: 25px;
        margin-bottom: 20px;
      }

    `}</style>
  </div>
)

export default Home
