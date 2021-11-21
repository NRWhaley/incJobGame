import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [money, setMoney] = useState(0)
  useEffect(() => {
    console.log('money')
  })
  
  return (
    <div>
      <h1>You have ${money} to your name</h1>
      <button onClick={()=> setMoney(money + 2 - 1)}>Work a Day</button>
    </div>
  );
}

export default App;
