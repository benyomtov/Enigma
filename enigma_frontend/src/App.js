import React from 'react';
import Key from './components/Key';


function App() {

  

  return (
    <div className="App">
      <h1>The Enigma Machine</h1>
      <div>
        <h2>Encrypt a message</h2>
        <form>
          <Key></Key>
          <p>Enter your message here:</p>
          <textarea name="message" id="message" rows="4" cols="50"></textarea>
          <br />
          <input type="submit" value="Generate your encrypted message" />
        </form>
      </div>
      <p>Your encrypted message is:</p>
      <textarea
        readonly
        name="encryptedMessage"
        id="encryptedMessage"
        rows="4"
        cols="50"
      >
        Generated text will appear here
      </textarea>
      <br />
      <button type="button" id="copyToClipboard">
        Copy to clipboard
      </button>
      <hr />
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
