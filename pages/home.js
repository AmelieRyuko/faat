import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import MyComponent from '../components/mycomponent'


const Home = () => (
  <div>
   <Head>
      <title>FAAT</title>
     <link rel="icon" href="/favicon.ico" />
   </Head>

    <Nav />
    <a href='index'>Connexion</a>
    <div className="hero">
      <h1 className="title">FAAT</h1>
    </div>

  <MyComponent/>
 
 <style jsx>{`

//       .hero {
//         width: 100%;
//         color: red;
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
    


h1{
color:black;
text-align: center;
font-size: 48px;
}

div.jsx-2430414152{
display:flex;
}

img{
width: auto;
margin: auto;
height: 400px;
}



    `}</style>
  </div>
)

export default Home
