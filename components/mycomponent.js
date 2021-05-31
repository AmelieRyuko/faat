import React, { useState } from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        results: []
      };
    }

    render() {
      return (
        <div>Component MyComponent : {this.props.mood}</div> 
      )
    }
  }

  export  default MyComponent;
