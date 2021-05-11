import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Se connecter</title>
      <link rel="icon" href="/favicon.ico" />
//       <link rel="stylesheet" href="https://github.com/AmelieRyuko/faat/blob/main/public/style.css">
//         <link rel="stylesheet" href="../public/style.css">
          <link rel="stylesheet" href="../style.css">
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
//      <style jsx>{`
//       .hero {
//         width: 100%;
//         color: #333;
//       }
//       .title {
//         margin: 0;
//         width: 100%;
//         padding-top: 80px;
//         line-height: 1.15;
//         font-size: 48px;
//       }
//       .title,
//       .description {
//         text-align: center;
//       }
//       #formconnect{
//       width : 80%;
//       margin : auto;     
//       }
//       #formconnect input{
//         display : block;
//       width : 100%
//       }
//     `}</style>
  </div>
)

export default Home
