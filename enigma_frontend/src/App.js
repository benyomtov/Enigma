import React from 'react';
import Encrypter from './components/Encrypter';


function App() {

  

  return (
    <div className="App">
      <h1>The Enigma Machine</h1>
      <Encrypter />

        <div>
        <h2>Decrypt a message</h2>
        <form>
          <p>Enter your key here:</p>
          <input type="text" id="decryptkey" name="decryptkey" />
          <p>Enter your encrypted message here:</p>
          <textarea
            name="messageBeforeDecryption"
            id="messageBeforeDecryption"
            rows="4"
            cols="50"
          ></textarea>
          <br />
          <input type="submit" value="Decrypt your message" />
        </form>
      </div>
    </div>
  );
}

export default App;
