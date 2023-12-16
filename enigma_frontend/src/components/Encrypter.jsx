import React, { useState, useEffect } from 'react';
import Key from './Key';

export default function Encrypter () {

    const [encryptKeyFromChild, setEncryptKeyFromChild] = useState('');
    const [message, setMessage] = useState('');
    const [encryptedMessage, setEncryptedMessage] = useState('');

  useEffect (() => {
    console.log(encryptKeyFromChild);
  }, [encryptKeyFromChild]);

  const handleEncryptKeyFromChild = (key) => {
    setEncryptKeyFromChild(key);
  }

  const handleEncryptMessage = (event) => {

    event.preventDefault();

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:\'",.<>/?';
    let result = '';

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charIndex = alphabet.indexOf(char);
      const keyIndex = alphabet.indexOf(encryptKeyFromChild[i % encryptKeyFromChild.length]);
      const encodedIndex = (charIndex + keyIndex) % alphabet.length;
      result += alphabet[encodedIndex];
    }

    setEncryptedMessage(result);
    } 

    const handleCopyToClipboard = () => {
      const textArea = document.createElement('textarea');
      textArea.value = encryptedMessage;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    };


    return (
        <div>
            <div>
        <h2>Encrypt a message</h2>
        <form>
          <Key onKeyChange={handleEncryptKeyFromChild} />
          <p>Enter your message here:</p>
          <textarea name="message" 
                    id="message" 
                    rows="4" cols="50" 
                    onChange={(e) => setMessage(e.target.value)} >
                    </textarea>
          <br />
          <input type="submit" value="Generate your encrypted message" onClick={handleEncryptMessage} />
        </form>
      </div>
      <p>Your encrypted message is:</p>
      <textarea
        readOnly
        name="encryptedMessage"
        id="encryptedMessage"
        value={encryptedMessage}
        rows="4"
        cols="50"
      >
        Generated text will appear here
      </textarea>
      <br />
      <button type="button" 
      id="copyToClipboard"
      onClick={handleCopyToClipboard}>
        Copy to clipboard
      </button>
      <hr />
      </div>
        );
    }