import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>S'inscrire</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
    <div className="hero">
      <h1 className="title">FAAT</h1>
      <p className="mess">Inscrivez-vous à l'application pour retrouver votre sourire ! :)</p>
      </div>
      <form action='home' id='formconnect'>
      <label>
            Nom & Prénom
            <input type="pseudo" name="nom" required/>
           </label>
           <label>
            Email
            <input type="pseudo" name="mail" required/>
           </label>
             <label>
            Pseudonyme
            <input type="pseudo" name="pseudo" required/>
           </label>
            <label>
             Mot de passe
            <input type="password" name="password" required/>
           </label>
          <input className="btn-submit" type="submit" value="S'inscrire" />
          <div className="link">Vous avez déjà un compte ! <a href="/">Connectez-vous ici</a></div>
    </form>
    </main>
     <style jsx>{`
      main{
        position:fixed;
        min-height:100vh;
        background-image: linear-gradient(0deg, #ff91b1 0%, #ffce49 100%);
        color: #554545;
        background-repeat: no-repeat;
        top:0;
        left:0;
        right:0;
        bottom:0;
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
        color:#fffff4;
      }
      p{
        color:purple;
      }
      .title,
      .description,
      .mess{
        text-align: center;
      }
      #formconnect{
      width : 80%;
      margin : auto;  
      text-align:center;   
      }
      #formconnect input{
        display : block;
      width : 200px;
      height:30px;
      background:transparent;
      border:1px solid beige;
      margin:6px auto 6px auto;
      border-radius:5px;
      }
      .btn-submit{
        margin-top:24px !important;
        padding:12px;
        background:beige !important;
        height:50px !important;
        border-radius:25px !important;
      }
      .btn-submit:hover{
        background:#f9ea9c !important;
        color:purple;
        border:1px solid #f9ea9c;
      }
      .link{
        margin-top:12px;
      }
      .link a{
        color:purple;
        text-decoration: none;
        weight-font:bold;
      }
      .link a:hover{
        color:beige;
      }
    `}</style>
  </div>
)

export default Home
