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
          width : 100%;
          margin-bottom: 20px;
          line-height: 25px;
          border: none;
          border-radius: 5px;
          padding: 5px;
       }

      #formconnect input:nth-child(2){
        width: fit-content;
        margin: auto;
        padding: 13px;
        border: none;
        border-radius: 5px;
        box-shadow: 3px 3px 7px #80808082;
        cursor: pointer;
      }

      #formconnect.jsx-2367194551{
        width : 35%;
        margin : auto; 
      }   

      input.jsx-2367194551{
        width : 100%;        
        display : block;
        margin-bottom: 20px;
        line-height: 25px;
        border: none;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
      }   

      input[type="submit" i] {
        cursor: pointer;
      }

      nav.jsx-2250620709>ul.jsx-2250620709 {
          display:none;
      }

    `}</style>
  </div>
)

export default Home
