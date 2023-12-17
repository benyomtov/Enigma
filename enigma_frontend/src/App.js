import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Encrypter from './components/Encrypter/Encrypter';
import Decrypter from './components/Decrypter/Decrypter';
import Title from './components/Title/Title';


function App() {

  

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Title />} />
        <Route path="/encrypter" element={<Encrypter />} />
        <Route path="/decrypter" element={<Decrypter />} />
      </Routes>
    </Router>
  );
}

export default App;
