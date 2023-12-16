import React from 'react';
import { useState } from 'react';

export default function Decrypter () {

    const [decryptKey, setDecryptKey] = useState('');
    const [messageBeforeDecryption, setMessageBeforeDecryption] = useState('');
    const [messageAfterDecryption, setMessageAfterDecryption] = useState('');

    const handleDecryptKeyChange = (event) => {
        setDecryptKey(event.target.value);
    };

    const handleDecryptMessage = (event) => {
        event.preventDefault();

        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        
        for (let i = 0; i < messageBeforeDecryption.length; i++) {
            const char = messageBeforeDecryption[i];

            if(alphabet.includes(char)) {

                const charIndex = alphabet.indexOf(char);
                const keyIndex = alphabet.indexOf(decryptKey[i % decryptKey.length]);
                
                let encodedIndex = (charIndex - keyIndex) % alphabet.length;
                if (encodedIndex < 0) {
                    encodedIndex += alphabet.length;
                }

                result += alphabet[encodedIndex];

            } else {
                result += char;
              

            }

         
        }

        setMessageAfterDecryption(result);
    };


    return (
        <div>
        <h2>Decrypt a message</h2>
        <form onSubmit={handleDecryptMessage}>
          <p>Enter your key here:</p>
          <input type="text" 
                 id="decryptkey" 
                 name="decryptkey"
                 value={decryptKey}
                 onChange={handleDecryptKeyChange} 
                 />

          <p>Enter your encrypted message here:</p>

          <textarea
            name="messageBeforeDecryption"
            id="messageBeforeDecryption"
            rows="4"
            cols="50"
            value={messageBeforeDecryption}
            onChange={(e) => setMessageBeforeDecryption(e.target.value)}
          ></textarea>
          <br />
          <input type="submit" value="Decrypt your message" />
        </form>
        <p>Your Decrypted Message:</p>
          <textarea
            readOnly
            name="messageAfterDecryption"
            id="messageAfterDecryption"
            rows="4"
            cols="50"
            value={messageAfterDecryption}
          ></textarea>
      </div>
    );

}