import React, { useState } from "react";
import ReactDOM from "react-dom";
//import axios from "axios";

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        results: []
      };
    }

    componentDidMount() {
      fetch("https://api.unsplash.com/search/photos?query=london&client_id=D-7rapu6I0vey6e7EJu5mZEmYNkbVmmcAW4tbNFjiGE")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              results: result.results
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    render() {
      const { error, isLoaded, results } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
 //         <ul>
//            {items.map(item => (
//              <li key={item.name}>
//                {item.name} {item.price}
//              </li>
//            ))}
//          </ul>
            <img  style={{width:400} {margin:auto}} src={results[0].urls.full}/>
         );
      }
    }
  }

  export  default MyComponent;
