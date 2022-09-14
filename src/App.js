import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';


function App() {

  const [entries, setEntries] = useState([{name: "David Lagrange", post: "I love playing guitar. Does anyone want to play with me?"}])


  return (
    <div className="App">
       <DisplayPost parentEntries={entries} /> 
  </div>
  );
}

export default App;