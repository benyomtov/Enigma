import React from 'react';
import Encrypter from './components/Encrypter';
import Decrypter from './components/Decrypter';


function App() {

  

  return (
    <div className="App">
      <h1>The Enigma Machine</h1>
      <Encrypter />
      <Decrypter />
        
    </div>
  );
}

export default App;
