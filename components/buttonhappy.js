import React from 'react'
import Link from 'next/link'
import MContext from'../components/mcontext.js'

class ButtonHappy extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      selectedOption: "heureux"
    };
  }

handleOptionChange = changeEvent => {
  this.setState({
    selectedOption: changeEvent.target.value
  });
};

handleFormSubmit = formSubmitEvent => {
  formSubmitEvent.preventDefault();
  console.log("You have submitted:", this.state.selectedOption);
  const theme = 'coffee';
  if(this.state.selectedOption ==="heureux"){
    console.log("hello heureux");
    const theme = 'rainbow';
     console.log(theme);
  };
  if(this.state.selectedOption ==="moyen"){
    console.log("hello moyen");
    const theme = 'puppy';
  };
  if(this.state.selectedOption ==="triste"){
    console.log("hello triste");
    const theme = 'kitty';
  };
  context.setMessage(theme);

};

  render() {
    return (
<form onSubmit={this.handleFormSubmit}>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="heureux"
        checked={this.state.selectedOption === "heureux"}
        onChange={this.handleOptionChange}
        className="form-check-input"
      />
      Heureux
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="moyen"
        checked={this.state.selectedOption === "moyen"}
        onChange={this.handleOptionChange}
        className="form-check-input"
      />
      Moyen
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="triste"
        checked={this.state.selectedOption === "triste"}
        onChange={this.handleOptionChange}
        className="form-check-input"
      />
      Triste
    </label>
  </div>
 <MContext.Consumer>
  <div className="form-group">
    <button className="btn btn-primary mt-2" type="submit">
      Save
    </button>
  </div>
</MContext.Consumer>

</form>


    );
  } 
}

export default ButtonHappy;

