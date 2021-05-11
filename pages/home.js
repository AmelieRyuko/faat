import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Citation from '../components/Citation'
import FlavorForm from '../components/FlavorForm'
import MyComponent from '../components/mycomponent'


const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
//       <link rel="stylesheet" href="https://github.com/AmelieRyuko/faat/blob/main/public/style.css">
        <link rel="stylesheet" href="../public/style.css">
    </Head>

    <Nav />
    <a href='index'>Se connecter</a>
    <div className="hero">
      <h1 className="title">FAAT</h1>
    </div>

  <MyComponent/>
  <Citation />
 

  </div>
)

export default Home
