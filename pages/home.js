import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Citation from '../components/Citation'
import FlavorForm from '../components/FlavorForm'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <a href='connect'>Se connecter</a>
    <div className="hero">
      <h1 className="title">FAAT</h1>
    </div>
  
    <MyComponent/>
  <div id="QuoteOFDay"></div>
  <Citation />
  <script>
    var type="theme";
    var theme="ambition";
  </script>
  <script src="https://citations.ouest-france.fr/js/web/export.js?v3"></script>
   
  </div>
)

export default Home
