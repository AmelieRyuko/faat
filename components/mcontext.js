import React from 'react'
import ReactDOM from "react-dom"
import Link from 'next/link'


export const MContext = React.createContext();  //exporting context object
  class  MyProvider extends React.Component {
    state = {selectedOption: ""}
     render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setMessage: (value) => this.setState({
                            selectedOption: value })}}>
            {this.props.children}   //this indicates that all the child tags with MyProvider as Parent can access the global store.
            </MContext.Provider>)
    }
}
export default MyProvider;