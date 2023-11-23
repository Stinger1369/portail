// App.js
import React, { useState } from 'react';
import Modal from './components/Modal';
import Menus from './components/Menus';   
import Tooltips from './components/Tooltips';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Tooltips />
      <Menus />
      <button onClick={toggleModal}>Ouvrir la Modale</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <p>Contenu de la modale</p>
      </Modal>
    </div>
  );
};

export default App;
