import React from 'react'
import Head from 'next/head'
import Main from '../components/main.js'
import Citations from '../components/Citations.js'
import Footer from '../components/footer.js'

const Home = () => (
  <div>
  <Head>
    <title>Home</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main>
  <div className="hero">
    <div className="link"><a href="/"> Déconnexion</a></div>
    <h1 className="title">FAAT</h1>
    <h2>Comment vous sentez-vous aujourd'hui ?</h2>
    <Main />
    <Citations />
  </div>
  </main>
  
 <style jsx>{`
      main{
        position:absolute;
        min-height:100vh;
        background-image: linear-gradient(0deg, #ff91b1 0%, #ffce49 100%);
        color: #554545;
        background-repeat: no-repeat;
        top:0;
        left:0;
        right:0;
        bottom:-110;
        text-align:center;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 24px;
        line-height: 1.15;
        font-size: 48px;
        color:#fffff4;
      }
      h2{
        color:purple;
        text-align:center;
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
        margin-right:10px;
        text-align: right;
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
<Footer />
  </div>
)

export default Home
