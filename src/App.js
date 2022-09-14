import React, { useState } from 'react';


function App() {

  const [entries, setEntries] = useState([{name: 'David Lagrange', post: 'I love playing guitar. Does anyone want to play with me?'}])


  return (
    <div className="App">
      <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Post</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>"David Lagrange"</td>
          <td>'I love playing guitar. Does anyone want to play with me?'</td>
        </tr>
      </tbody>
    </table>  
  </div>
  );}

export default App;