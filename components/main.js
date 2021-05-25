import React from 'react'
import Link from 'next/link'
import ButtonHappy from '../components/buttonhappy.js'
import MyComponent from '../components/mycomponent.js'


class Main extends React.Component {state = { data : "Hello World" } 
  render() {
        return (
            <div>
                 <ButtonHappy  />                       
                 <MyComponent />
                 //dataFromParent = {this.state.data}
            </div>
        );    }
}

export default Main;