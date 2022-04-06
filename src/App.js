import "./App.css";
import React, { useRef, useState } from 'react';
import Render from "./Components/Render";
import Title from "./Components/Title";

function App() {
const [ninjas, setNinjas] = useState([]);
const lat = useRef();
const lng = useRef();

//Form Handler
const handleSubmit = (e) => {
  e.preventDefault();
  fetch(`/api/ninjas?lng=${lng.current.value}&lat=${lat.current.value}`).then((data) => {
    return data.json();
  }).then(json => {
    json.forEach( ninja => {
      ninja.available = ninja.available.toString()
    });
    setNinjas(json)
  })
}

return (
  <div>
    <Title/>
    <div className="ninj-container">
        <form id="search" onSubmit={handleSubmit}>
          <label>Enter your latitude:</label>
          <input type='text' ref={lat} placeholder="latitude" required/>
          <label>Enter your longitude:</label>
          <input type='text' ref={lng} placeholder="longitude" required/>
          <input type='submit' value='Find Ninjas'/>
        </form>
      <Render ninjas={ninjas}/>
	  </div>
  </div>
);
}

export default App;
