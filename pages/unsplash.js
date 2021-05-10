import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {
  const [photo, setPhoto] = useState("");
  const [clientId, setClientId] = useState(
    "D-7rapu6I0vey6e7EJu5mZEmYNkbVmmcAW4tbNFjiGE"
  );

  const [result,setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit(event) {
    console.log(photo);

    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      photo +
      "&client_id=" +
      clientId;

    axios.get(url).then(response => {
      console.log(response);
      setResult(response.data.results);
    });
  }

  return (
    <div className="App">
      <h1>Unsplash Photo Search in React</h1>
      <input
        onChange={handleChange}
        type="text"
        name="photo"
        placeholder="Search for Photos..."
        />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
  
        {result.map((photo) => (
          <img src={photo}
        ))}
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
