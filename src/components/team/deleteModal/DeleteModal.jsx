import React from 'react';
import reactDom from 'react-dom';
import { useMutation, useQueryClient } from 'react-query';
import api from '../../../utils/axios-instance';

import '../../../styles/team/deleteModal/DeleteModal.css';

const DeleteModal = ({ setModalOpen, name, profileID }) => {
  const queryClient = useQueryClient();

  function closeModal({ target, currentTarget }) {
    if (target === currentTarget) {
      setModalOpen(false);
    }
  }

  const deleteProfile = async (profileID) => {
    const { data } = await api.delete(`/profiles/${profileID}`);
    return data;
  };
  const { mutate, isIdle, isLoading, isError, isSuccess, data, error } =
    useMutation(deleteProfile, {
      onSuccess: () => {
        queryClient.invalidateQueries('team');
        setModalOpen(false);
      },
    });

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
            <button
              className="Delete"
              onClick={() => {
                mutate(profileID);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    </div>,
    document.getElementById('portal')
  );
};

export default DeleteModal;
