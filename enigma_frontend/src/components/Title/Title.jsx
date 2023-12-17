import React from 'react';
import './Title.css';
import { Link } from 'react-router-dom';

const Title = () => {
    return (
      <div className="title">
        <h1>Enigma</h1>
        <p>
          Step into the fascinating world of cryptography with Enigma, a virtual
          Enigma Machine web application that brings the iconic encryption
          device from World War II to your fingertips. This user-friendly
          platform allows you to encrypt and decrypt messages using the same
          principles employed by codebreakers during the war.
        </p>
        <div className="nav">
          <Link to="/encrypter">
            <button>Encrypt</button>
          </Link>
          <Link to="/decrypter">
            <button>Decrypt</button>
          </Link>
        </div>
      </div>
    );
}

export default Title;