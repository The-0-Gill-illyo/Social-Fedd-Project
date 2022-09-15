import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';



function App() {

  const [entries, setEntries] = useState([{name: "David Lagrange", post: "I love playing guitar. Does anyone want to play with me?"}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];
    
    setEntries(tempEntries);
  }

  return (
    <div className="App">
       <DisplayPost parentEntries={entries} /> 
       <CreatePost addedNewPost={addNewEntry} />
  </div>
  );
}

export default App;