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

img{
width:35%!important;
}

div.jsx-1227986742>img{
width:35%!important;
}

div#__next>div#jsx-3032099879>img{
width:35%!important;
}

MyComponent{
width:35%!important;
}

#MyComponent{
width:35%!important;
}

#MyComponent>img{
width:35%!important;
}

MyComponent>img{
width:35%!important;
}



    `}</style>
  </div>
)

export default Home
