import React from 'react'
import Head from 'next/head'

import Main from '../components/main.js'
import Citations from '../components/Citations'

const Home = () => (
  <div>
  <Head>
    <title>Home</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <div className="hero">
    <h1 className="title">FAAT</h1>
    <h2>Comment vous sentez-vous aujourd'hui ?</h2>
    <Main />
    <Citations />
  </div>
  
  <style jsx>{`
    body{
      background-color:pink;
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
    img{
      width:100px;
      weight:100px;
    }
  `}</style>
  </div>
)

export default Home
