import React from 'react'
import Link from 'next/link'


const Footer = () => (
  <footer>
    <div>LPWD - Équipe 1</div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
     footer{
        text-align: right;
        color:beige;
        position:fixed;
        bottom:0;
        right:0;
        left:0;
   		font-size:12px;
   		padding:12px;
      }
    `}</style>
  </footer>
)

export default Footer
