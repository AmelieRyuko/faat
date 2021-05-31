import React from 'react'
import Link from 'next/link'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: props.defaultMood
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
    this.props.changeMood(changeEvent.target.value)
  };

  render() {
    return (
  <form>

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
  </form>


    );
  } 
}

export default Button;