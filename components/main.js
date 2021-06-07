import React from 'react'
import ReactDOM from "react-dom";
import Button from '../components/Button.js'
import MyComponent from '../components/mycomponent.js'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.changeMood = this.changeMood.bind(this)
    this.state = { 
      mood: 'heureux'
    }
  }

  changeMood(mood) {
    this.setState({ mood })
  }

  render() {
    return (
        <div>
          <Button changeMood={this.changeMood} defaultMood={this.state.mood} />                       
          <MyComponent mood={this.state.mood} />
        </div>
          
    );  
  }
}

export default Main;
