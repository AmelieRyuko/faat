import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from '../components/Button.js'
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

    componentDidMount(changeMood) {
      this.timerID = setInterval(      
        () => this.tick(),4000    );
      
      
    }
     componentWillUnmount() {
    clearInterval(this.timerID);  }

    tick() {    
      this.setState({mood: this.props.mood});
      console.log('mood 2 '+ this.props.mood);
      let theme="";
      const mood=this.props.mood;
      switch(mood){
        case("heureux"): theme="zen";
        break;
        case("moyen"):  theme="puppy";
        break;
        case('triste'): theme="kitty";
        break;
        default: theme="zen";
      }
      console.log("theme"+theme);
      fetch("https://api.unsplash.com/search/photos?query="+theme+"&client_id=D-7rapu6I0vey6e7EJu5mZEmYNkbVmmcAW4tbNFjiGE")
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
            //<div>Component MyComponent : {this.props.mood}</div> 
            <img  style={{width:400}} src={results[Math.floor(Math.random() * 5)].urls.full}/>
         );
      }
    }

  }

  export  default MyComponent;