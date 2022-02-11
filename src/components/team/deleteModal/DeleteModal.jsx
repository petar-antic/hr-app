import React from 'react';
import reactDom from 'react-dom';

import '../../../styles/team/deleteModal/DeleteModal.css';

const DeleteModal = ({ setModalOpen, name }) => {
  function closeModal({ target, currentTarget }) {
    if (target === currentTarget) {
      setModalOpen(false);
    }
  }

  return reactDom.createPortal(
    <div>
      <section className="DeleteModal flex" onClick={closeModal}>
        <div className="Modal">
          <h1>Confirm Deletion</h1>
          <p>
            Are you sure you want to delete {name}'s Profile? This action cannot
            be undone.
          </p>

          <div className="Buttons">
            <button className="Cancel" onClick={() => setModalOpen(false)}>
              Cancel
            </button>
            <button className="Delete">Delete</button>
          </div>
        </div>
      </section>
    </div>,
    document.getElementById('portal')
  );
};

export default DeleteModal;
