import React, { useState, useEffect } from 'react';

export default function Key () {

        const [keyLength, setKeyLength] = useState(4);
        const [encryptKey, setEncryptKey] = useState('');
    
        const handleKeyLengthChange = (event) => {
          setKeyLength(event.target.value);
        };

        useEffect(() => {
            setEncryptKey('');
        }, [keyLength]);

    return (
        <div>
            <p>Set your encoding key here:</p>
          <p>Choose the desired length for your key. Keys can be from 1 to 100 characters in length.</p>
          <small>Please be aware that changing the length of your key will clear the key input.</small>
            <br />
          <input type="number" 
                 id="numberInput" 
                 name="numberInput" 
                 min="1" 
                 max="100" 
                 value = {keyLength}
                 onChange = {handleKeyLengthChange}
                 />
          <br />
          <button type="button" id="generateKey">
            Generate a random key
          </button>
          <br />
          <input 
            type="text" 
            id="encryptkey" 
            name="encryptkey"
            value={encryptKey} 
            maxLength={keyLength}
            onChange ={(event) => setEncryptKey(event.target.value)}
             />
        </div>
    );
}
