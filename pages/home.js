import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import FlavorForm from '../components/FlavorForm'
import MyComponent from '../components/mycomponent'


const Home = () => (
  <div>
   <Head>
      <title>Home</title>
     <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../public/style.css" />
   </Head>

    <Nav />
    <a href='index'>Se connecter</a>
    <div className="hero">
      <h1 className="title">FAAT</h1>
    </div>

  <MyComponent/>
 
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
    `}</style>
  </div>
)

export default Home
