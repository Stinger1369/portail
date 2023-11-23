// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './style/Modal.css'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
