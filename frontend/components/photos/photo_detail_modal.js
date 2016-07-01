import React from 'react';
import Modal from '../modal';

export default function PhotoDetailModal(props) {
  if (!props.photo) return <div />;
  return (
    <Modal>
      <div className="modal-content">
        <img src={props.photo.image_url} />
      </div>
    </Modal>
  );
}
